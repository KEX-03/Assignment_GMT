export default function OurOffice() {
  return (
    <section className="bg-secondary py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.8fr_3.2fr] gap-20 items-center">

        {/* Content */}
        <div className="space-y-6">
          <h2 className="text-4xl sm:text-5xl font-serif text-primary">
            A Calm Space for Healing
          </h2>

          <p className="text-lg text-textMuted leading-relaxed max-w-xl">
            Our office in Santa Monica is designed to feel calm,
            private, and grounding—a space where you can slow down and feel
            supported from the moment you arrive.
          </p>

          <p className="text-lg text-textMuted leading-relaxed max-w-xl">
            The environment is intentionally uncluttered, filled with natural
            light, soft textures, and neutral tones to help create a sense of
            ease and safety. Clients often share that the space itself helps
            them settle, breathe more deeply, and feel present.
          </p>

          {/* Supporting Details */}
          <div className="pt-4 space-y-4 max-w-xl">
            <div>
              <p className="text-sm uppercase tracking-wide text-primary">
                Office Location
              </p>
              <p className="text-base text-textMuted mt-1">
                123th Street 45 W<br />
                Santa Monica, CA 90401
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide text-primary">
                Session Options
              </p>
              <p className="text-base text-textMuted mt-1">
                In-person sessions are offered in Santa Monica, with the option
                for secure virtual sessions when preferred.
              </p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wide text-primary">
                Your Comfort & Privacy
              </p>
              <p className="text-base text-textMuted mt-1">
                Sessions take place in a quiet, confidential setting designed
                to support emotional safety, comfort, and discretion.
              </p>
            </div>
          </div>
        </div>

        {/* Images */}
        <div className="relative grid grid-cols-2 gap-6">
          <div className="overflow-hidden rounded-3xl h-[420px] lg:h-[520px]">
            <img
              src="/images/office1.jpeg"
              alt="Therapy office interior with natural light"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="overflow-hidden rounded-3xl h-[420px] lg:h-[520px] translate-y-14">
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
