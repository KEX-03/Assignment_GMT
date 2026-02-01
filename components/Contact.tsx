export function Contact() {
  return (
    <section className="w-full bg-accent/60">
      <div className="max-w-4xl mx-auto px-6 py-28 text-center">

        <h3 className="font-serif text-3xl md:text-4xl text-black mb-6">
          Begin at your own pace.
        </h3>

        <p className="text-black-300 leading-relaxed max-w-2xl mx-auto mb-12">
          Therapy doesn’t require having everything figured out. If you’re feeling overwhelmed or stretched thin, support is available.
          If you’re ready to take a first step toward feeling more grounded, supported, and at ease, I invite you to reach out.
        </p>
        
        <p className="text-black-300 leading-relaxed max-w-2xl mx-auto mb-12">  
          You’re welcome to contact me to schedule an initial consultation and explore whether working together feels like a good fit.
        </p>

        
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-white text-black font-medium hover:text-white hover:bg-primary transition"
        >
          Get in touch
        </a>

      </div>
    </section>
  );
}
