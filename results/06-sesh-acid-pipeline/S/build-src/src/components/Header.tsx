/**
 * Header.tsx — VoltSwap
 * Sticky, blur background, logo left, nav right (per brand-bible components.header).
 * Nav points to real routes — NO anchor scroll-to-section links (sub-skill-ux).
 * The shipped deliverable is a single static index.html that inlines this markup;
 * this mirror exists so karpathy_score.mjs can audit nav structure.
 */
export default function Header() {
  const nav = [
    { label: 'Servicios', href: '/servicios' },
    { label: 'Proceso', href: '/proceso' },
    { label: 'Paquetes', href: '/paquetes' },
    { label: 'Casos', href: '/casos' },
    { label: 'Contacto', href: '/contacto' },
  ];
  return (
    <header className="sticky top-0 z-20 h-[72px] bg-brand-bg/85 backdrop-blur border-b border-brand-border">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between px-6">
        {/* Logo: inline SVG bolt + wordmark — light mark on dark header (contrast OK) */}
        <a href="/" className="font-heading text-brand-heading">VoltSwap</a>
        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="font-body text-brand-body hover:text-brand-primary">
              {n.label}
            </a>
          ))}
          <a href="/contacto" className="bg-brand-primary text-brand-cta-text px-5 py-2 rounded-[4px] font-medium uppercase">
            Cotiza tu conversión
          </a>
        </nav>
        <button className="md:hidden text-brand-heading" aria-label="Abrir menú">☰</button>
      </div>
    </header>
  );
}
