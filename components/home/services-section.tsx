'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Globe, Smartphone, Server, ShieldCheck, Zap, BarChart3, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Globe,
    title: 'Desenvolvimento Web',
    description: 'Aplicações web modernas, responsivas e de alto desempenho com React, Next.js e tecnologias de ponta.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
  {
    icon: Smartphone,
    title: 'Apps Mobile',
    description: 'Aplicativos nativos e híbridos para iOS e Android com React Native e Expo.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    icon: Server,
    title: 'APIs & Backend',
    description: 'Arquiteturas robustas com Node.js, APIs RESTful e microsserviços escaláveis.',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
  },
  {
    icon: ShieldCheck,
    title: 'Segurança & DevOps',
    description: 'CI/CD, containers Docker, Kubernetes e práticas de segurança para ambientes produtivos.',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
  },
  {
    icon: Zap,
    title: 'Performance & SEO',
    description: 'Otimização de Core Web Vitals, SEO técnico e auditorias de performance para máxima visibilidade.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
  },
  {
    icon: BarChart3,
    title: 'Consultoria Tech',
    description: 'Planejamento estratégico, arquitetura de sistemas e mentoria técnica para equipes e startups.',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
  },
]

function useScrollReveal(selector: string) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1'
            ;(entry.target as HTMLElement).style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll(selector).forEach((el) => {
      ;(el as HTMLElement).style.opacity = '0'
      ;(el as HTMLElement).style.transform = 'translateY(24px)'
      ;(el as HTMLElement).style.transition = 'opacity 0.6s ease, transform 0.6s ease'
      observer.observe(el)
    })
    return () => observer.disconnect()
  }, [selector])
}

export function ServicesSection() {
  useScrollReveal('.service-card')

  return (
    <section className="py-24 bg-background" aria-labelledby="services-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">O que fazemos</p>
          <h2
            id="services-title"
            className="text-4xl sm:text-5xl font-bold text-foreground text-balance"
          >
            Nossos Serviços
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto text-pretty leading-relaxed">
            Soluções completas do planejamento à entrega, sempre com foco em qualidade e performance.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className={`service-card glass rounded-2xl p-6 border ${s.border} hover:border-primary/40 group transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`w-12 h-12 rounded-xl ${s.bg} border ${s.border} flex items-center justify-center mb-5`}>
                <s.icon className={`w-6 h-6 ${s.color}`} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Ver todos os serviços e preços
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
