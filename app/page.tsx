export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <div className="max-w-7xl w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <div
            className="relative w-full max-w-md h-[500px] lg:h-[650px] overflow-hidden"
            style={{
              clipPath:
                "path('M0.495 0A0.505 0.336 0 0 0 0 0.329V1H1V0.329A0.505 0.336 0 0 0 0.495 0')",
            }}
          >
            <img
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/08197a74-c045-4a19-a7c9-0f85c1032bc4/daiga-ellaby-M2P08N9zi2k-unsplash.jpg"
              alt="Therapy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight">
            Live your life <br /> in full bloom
          </h1>

          <p className="text-lg text-gray-600">
            Therapy for Adults in Minneapolis, MN.
          </p>

          <a
            href="#"
            className="inline-block mt-4 px-8 py-3 rounded-full bg-black text-white text-sm tracking-wide hover:bg-gray-800 transition"
          >
            Connect with me
          </a>
        </div>
      </div>
    </section>
  );
}
