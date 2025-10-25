import { Rocket, BarChart3, Settings, Shield, Globe, Users } from 'lucide-react';

const services = [
  {
    icon: BarChart3,
    title: 'Performance Marketing',
    desc: 'Full-funnel acquisition across Search, Social, and Display. Creative testing, attribution, and ROAS optimization.'
  },
  {
    icon: Globe,
    title: 'SEO + Content Engine',
    desc: 'Topic clusters, programmatic SEO, and editorial ops. Technical hygiene and growth content for compounding traffic.'
  },
  {
    icon: Settings,
    title: 'Automation & CRM',
    desc: 'Lifecycle journeys, lead scoring, and CDP/CRM setups. Integrations with HubSpot, Zapier, Segment, and more.'
  },
  {
    icon: Rocket,
    title: 'Launch & GTM Sprints',
    desc: 'Positioning, messaging, landing pages, and rapid experiments to validate channels and offers in weeks.'
  },
  {
    icon: Users,
    title: 'Fractional Growth Team',
    desc: 'Plug-in team covering strategy, analytics, creatives, and dev support for lean startups.'
  },
  {
    icon: Shield,
    title: 'Analytics & Governance',
    desc: 'GA4 pipelines, event schemas, dashboards, and privacy-first tracking you can trust.'
  }
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Services built for early-stage momentum</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          Pick a track or combine for an end-to-end growth engine. We operate in agile sprints with transparent reporting.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 transition hover:border-white/20">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-400/20 text-teal-300">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
            </div>
            <p className="mt-3 text-sm text-white/70">{desc}</p>
            <div className="mt-4 text-xs text-white/60">Includes: planning, implementation, weekly insights.</div>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-xl border border-white/10 bg-white/[0.04] p-6">
        <p className="text-white/80">
          Not sure where to start? We’ll audit your funnel and propose a 90-day plan tailored to your goals, budget, and team.
        </p>
      </div>
    </section>
  );
}
