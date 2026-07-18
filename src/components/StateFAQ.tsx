"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

export default function StateFAQ({ faqs, stateName }: { faqs: FAQ[]; stateName: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-4">
        {stateName} Overtime FAQ
      </h2>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={faq.question} className="border border-slate-200 rounded-md overflow-hidden">
            <button
              type="button"
              id={`faq-question-${index}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              className="w-full px-4 py-3 text-left bg-slate-50 hover:bg-slate-100 transition-colors flex justify-between items-center"
            >
              <span className="font-semibold text-slate-900">{faq.question}</span>
              <span aria-hidden="true" className="text-blue-600 ml-4 flex-shrink-0">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className="px-4 py-3 text-slate-700 bg-white"
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
