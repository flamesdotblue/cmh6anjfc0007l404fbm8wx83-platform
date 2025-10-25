import { CheckCircle2 } from 'lucide-react';

const logos = [
  { name: 'NovaFin', color: 'bg-teal-400/20 text-teal-300' },
  { name: 'NestWorks', color: 'bg-violet-400/20 text-violet-300' },
  { name: 'FlowAI', color: 'bg-sky-400/20 text-sky-300' },
  { name: 'GreenCart', color: 'bg-emerald-400/20 text-emerald-300' },
  { name: 'Shiply', color: 'bg-orange-400/20 text-orange-300' },
  { name: 'KiteLabs', color: 'bg-pink-400/20 text-pink-300' },
];

const highlights = [
  { stat: '2.4x', note: 'pipeline in 90 days' },
  { stat: '38%↓', note: 'CAC via creative tests' },
  { stat: '4.1%', note: 'LP CVR with CRO' },
  { stat: '0→1', note: 'MVP launch in 7 weeks' },
];

export default function CaseStudies() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Proof from scrappy to scale</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          We partner with founders to validate channels, ship fast, and build repeatable growth.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
          <h3 className="text-sm font-semibold text-white">Recent wins</h3>
          <ul className="mt-3 space-y-2">
            {highlights.map((h) => (
              <li key={h.note} className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle2 size={16} className="text-teal-300" />
                <span className="font-medium text-white">{h.stat}</span>
                <span className="text-white/70">{h.note}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 sm:col-span-2">
          <h3 className="text-sm font-semibold text-white">Founder-friendly engagement</h3>
          <p className="mt-2 text-sm text-white/70">
            Transparent sprints, async comms, and dashboards. We integrate with your workflows and keep meetings lean.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {logos.map((l) => (
              <div key={l.name} className={`flex items-center justify-center rounded-lg border border-white/10 ${l.color} px-3 py-2 text-sm font-medium`}>
                {l.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div id="contact" className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl border border-white/10 bg-gradient-to-r from-teal-400/10 to-sky-400/10 p-6 sm:flex-row sm:items-center">
        <div>
          <h4 className="text-lg font-medium text-white">Ready to engineer your next growth leap?</h4>
          <p className="text-sm text-white/70">Get a free audit and a 90-day plan tailored to your goals.</p>
        </div>
        <a
          href="mailto:hello@manedgedigitech.com?subject=Discovery%20Call%20Request"
          className="inline-flex items-center rounded-lg bg-white px-4 py-2 font-medium text-neutral-950 transition hover:bg-white/90"
        >
          Contact us
        </a>
      </div>
    </section>
  );
}
