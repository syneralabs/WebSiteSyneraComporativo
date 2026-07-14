'use client'

import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'petShopEstoque',
    category: 'Estoque e Varejo',
    description: 'Sistema de gestão de estoque para pet shops, com controle de produtos, vendas e relatórios personalizados.',
    tags: ['Java', 'JavaScript', 'SQL'],
    color: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/20',
  },
  {
    title: 'Clínica EB - Website Institucional ',
    category: 'Clinica de Estética',
    description: 'O Clínica EB é um website institucional desenvolvido para uma clínica de estética, com foco em apresentar serviços, divulgar tratamentos e proporcionar uma experiência moderna e intuitiva aos usuários.',
    tags: ['HTML', 'JavaScript', 'CSS'],
    color: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-500/20',
  },
  {
    title: 'App-Personal-Treiner',
    category: 'Gestão de Treinos',
    description: 'Aplicativo móvel desenvolvido para auxiliar personal trainers e seus clientes no acompanhamento de treinos, com recursos de agendamento, acompanhamento de progresso e comunicação direta entre treinador e cliente.',
    tags: ['React Native', 'WebSockets', 'SupraBase', 'Next.js'],
    color: 'from-orange-500/20 to-amber-500/20',
    border: 'border-orange-500/20',
  },

  {
    title: 'Internet-Scanner',
    category: 'Automação de Relatórios',
    description: 'Gestão de relatorios com uso de AI integrada a Whatsapp e Telegram, para envio de relatorios automatizados.',
    tags: ['React Native', 'WebSockets', 'SupraBase', 'Next.js'],
    color: 'from-orange-500/20 to-amber-500/20',
    border: 'border-orange-500/20',
  },

]

export function ProjectsPreview() {
  return (
    <section className="py-24 bg-card/30" aria-labelledby="projects-preview-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-16">
          <div>
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">Portfólio</p>
            <h2 id="projects-preview-title" className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
              Projetos em Destaque
            </h2>
          </div>
          <Link
            href="/projetos"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium flex-shrink-0"
          >
            Ver todos
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`group relative rounded-2xl border ${p.border} overflow-hidden glass hover:border-primary/40 transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Gradient header */}
              <div className={`h-40 bg-gradient-to-br ${p.color} flex items-center justify-center`}>
                <span className="text-4xl font-black text-white/10 group-hover:text-white/20 transition-colors select-none">
                  {p.title.slice(0, 2)}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-primary uppercase tracking-widest">{p.category}</span>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-secondary text-xs font-mono text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
