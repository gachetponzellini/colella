export const dynamic = 'force-dynamic'

import { Suspense } from 'react'
import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'
import { HeroSection } from "@/components/landing/HeroSection"
import { StatsSection } from "@/components/landing/StatsSection"
import { SuccessStories } from "@/components/landing/SuccessStories"
import { BookingWidget } from "@/components/booking/BookingWidget"
import { WhatsAppFloatingButton } from "@/components/ui/WhatsAppFloatingButton"
import { AboutSection } from "@/components/landing/AboutSection"
import { ReviewsSection } from '@/components/landing/ReviewsSection'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <HeroSection />
      <StatsSection />
      <section id="methodology">
        <SuccessStories />
      </section>
      <AboutSection />
      <Suspense fallback={<div className="py-24 text-center">Cargando reserva...</div>}>
        <BookingWidget />
      </Suspense>
      <ReviewsSection />
      <WhatsAppFloatingButton />
      <footer className="py-10 text-center text-sm text-gray-500 dark:text-gray-400 space-y-5">
        {/* Social */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500">Seguilo en redes</span>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/fedecolella.fisio"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Federico Colella"
              className="group inline-flex items-center justify-center h-11 w-11 rounded-full border border-neutral-700/50 bg-neutral-900/40 text-neutral-400 hover:text-white hover:border-pink-500/60 hover:bg-gradient-to-br hover:from-pink-500/15 hover:via-purple-500/15 hover:to-orange-400/15 transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/share/1G5NYBDEh6/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook de Federico Colella"
              className="group inline-flex items-center justify-center h-11 w-11 rounded-full border border-neutral-700/50 bg-neutral-900/40 text-neutral-400 hover:text-white hover:border-blue-500/60 hover:bg-blue-500/15 transition-all"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <p>© {new Date().getFullYear()} Lic. Federico Colella. Todos los derechos reservados.</p>
          <a
            href="https://gachetponzellini.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-teal-500/30 px-3 py-1 text-xs font-semibold text-teal-400 hover:bg-teal-500/10 transition-colors"
          >
            Créditos
          </a>
        </div>
        <div className="flex justify-center gap-6">
          <Link href="/privacidad" className="hover:text-teal-400 transition-colors">Política de Privacidad</Link>
          <Link href="/terminos" className="hover:text-teal-400 transition-colors">Términos y Condiciones</Link>
        </div>
      </footer>
    </main>
  )
}
