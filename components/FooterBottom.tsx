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

        {/* Credits */}
        <p className="text-xs text-textMuted mb-4">
          Website Template Credits:{" "}
          <a
            href="https://www.gobloomcreative.com/"
            target="_blank"
            className="hover:underline"
          >
            Go Bloom Creative
          </a>
        </p>

        {/* Copyright */}
        <p className="text-xs text-textMuted">
          All Rights Reserved © 2024 Your Business Name Here, LLC.
        </p>

      </div>
    </section>
  );
}
