"use client";

import { useMemo, useState } from "react";
import type { Quiz } from "@/lib/quizzes";
import { useLocale } from "@/lib/LocaleContext";
import { PillButton } from "./PillButton";

type Stage = "intro" | number | "result";

export function QuizCard({ quiz }: { quiz: Quiz }) {
  const { t } = useLocale();
  const [stage, setStage] = useState<Stage>("intro");
  const [tagHistory, setTagHistory] = useState<Set<string>[]>([new Set()]);
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const currentTags = tagHistory[tagHistory.length - 1];

  const result = useMemo(() => {
    if (stage !== "result") return null;
    return quiz.results.find((r) => r.match(currentTags)) ?? quiz.results[quiz.results.length - 1];
  }, [stage, currentTags, quiz.results]);

  function start() {
    setTagHistory([new Set()]);
    setSelected(new Set());
    setStage(0);
  }

  function toggleMulti(tags: string[]) {
    setSelected((prev) => {
      const key = tags.join("|");
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function isSelected(tags: string[]) {
    return selected.has(tags.join("|"));
  }

  function commitAndAdvance(tags: string[]) {
    const newTags = new Set(currentTags);
    tags.forEach((tag) => newTags.add(tag));
    const nextIndex = (typeof stage === "number" ? stage : 0) + 1;
    setTagHistory((prev) => [...prev, newTags]);
    setSelected(new Set());
    if (nextIndex >= quiz.questions.length) {
      setStage("result");
    } else {
      setStage(nextIndex);
    }
  }

  function handleSingle(tags: string[]) {
    commitAndAdvance(tags);
  }

  function handleMultiContinue() {
    const question = quiz.questions[stage as number];
    const chosenTags = question.options
      .filter((opt) => isSelected(opt.tags))
      .flatMap((opt) => opt.tags);
    commitAndAdvance(chosenTags);
  }

  function goBack() {
    if (typeof stage !== "number" || stage === 0) {
      setStage("intro");
      return;
    }
    setTagHistory((prev) => prev.slice(0, -1));
    setSelected(new Set());
    setStage(stage - 1);
  }

  const question = typeof stage === "number" ? quiz.questions[stage] : null;

  return (
    <div className="flex flex-col rounded-2xl border border-gold-200 bg-white p-6 shadow-card sm:p-7">
      <h3 className="font-headline text-lg font-bold text-ink">{quiz.title}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-slate">{quiz.description}</p>

      {stage === "intro" && (
        <div className="mt-5">
          <PillButton variant="outline" onClick={start} className="text-xs">
            {t.tools.startLabel}
          </PillButton>
        </div>
      )}

      {question && (
        <div key={stage as number} className="mt-6 animate-fade-in-up border-t border-gold-100 pt-5">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-gold-600">
            {(stage as number) + 1} / {quiz.questions.length}
          </p>
          <p className="mt-2 text-[15px] font-semibold leading-snug text-ink">{question.prompt}</p>

          <div className="mt-4 flex flex-col gap-2">
            {question.type === "single"
              ? question.options.map((opt) => (
                  <button
                    key={opt.label}
                    type="button"
                    onClick={() => handleSingle(opt.tags)}
                    className="rounded-xl border border-gold-200 px-4 py-3 text-left text-sm text-ink transition-colors hover:border-gold-400 hover:bg-gold-50"
                  >
                    {opt.label}
                  </button>
                ))
              : question.options.map((opt) => {
                  const active = isSelected(opt.tags);
                  return (
                    <button
                      key={opt.label}
                      type="button"
                      onClick={() => toggleMulti(opt.tags)}
                      aria-pressed={active}
                      className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors ${
                        active
                          ? "border-gold-500 bg-gold-50 text-ink"
                          : "border-gold-200 text-ink hover:border-gold-300 hover:bg-gold-50/60"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${
                          active ? "border-gold-500 bg-gold-500" : "border-gold-300 bg-white"
                        }`}
                      >
                        {active && (
                          <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                            <path d="M1 3.5L3.2 5.5L8 1" stroke="#161410" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      {opt.label}
                    </button>
                  );
                })}
          </div>

          <div className="mt-5 flex items-center gap-3">
            <button
              type="button"
              onClick={goBack}
              className="text-xs font-semibold text-slate underline-offset-2 hover:text-ink hover:underline"
            >
              {t.tools.backLabel}
            </button>
            {question.type === "multi" && (
              <PillButton variant="primary" onClick={handleMultiContinue} className="ml-auto px-5 py-2 text-xs">
                {t.tools.nextLabel}
              </PillButton>
            )}
          </div>
        </div>
      )}

      {stage === "result" && result && (
        <div className="mt-6 animate-fade-in-up border-t border-gold-100 pt-5">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-gold-600">{t.tools.resultTitle}</p>
          <p className="mt-2 font-headline text-lg font-bold text-ink">{result.title}</p>
          <p className="mt-2 text-[15px] leading-relaxed text-slate">{result.body}</p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <PillButton href="#final-cta" variant="primary" className="px-5 py-2.5 text-xs">
              {t.tools.ctaFromResult}
            </PillButton>
            <button
              type="button"
              onClick={start}
              className="text-xs font-semibold text-slate underline-offset-2 hover:text-ink hover:underline"
            >
              {t.tools.restartLabel}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
