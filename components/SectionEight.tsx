export function SectionEight() {
  return (
    <section className="w-full bg-[#0f0f0f]">
      <div className="max-w-4xl mx-auto px-6 py-28 text-center">

        {/* Heading */}
        <h3 className="font-serif text-3xl md:text-4xl text-white mb-6">
          Get started today.
        </h3>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto mb-12">
          Ready to take the first step towards a happier, healthier you?
          <br />
          Contact me to book your first session. I look forward to starting
          this therapeutic journey with you.
        </p>

        {/* CTA Button */}
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black font-medium hover:bg-gray-200 transition"
        >
          Get in touch
        </a>

      </div>
    </section>
  );
}
