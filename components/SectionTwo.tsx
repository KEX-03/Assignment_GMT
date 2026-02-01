export function SectionTwo() {
  return (
    <section className="w-full bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <div className="flex flex-col gap-6 max-w-xl">
            <h2 className="font-serif text-4xl text-primary leading-tight">
              A grounded approach to therapy
            </h2>

            <p className="text-textMuted leading-relaxed">
              I work with adults who appear capable and high-functioning on the outside, yet feel overwhelmed, anxious, or emotionally depleted on the inside. 
              Many of my clients are thoughtful, self-aware, and driven—but struggle with constant overthinking, tension in their body, or the sense that they’re always bracing for something to go wrong.
            </p>

            <p className="text-textMuted leading-relaxed">
              Therapy can be a space to slow down, feel supported, and begin understanding what your mind and nervous system are responding to. 
              Together, we work toward clarity, regulation, and more sustainable ways of living and relating to yourself.
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
