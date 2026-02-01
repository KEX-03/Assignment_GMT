export function SectionFive() {
  return (
    <section className="w-full bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Images */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main arched image */}
            <div
              className="w-90 h-130 overflow-hidden"
              style={{
                clipPath:
                  "path('M0.495 0A0.505 0.336 0 0 0 0 0.329V1H1V0.329A0.505 0.336 0 0 0 0.495 0')",
              }}
            >
              <img
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Circular accent image */}
            <div className="absolute -bottom-12 -right-6 w-40 h-40 rounded-full overflow-hidden border border-borderSubtle">
              <img
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-xl flex flex-col gap-6">
            <h2 className="font-serif text-4xl text-primary">
              Hi, I’m Lilac.
            </h2>

            <p className="text-textMuted leading-relaxed">
              I'm committed to providing a safe and supportive environment where
              we can explore your thoughts, feelings, and behaviors. With empathy
              and guidance, we'll work together to navigate the challenges life
              throws your way.
            </p>

            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition"
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
