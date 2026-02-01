const faqs = [
  {
    question: "Do you take insurance?",
    answer: "I am an out-of-network provider. I can provide documentation for clients who wish to seek reimbursement from their insurance company.",
  },
  {
    question: "What are your rates?",
    answer: "Session fees vary depending on the type of service. Please reach out directly for current rates and availability.",
  },
  {
    question: "Do you have any openings?",
    answer: "Availability changes periodically. I encourage you to contact me to inquire about current openings or to join a waitlist.",
  },
];

export function SectionSix() {
  return (
    <section className="w-full bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <div className="w-full max-w-md h-110 overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1637580678284-da66cab7cd95?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="FAQs"
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
