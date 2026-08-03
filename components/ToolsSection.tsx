"use client";

import { useLocale } from "@/lib/LocaleContext";
import { quizzes } from "@/lib/quizzes";
import { Section } from "./Section";
import { QuizCard } from "./QuizCard";

export function ToolsSection() {
  const { t, locale } = useLocale();
  const list = quizzes[locale];

  return (
    <Section id="tools" eyebrow={t.tools.eyebrow} title={t.tools.title} intro={t.tools.body} tone="white">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((quiz) => (
          <QuizCard key={quiz.id} quiz={quiz} />
        ))}
      </div>
    </Section>
  );
}
