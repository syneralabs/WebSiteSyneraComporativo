'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ExternalLink, Filter } from 'lucide-react'
import { cn } from '@/lib/utils'

const allProjects = [
  {
    title: 'PetShopEstoque',
    category: 'Pet Shop',
    description:
      'Um sistema de gestão de estoque para pet shops, com controle de produtos, fornecedores, vendas e relatórios analíticos para otimizar a operação do negocio.',
    tags: ['SQL', 'Node.js', 'java', 'Spring Boot', 'javaScript'],
    color: 'from-blue-500/30 to-cyan-500/20',
    border: 'border-blue-500/20',
    accent: 'text-blue-400',
    year: '2025',
  },
  {
    title: 'Clínica EB - Website Institucional ',
    category: 'Clinica de Estética',
    description:
      'O Clínica EB é um website institucional desenvolvido para uma clínica de estética, com foco em apresentar serviços, divulgar tratamentos e proporcionar uma experiência moderna e intuitiva aos usuários.',
    tags: ['HTML', 'JavaScript', 'CSS'],
    color: 'from-emerald-500/30 to-teal-500/20',
    border: 'border-emerald-500/20',
    accent: 'text-emerald-400',
    year: '2025',
  },
  {
    title: 'App-Personal-Treiner',
    category: 'Gestão de Treinos',
    description:
      'Aplicativo móvel desenvolvido para auxiliar personal trainers e seus clientes no acompanhamento de treinos, com recursos de agendamento, acompanhamento de progresso e comunicação direta entre treinador e cliente.',
    tags: ['React Native', 'WebSockets', 'SupraBase', 'Next.js', 'TypeScript'],
    color: 'from-orange-500/30 to-amber-500/20',
    border: 'border-orange-500/20',
    accent: 'text-orange-400',
    year: '2026',
  },
  {
    title: 'Internet-Scanner',
    category: 'Automação de Relatórios',
    description:
      'Gestão de relatorios com uso de AI integrada a Whatsapp e Telegram, para envio de relatorios automatizados.',
    tags: ['React Native', 'Expo', 'SupraBase', 'Nest.js', 'TypeScript', 'OpenAI', 'Google Gemini'],
    color: 'from-orange-500/30 to-amber-500/20',
    border: 'border-orange-500/20',
    accent: 'text-orange-400',
    year: '2026',
  },
]

const categories = ['Todos', ...Array.from(new Set(allProjects.map((p) => p.category)))]

export default function ProjetosPage() {
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? allProjects : allProjects.filter((p) => p.category === active)

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-background bg-grid" aria-labelledby="projects-hero-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">Portfólio</p>
            <h1
              id="projects-hero-title"
              className="text-5xl sm:text-6xl font-bold text-foreground text-balance mb-6"
            >
              Nossos <span className="gradient-text">Projetos</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed text-pretty">
              Cada projeto é uma história de parceria, desafio e inovação. Conheça algumas das soluções
              que desenvolvemos para nossos clientes.
            </p>
          </div>
        </section>

        {/* Filter */}
        <section className="py-8 border-b border-border/60" aria-label="Filtrar projetos por categoria">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
              <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={cn(
                    'flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all',
                    active === cat
                      ? 'bg-primary text-primary-foreground'
                      : 'glass border border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
                  )}
                  aria-pressed={active === cat}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 bg-background" aria-live="polite" aria-label="Lista de projetos">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((p) => (
                <article
                  key={p.title}
                  className={`group rounded-2xl border ${p.border} overflow-hidden glass hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col`}
                >
                  {/* Card header */}
                  <div className={`h-36 bg-gradient-to-br ${p.color} flex items-end justify-between p-4 relative overflow-hidden`}>
                    <span className="text-6xl font-black text-white/10 group-hover:text-white/20 transition-colors absolute right-4 bottom-2 select-none leading-none">
                      {p.title.slice(0, 2)}
                    </span>
                    <span className="relative z-10 px-3 py-1 rounded-full glass border border-white/10 text-xs font-mono text-white/80">
                      {p.category}
                    </span>
                    <span className={`relative z-10 text-xs font-mono ${p.accent}`}>{p.year}</span>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-base font-bold text-foreground">{p.title}</h3>
                      <ExternalLink
                        className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {p.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded bg-secondary text-xs font-mono text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground py-16">Nenhum projeto encontrado nesta categoria.</p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
