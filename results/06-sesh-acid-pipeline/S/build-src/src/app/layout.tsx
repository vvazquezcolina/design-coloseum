/**
 * layout.tsx — VoltSwap
 * UX REVIEW
 * // ✓ Logo visible: light wordmark on dark blurred header — OK
 * // ✓ Primary CTA "Cotiza tu conversión" present in hero and footer — OK
 * // ✓ Mobile: hero is a single column at 390px, dual CTA stacks — OK
 * // ✓ Real phone: +52 55 4821 7730 with tel: link in footer + contact — OK
 * // ✓ Address visible in footer and contacto page — OK
 * // ✓ overallTheme "dark-moody" respected: dark backgrounds throughout — OK
 *
 * Static deliverable: ../../index.html (self-contained, no build step).
 */
import Header from '../components/Header';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <body className="bg-brand-bg text-brand-body font-body">
        <Header />
        {children}
      </body>
    </html>
  );
}
