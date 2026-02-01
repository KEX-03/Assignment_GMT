export function MyApproach() {
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
          <div className="w-full h-130 lg:h-180 rounded-2xl overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1664378617229-c61c6fa13d91?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
