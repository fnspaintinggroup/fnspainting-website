import { HelpCircle } from "lucide-react";
import { Section } from "@/components/Section";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  faqs: FaqItem[];
  className?: string;
};

export function FaqSection({ eyebrow, title, intro, faqs, className = "" }: FaqSectionProps) {
  return (
    <Section eyebrow={eyebrow} title={title} intro={intro} className={className}>
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-md border border-ink/10 bg-white p-5 shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-start gap-3 text-lg font-semibold leading-7 text-ink">
              <HelpCircle
                aria-hidden="true"
                className="mt-1 shrink-0 text-clay"
                size={20}
              />
              <span>{faq.question}</span>
            </summary>
            <p className="mt-4 pl-8 text-sm leading-6 text-ink/68">{faq.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
