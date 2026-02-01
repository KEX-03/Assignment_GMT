const faqs = [
  {
    question: "Do you take insurance?",
    answer: "Answer goes here.",
  },
  {
    question: "What are your rates?",
    answer: "Answer goes here.",
  },
  {
    question: "Do you have any openings?",
    answer: "Answer goes here.",
  },
];

export function SectionSix() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <div
            className="w-full max-w-md h-110 overflow-hidden"
            style={{
              clipPath:
                "path('M0.495 0A0.505 0.336 0 0 0 0 0.329V1H1V0.329A0.505 0.336 0 0 0 0.495 0')",
            }}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* FAQ Content */}
          <div className="max-w-xl">
            <h2 className="font-serif text-4xl text-primary mb-10">
              FAQs
            </h2>

            <div className="divide-y divide-borderSubtle">
              {faqs.map((item) => (
                <details key={item.question} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-textPrimary font-medium">
                    <span className="pl-2">{item.question}</span>
                    <span className="ml-4 text-xl transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 text-textMuted max-w-sm pl-2">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
