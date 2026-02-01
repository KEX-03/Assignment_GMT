const specialties = [
  {
    title: "Anxiety & Stress Therapy",
    description:
      "Support for adults experiencing persistent worry, overthinking, panic symptoms, or chronic stress. This work focuses on understanding how anxiety shows up both mentally and physically, and developing tools to feel more grounded, regulated, and present in daily life. Sessions integrate evidence-based approaches such as CBT, mindfulness, and body-oriented techniques.",
    image:
      "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg",
  },
  {
    title: "Trauma-Informed Therapy",
    description:
      "Therapy for adults impacted by past experiences, including single-incident trauma or long-standing patterns related to childhood, relationships, or chronic stress. This approach is paced carefully, with an emphasis on safety, stabilization, and nervous system regulation. Trauma work may include EMDR and somatic practices to support healing without re-traumatization.",
    image:
      "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/f53aed66-5bd9-43e0-b00b-3a3537fed68d/ori-song-LPbKfdQJS2E-unsplash.jpg",
  },
  {
    title: "Burnout & High-Achiever Support",
    description:
      "Designed for professionals, creatives, and high-functioning individuals experiencing emotional exhaustion, perfectionism, or internal pressure. Therapy provides space to slow down, reconnect with yourself, and explore more sustainable ways of working and living—without sacrificing your values or well-being.",
    image:
      "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/515651b9-4001-47ae-8ca1-2a6ff8f2bef0/ivana-cajina--wn1PECo5-U-unsplash.jpg",
  },
];

export function SectionThree() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">

        {/* Section Title */}
        <p className="text-center font-serif text-4xl text-primary mb-16">
          Areas I support
        </p>

        {/* Grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {specialties.map((item) => (
            <li
              key={item.title}
              className="border border-borderSubtle p-6 flex flex-col justify-between"
            >
              {/* Text */}
              <div>
                <h3 className="font-serif text-2xl text-primary">
                  {item.title}
                </h3>

                <p className="text-textMuted mt-6 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Image */}
              <div className="mt-10 flex justify-center">
                <div className="w-44 h-44 rounded-full overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
