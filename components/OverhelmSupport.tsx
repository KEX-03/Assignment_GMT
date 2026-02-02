export function OverwhelmSupport() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <div className="w-full h-130 lg:h-170 overflow-hidden rounded-3xl">
            <img
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="max-w-xl flex flex-col gap-6">
            <h2 className="font-serif text-4xl text-primary leading-tight">
              Support for Adults Navigating Internal Pressure and Emotional Overload
            </h2>

            <p className="text-textMuted">
              Many of my clients are thoughtful, driven, and self-aware. 
              They often manage careers, relationships, and responsibilities well—yet privately struggle with persistent worry, physical tension, emotional fatigue, or the sense that they’re constantly “on alert.”
            </p>

            <p className="text-textMuted">
              You may relate if you:
            </p>

            <ul className="list-disc list-inside space-y-3 text-textMuted">
              <li>Feel mentally exhausted from constant overthinking</li>
              <li>Experience anxiety, panic, or a tightness that never fully settles</li>
              <li>Appear high-functioning but feel disconnected or depleted</li>
              <li>Carry the impact of earlier experiences that still shape how you relate to others</li>
              <li>Are burned out from years of pushing through stress</li>
            </ul>

            <p className="text-textMuted mt-4">
              Therapy offers a space to explore these patterns safely, at a pace that respects your nervous system and lived experience.
            </p>

            {/* <div className="mt-10 flex justify-center lg:justify-center"> 
              <a
                  href="/contact"
                  className="inline-flex px-10 py-4 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
                  >
                  Work with me
                  </a>
                  </div>
                  */}
          </div>
        </div>
      </div>
    </section>
  );
}
