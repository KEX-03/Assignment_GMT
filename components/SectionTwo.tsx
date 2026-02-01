export function SectionTwo() {
  return (
    <section className="w-full bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="flex flex-col gap-6 max-w-xl">
            <h2 className="font-serif text-4xl text-primary leading-tight">
              Live a fulfilling life.
            </h2>

            <p className="text-textMuted leading-relaxed">
              Life can be challenging—especially when you're trying to balance
              your personal and professional life.
            </p>

            <p className="text-textMuted leading-relaxed">
              It's easy to feel like you're alone in facing these challenges,
              but I want you to know that I'm here to help.
            </p>

            <a
              href="/contact"
              className="inline-flex justify-center items-center mt-6 px-10 py-4 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
            >
              Get in touch
            </a>
          </div>

          {/* Image */}
          <div className="w-full h-130 lg:h-160 overflow-hidden">
            <img
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
