export function MyApproach() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="w-full h-130 lg:h-180 rounded-2xl overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1664378617229-c61c6fa13d91?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 max-w-xl">
            <h2 className="font-serif text-4xl text-primary leading-tight">
              A Grounded, Collaborative Approach to Therapy
            </h2>

            <p className="text-textMuted leading-relaxed">
              Therapy should feel both supportive and practical. 
              My approach balances structure with reflection, helping clients feel held without being rushed or overwhelmed.
            </p>

            <p className="text-textMuted leading-relaxed">
              I draw from well-established, research-supported methods while remaining responsive to each client’s unique needs. 
              Sessions focus on:
            </p>
            <ul className="list-disc pl-6 text-textMuted">
              <li>Building emotional and physiological regulation</li>
              <li>Developing insight into recurring patterns</li>
              <li>Strengthening internal resilience</li>
              <li>Creating tools that extend beyond the therapy room</li>
            </ul>

            <p className="text-textMuted leading-relaxed">
              Rather than focusing only on symptom relief, therapy becomes a process of understanding yourself more deeply and responding to life with greater flexibility.
            </p>
            <a
              href="/contact"
              className="inline-flex justify-center items-center mt-6 px-10 py-4 border border-primary text-primary rounded-full hover:bg-primary hover:text-white transition"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
