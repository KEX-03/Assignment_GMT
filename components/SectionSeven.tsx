const backgroundItems = [
  {
    title: "Education",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    title: "Licensure",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
  {
    title: "Certifications",
    content:
      "Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.",
  },
];

export function SectionSeven() {
  return (
    <section className="w-full bg-secondary">
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
