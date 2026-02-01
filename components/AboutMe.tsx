export function AboutMe() {
  return (
    <section className="w-full bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Images */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Circular accent image */}
            <div className="w-full max-w-md">
              <img
                src="/images/Dr. Maya Reynolds.png"
                alt="Dr. Maya Reynolds"
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-xl flex flex-col gap-6">
            <h2 className="font-serif text-4xl text-primary">
              Hi, I’m Dr. Maya Reynolds.
            </h2>

            <p className="text-textMuted leading-relaxed">
              I’m a licensed clinical psychologist based in Santa Monica, California, working with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. 
              Many of the people I work with are thoughtful, high-achieving, and self-aware—but internally feel exhausted, on edge, or stuck in cycles of overthinking.
            </p>

            <p className="text-textMuted leading-relaxed">
              My approach to therapy is warm, collaborative, and grounded. 
              Sessions are structured enough to feel supportive, while still allowing space for reflection and depth. 
              Together, we’ll work toward greater insight, emotional regulation, and more sustainable ways of living and relating to yourself.
            </p>

            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex px-8 py-3 bg-primary text-white rounded-full hover:bg-accent/90 transition"
              >
                Let's chat
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
