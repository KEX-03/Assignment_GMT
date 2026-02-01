export function FooterTop() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">

          {/* Left — Business Info */}
          <div>
            <h3 className="font-serif text-2xl mb-4">
              Lilac Template
            </h3>

            <p className="text-textMuted leading-relaxed">
              123 Example Road
              <br />
              Minneapolis, MN
              <br />
              <br />
              <a
                href="mailto:email@example.com"
                className="hover:underline"
              >
                email@example.com
              </a>
              <br />
              <a
                href="tel:5555555555"
                className="hover:underline"
              >
                (555) 555-5555
              </a>
            </p>
          </div>

          {/* Middle — Hours */}
          <div>
            <h4 className="font-medium mb-4">
              Hours
            </h4>

            <p className="text-textMuted">
              Monday – Friday
              <br />
              10am – 6pm
            </p>
          </div>

          {/* Right — Navigation */}
          <div className="md:text-right">
            <h4 className="font-medium mb-4">
              Find
            </h4>

            <nav className="text-textMuted space-y-1">
              <a href="/home" className="block hover:underline">
                Home
              </a>
              <a href="/contact" className="block hover:underline">
                Contact
              </a>
              <a href="/blog" className="block hover:underline">
                Blog
              </a>
            </nav>
          </div>

        </div>
      </div>
    </section>
  );
}
