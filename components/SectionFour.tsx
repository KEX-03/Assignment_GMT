export function SectionFour() {
  return (
    <section className="w-full bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Image */}
          <div className="w-full h-130 lg:h-170 overflow-hidden">
            <img
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="max-w-xl flex flex-col gap-6">
            <h2 className="font-serif text-4xl text-primary leading-tight">
              You don’t have to do this all <em>alone</em>.
            </h2>

            <p className="text-textMuted">
              If you are facing any of these, there’s hope:
            </p>

            <ul className="list-disc list-inside space-y-3 text-textMuted">
              <li>Persistent feelings of sadness or hopelessness</li>
              <li>Trouble focusing or making decisions</li>
              <li>Difficulty maintaining relationships</li>
              <li>Feeling constantly exhausted or unmotivated</li>
              <li>A pervasive sense of being overwhelmed</li>
            </ul>

            <p className="text-textMuted mt-4">
              With empathy and guidance, we'll work together to navigate the
              challenges life throws your way.
            </p>

            <div className="mt-10 flex justify-center lg:justify-start">
              <a
                href="/contact"
                className="inline-flex px-10 py-4 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
              >
                Work with me
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
