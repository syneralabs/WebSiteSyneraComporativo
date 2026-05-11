'use client'

import { useEffect, useRef } from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Monitor, Server, Database, Cloud, Wrench } from 'lucide-react'

const categories = [
  {
    icon: Monitor,
    label: 'Frontend',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
    techs: [
      { name: 'React', desc: 'Biblioteca para UIs reativas e componentizadas', level: 95 },
      { name: 'Next.js', desc: 'Framework fullstack com SSR, SSG e App Router', level: 92 },
      { name: 'TypeScript', desc: 'Superset do JavaScript com tipagem estática', level: 90 },
      { name: 'Tailwind CSS', desc: 'Framework utilitário para estilização rápida', level: 95 },
      { name: 'React Native', desc: 'Apps móveis nativos multiplataforma', level: 80 },
    ],
  },
  {
    icon: Server,
    label: 'Backend',
    color: 'text-emerald-400',
    bg: 'bg-emerald-400/10',
    border: 'border-emerald-400/20',
    techs: [
      { name: 'Node.js', desc: 'Runtime JavaScript de alta performance no servidor', level: 92 },
      { name: 'Java', desc: 'Framework minimalista para APIs REST', level: 88 },
      { name: 'Python', desc: 'Scripts, automações e serviços de dados', level: 75 },
    ],
  },
  {
    icon: Database,
    label: 'Banco de Dados',
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
    techs: [
      { name: 'PostgreSQL', desc: 'Banco relacional robusto e ACID-compliant', level: 90 },
      { name: 'MongoDB', desc: 'Banco NoSQL orientado a documentos', level: 85 },
      { name: 'SQL', desc: 'Banco relacional amplamente utilizado', level: 80 },
      { name: 'Supabase', desc: 'Backend-as-a-Service com PostgreSQL', level: 88 },
    ],
  },
  {
    icon: Cloud,
    label: 'Cloud & DevOps',
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
    techs: [
      // { name: 'AWS', desc: 'Infraestrutura cloud líder de mercado', level: 80 },
      { name: 'Vercel', desc: 'Deploy e edge network para front-end', level: 95 },
      // { name: 'Docker', desc: 'Containerização de aplicações', level: 85 },
      { name: 'GitHub Actions', desc: 'CI/CD automatizado integrado ao GitHub', level: 88 },
      // { name: 'Nginx', desc: 'Servidor web e proxy reverso', level: 80 },
    ],
  },
  {
    icon: Wrench,
    label: 'Ferramentas',
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
    techs: [
      { name: 'Git & GitHub', desc: 'Controle de versão e colaboração', level: 98 },
      { name: 'Figma', desc: 'Design e prototipagem de interfaces', level: 85 },
      { name: 'Jira', desc: 'Gestão de projetos e testes', level: 82 },
      // { name: 'Prisma', desc: 'ORM type-safe para Node.js', level: 88 },
      // { name: 'Stripe', desc: 'Pagamentos online integrados', level: 80 },
    ],
  },
]

function TechCard({ tech, color, border }: { tech: { name: string; desc: string; level: number }; color: string; border: string }) {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.width = `${tech.level}%`
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [tech.level])

  return (
    <div className={`glass rounded-xl p-5 border ${border} hover:border-primary/30 transition-all group`}>
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold text-foreground text-sm">{tech.name}</h4>
        <span className={`text-xs font-mono ${color}`}>{tech.level}%</span>
      </div>
      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{tech.desc}</p>
      <div className="h-1 bg-secondary rounded-full overflow-hidden">
        <div
          ref={barRef}
          className={`h-full rounded-full transition-all duration-1000 ease-out`}
          style={{
            width: '0%',
            background: `var(--tw-${color.replace('text-', '').replace('-', '-')}, currentColor)`,
            backgroundColor: color.includes('blue') ? 'oklch(0.65 0.2 250)' :
              color.includes('emerald') ? 'oklch(0.65 0.18 160)' :
              color.includes('violet') ? 'oklch(0.65 0.2 280)' :
              color.includes('orange') ? 'oklch(0.7 0.2 50)' :
              'oklch(0.8 0.18 80)',
          }}
          role="progressbar"
          aria-valuenow={tech.level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${tech.name}: ${tech.level}% de proficiência`}
        />
      </div>
    </div>
  )
}

export default function TecnologiasPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-background bg-grid" aria-labelledby="tech-hero-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">Stack técnico</p>
            <h1
              id="tech-hero-title"
              className="text-5xl sm:text-6xl font-bold text-foreground text-balance mb-6"
            >
              Nossas <span className="gradient-text">Tecnologias</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed text-pretty">
              Utilizamos as melhores e mais modernas ferramentas do mercado para entregar soluções
              robustas, escaláveis e de alta performance.
            </p>
          </div>
        </section>

        {/* Tech categories */}
        {categories.map((cat) => (
          <section
            key={cat.label}
            className="py-16 border-t border-border/60"
            aria-labelledby={`tech-cat-${cat.label}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-4 mb-10">
                <div className={`w-12 h-12 rounded-xl ${cat.bg} border ${cat.border} flex items-center justify-center`}>
                  <cat.icon className={`w-6 h-6 ${cat.color}`} aria-hidden="true" />
                </div>
                <h2 id={`tech-cat-${cat.label}`} className="text-2xl font-bold text-foreground">
                  {cat.label}
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {cat.techs.map((tech) => (
                  <TechCard key={tech.name} tech={tech} color={cat.color} border={cat.border} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  )
}
