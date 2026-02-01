export default function OurOffice() {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[2fr_3fr] gap-16 items-center">

        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-serif text-primary">
            A Calm Space for Healing
          </h2>

          <p className="text-lg text-textMuted leading-relaxed max-w-xl">
            Dr. Maya Reynolds’s Santa Monica office is designed to feel calm,
            private, and grounding—a space where you can slow down and feel
            supported from the moment you arrive.
          </p>

          <p className="text-base text-textMuted leading-relaxed max-w-xl">
            The environment is intentionally uncluttered, filled with natural
            light, soft textures, and neutral tones to help create a sense of
            ease and safety. Clients often share that the space itself helps
            them settle, breathe more deeply, and feel present.
          </p>

          <div className="pt-4">
            <p className="text-sm uppercase tracking-wide text-primary">
              Office Location
            </p>
            <p className="text-base text-textMuted mt-1">
              123th Street 45 W<br />
              Santa Monica, CA 90401
            </p>
          </div>
        </div>

        {/* Images */}
        <div className="relative grid grid-cols-2 gap-6">
          {/* Image 1 */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/office1.jpeg"
              alt="Therapy office interior with natural light"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 (slightly offset for depth) */}
          <div className="overflow-hidden rounded-2xl translate-y-10">
            <img
              src="/images/office2.jpeg"
              alt="Calm and private therapy space"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
