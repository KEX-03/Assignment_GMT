export function FooterBottom() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10 text-center">

        {/* Legal Links */}
        <p className="text-xs text-textMuted space-x-4 mb-4">
          <a href="/privacy-policy" className="hover:underline">
            Privacy & Cookies Policy
          </a>
          <a href="/good-faith-estimate" className="hover:underline">
            Good Faith Estimate
          </a>
          <a href="/terms-conditions" className="hover:underline">
            Website Terms & Conditions
          </a>
          <a href="/disclaimer" className="hover:underline">
            Disclaimer
          </a>
        </p>

        {/* Copyright */}
        <p className="text-xs text-textMuted">
          All Rights Reserved © 2024 Grow My Therapy, LLC.
        </p>

      </div>
    </section>
  );
}
