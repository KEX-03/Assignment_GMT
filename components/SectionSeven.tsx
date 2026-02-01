const backgroundItems = [
  {
    title: "Education",
    content:
      "Doctor of Psychology (PsyD) in Clinical Psychology, with advanced training in trauma-informed care and evidence-based treatment approaches.",
  },
  {
    title: "Licensure",
    content:
      "Licensed Clinical Psychologist in California with a focus on providing compassionate, evidence-based care to adults.",
  },
  {
    title: "Certifications",
    content:
      "Ongoing training in EMDR, mindfulness-based interventions, and body-oriented therapeutic techniques.",
  },
];

export function SectionSeven() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-3xl mx-auto px-6 py-24">

        {/* Heading */}
        <h3 className="text-center font-serif text-3xl text-primary mb-12">
          My Professional Background
        </h3>

        {/* Accordion */}
        <div className="divide-y divide-borderSubtle">
          {backgroundItems.map((item) => (
            <details key={item.title} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-textPrimary">
                <span>{item.title}</span>
                <span className="text-lg transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 text-textMuted max-w-sm">
                {item.content}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
