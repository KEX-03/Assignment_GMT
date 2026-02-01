export function HeroSection() {
  return (
    <section className="relative w-full min-h-screen mt-10 flex items-center justify-center bg-white overflow-hidden">
      <div className="max-w-7xl w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <div className="relative w-full min-h-[85vh] overflow-hidden rounded-3xl">
            <img
              src="https://plus.unsplash.com/premium_photo-1665990294064-d601f29f2fca?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Therapy"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
          <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight">
            Live your life 
            <br /> 
            in full bloom
          </h1>

          <p className="text-lg text-gray-600">
            Therapy for adults in Santa Monica, California
            <br />
            Supporting anxiety, trauma, and burnout with care and depth.
          </p>
          </div>
          <div className="flex justify-center items-center">
          <a
            href="#"
            className="inline-block mt-4 px-8 py-3 rounded-full bg-accent text-white text-sm tracking-wide hover:bg-primary/90 transition"
            >
            Connect with me
          </a>

          </div>
              </div>
      </div>
    </section>
  );
}