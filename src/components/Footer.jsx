export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-lg font-semibold text-white">ManEdge Digitech</div>
          <p className="mt-1 text-sm text-white/60">Digital Marketing + Tech Services for ambitious startups.</p>
        </div>
        <nav className="flex items-center gap-5 text-sm text-white/70">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#" className="hover:text-white">Process</a>
          <a href="#contact" className="hover:text-white">Contact</a>
          <a href="mailto:hello@manedgedigitech.com" className="hover:text-white">hello@manedgedigitech.com</a>
        </nav>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} ManEdge Digitech. All rights reserved.
      </div>
    </footer>
  );
}
