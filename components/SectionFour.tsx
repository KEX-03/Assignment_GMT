export function SectionFour() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div className="max-w-xl flex flex-col gap-6">
            <h2 className="font-serif text-4xl text-primary leading-tight">
              When life feels overwhelming beneath the surface
            </h2>

            <p className="text-textMuted">
              If you’re experiencing any of the following, support is available:
            </p>

            <ul className="list-disc list-inside space-y-3 text-textMuted">
              <li>Ongoing anxiety or a sense of constant mental pressure</li>
              <li>Feeling “on edge” or tense in your body without a clear reason</li>
              <li>Persistent overthinking or self-criticism</li>
              <li>Emotional exhaustion or professional burnout</li>
              <li>Feeling functional on the outside while struggling internally</li>
            </ul>

            <p className="text-textMuted mt-4">
              I work with adults who are capable, thoughtful, and self-aware, yet feel overwhelmed by anxiety, stress, or the impact of past experiences. 
              Therapy can offer a structured, supportive space to slow down, better understand your emotional and physiological responses, and develop more sustainable ways of coping and living.
            </p>

            <div className="mt-10 flex justify-center lg:justify-end">
              <a
                href="/contact"
                className="inline-flex px-10 py-4 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
              >
                Work with me
              </a>
            </div>
          </div>
          <div className="w-full h-130 lg:h-170 overflow-hidden rounded-3xl">
            <img
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
