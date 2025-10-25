import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-950/60 via-neutral-950/40 to-neutral-950" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <Rocket size={14} className="text-teal-300" />
          <span>Growth-first Digital Marketing + Tech for Startups</span>
        </div>

        <h1 className="mt-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl">
          ManEdge Digitech
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          We help early-stage startups win their market with full-stack digital marketing and
          lean tech enablement. Strategy, performance, content, and automation—managed end to end.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-lg bg-teal-400 px-5 py-3 font-medium text-neutral-950 transition hover:bg-teal-300"
          >
            Explore Services
            <ArrowRight size={18} className="ml-2" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
          >
            <Phone size={18} className="mr-2" />
            Book a discovery call
          </a>
        </div>

        <div className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-4 text-left sm:grid-cols-4">
          {[
            { kpi: 'x3', label: 'Avg. ROAS (Paid)' },
            { kpi: '120%', label: 'Lead Volume Uplift' },
            { kpi: '6–8 wks', label: 'MVP Launch Cycles' },
            { kpi: '95%', label: 'Client Retention' },
          ].map((item) => (
            <div key={item.label} className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="text-xl font-semibold text-white">{item.kpi}</div>
              <div className="text-xs text-white/70">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
