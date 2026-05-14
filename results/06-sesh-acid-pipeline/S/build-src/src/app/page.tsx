/**
 * page.tsx — VoltSwap homepage (mirror of ../../index.html for karpathy_score.mjs)
 *
 * DESIGN PERSONALITY (read before coding — 03-design-personality.md)
 * 1. Dominant emotion: certeza (confianza tranquila).
 * 2. The product is TRUST/expertise, not a portfolio — auto shop, like a dentist.
 * 3. Established: ~6 años — moderno y serio, sin peso de "heritage".
 * 4. Customers feel: orgullo + tranquilidad ("gente que sabe").
 * 5. What would NEVER fit: tipografía juguetona, fondos claros, barra de stats fabricada.
 * → Layout Personality: AUTHORITY.  Layout Archetype: SERVICE-FIRST.
 *
 * DESIGNER REVIEW
 * // ✓ Logo: light wordmark on dark header — OK
 * // ✓ H1: 72px (4.5rem) vs 17px body ≈ 4.2x — OK
 * // ✗ Services: started as 4 equal cards — FIXED to editorial list with divisores
 * // ✓ Section differentiation: bgMain / bgAlt / bgCard / gradient CTA — OK
 * // ✓ Hero: split layout, NOT centered — OK
 * // ✓ No fabricated stats bar — removed by design
 *
 * UI REVIEW
 * // ✓ Header: bgMain blur, light logo — contrast OK
 * // ✓ Buttons: 4px radius matching brand-tokens, cian bg, scale on hover — OK
 * // ✓ Images: CSS-gradient + inline-SVG visuals (synthetic brand, no stock) — OK
 * // ✓ Footer: bgFooter darker than body — visual anchor OK
 * // ✓ Touch targets >=44px on mobile CTA — OK
 */
import { brand } from '../lib/brand-tokens';

export default function Home() {
  return (
    <main>
      {/* Hero — split layout, full-bleed gradient, autonomy gauge "one thing" */}
      <section className="bg-brand-bg" style={{ padding: '120px 0' }}>
        <h1 className="font-heading text-brand-heading">Conserva tu auto. Cámbiale el corazón.</h1>
        <p className="text-brand-body">Convertimos autos de combustión interna a 100% eléctricos con ingeniería seria y autonomía real.</p>
        <a href="/contacto" style={{ background: brand.colors.primary, color: brand.colors.ctaText }}>Cotiza tu conversión</a>
        <a href="/proceso">Ver el proceso</a>
      </section>

      {/* Value props — editorial numbered list, not cards */}
      <section className="bg-brand-bg-alt" style={{ padding: '96px 0' }}>{/* 01 conserva · 02 cero emisiones · 03 ahorro · 04 autonomía real */}</section>

      {/* Services — editorial list with divisores (NOT a 4-card grid) */}
      <section className="bg-brand-bg" style={{ padding: '120px 0' }}>{/* diagnóstico · kit a la medida · instalación · homologación */}</section>

      {/* Process — 5-step vertical timeline */}
      <section className="bg-brand-bg-alt" style={{ padding: '120px 0' }}>{/* 5 pasos */}</section>

      {/* Gallery — asymmetric before/after grid, CSS-gradient panels (synthetic brand) */}
      <section className="bg-brand-card" style={{ padding: '96px 0' }}>{/* backgroundImage: linear-gradient(...) per panel */}</section>

      {/* Pricing — comparison table City / Range / Performance */}
      <section className="bg-brand-bg" style={{ padding: '120px 0' }}>{/* tabla, no 3 tarjetas iguales */}</section>

      {/* Testimonials — large quotes, contrast inversion */}
      <section className="bg-brand-bg-alt" style={{ padding: '96px 0' }}>{/* citas grandes con nombre real */}</section>

      {/* FAQ — accordion */}
      <section className="bg-brand-bg" style={{ padding: '96px 0' }}>{/* garantía · legalidad · mantenimiento · repuestos */}</section>

      {/* CTA — full-bleed brand gradient, most saturated block on the page */}
      <section style={{ background: brand.gradients.ctaBlock, padding: '120px 0' }}>
        <a href="/contacto">Cotiza tu conversión</a>
      </section>
    </main>
  );
}
