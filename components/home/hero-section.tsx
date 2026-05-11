'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Code2, Sparkles } from 'lucide-react'

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(20px)'
    const raf = requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background bg-grid"
      aria-label="Hero"
    >
      {/* Background glow orbs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.65 0.22 250) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, oklch(0.65 0.22 200) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div ref={heroRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-sm text-primary mb-8">
          <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
          <span className="font-mono">Inovação que transforma negócios</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6 leading-tight">
          Soluções digitais{' '}
          <span className="gradient-text">modernas</span>
          <br />
          para o futuro do seu{' '}
          <span className="gradient-text">negócio</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 text-pretty">
          Da ideia ao produto final. Desenvolvemos aplicações web, mobile e APIs de alto desempenho
          com as tecnologias mais modernas do mercado.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/servicos"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all glow animate-pulse-glow"
          >
            Solicitar Orçamento
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
          <Link
            href="/projetos"
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-border text-foreground font-semibold text-base hover:border-primary/40 hover:text-primary transition-all"
          >
            <Code2 className="w-4 h-4" aria-hidden="true" />
            Ver Projetos
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '0', label: 'Projetos Entregues' },
            { value: '0', label: 'Clientes Satisfeitos' },
            { value: '2', label: 'Anos de Experiência' },
            { value: '99%', label: 'Uptime Garantido' },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4 border border-border/60 text-center">
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 rounded-full border-2 border-border/60 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </div>
    </section>
  )
}
