import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import {
  Target,
  Eye,
  Heart,
  Rocket,
  Users,
  Code2,
  Trophy,
  Clock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sobre Nós — SyneraLabs',
  description: 'Conheça a SyneraLabs: nossa história, missão, visão e os valores que guiam cada projeto que desenvolvemos.',
}

const mvv = [
  {
    icon: Target,
    title: 'Missão',
    description:
      'Desenvolver soluções tecnológicas inovadoras que transformem a maneira como negócios operam, gerando valor real e mensurável para nossos clientes.',
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
  {
    icon: Eye,
    title: 'Visão',
    description:
      'Ser a principal referência em desenvolvimento de software sob medida no Brasil, reconhecida pela qualidade técnica e pelo impacto gerado.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    icon: Heart,
    title: 'Valores',
    description:
      'Excelência técnica, transparência total, entrega no prazo e parceria genuína com cada cliente. Acreditamos que relacionamentos duradouros constroem grandes produtos.',
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
    border: 'border-rose-400/20',
  },
]

const differentials = [
  {
    icon: Code2,
    title: 'Código de Qualidade',
    description: 'Seguimos as melhores práticas da indústria: testes, code review e documentação em todo projeto.',
  },
  {
    icon: Rocket,
    title: 'Entrega Ágil',
    description: 'Metodologia ágil com sprints curtos, feedback contínuo e entregas parciais desde o início.',
  },
  {
    icon: Users,
    title: 'Equipe Senior',
    description: 'Todos os nossos devs têm experiência em projetos.',
  },
  {
    icon: Trophy,
    title: 'Foco em Resultados',
    description: 'Não entregamos apenas código — entregamos produtos que geram resultados reais.',
  },
  {
    icon: Clock,
    title: 'Suporte Contínuo',
    description: 'Manutenção, monitoramento e suporte técnico pós-entrega incluídos em todos os planos.',
  },
  {
    icon: Target,
    title: 'Arquitetura Escalável',
    description: 'Projetamos sistemas para crescer junto com o seu negócio, sem retrabalho.',
  },
]

const timeline = [
  { year: '2026', event: 'Fundação da SyneraLabs com foco em startups' },
  // { year: '2026', event: 'Primeiros 10 clientes e 15 projetos entregues' },
  // { year: '2021', event: 'Expansão da equipe e entrada no mercado B2B' },
  // { year: '2022', event: '30+ projetos e parcerias com grandes empresas' },
  // { year: '2023', event: 'Lançamento do hub de inovação interno' },
  // { year: '2024', event: '50+ projetos e reconhecimento nacional' },
]

export default function SobrePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 bg-background bg-grid" aria-labelledby="about-hero-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">Quem somos</p>
            <h1
              id="about-hero-title"
              className="text-5xl sm:text-6xl font-bold text-foreground text-balance mb-6"
            >
              Sobre a <span className="gradient-text">SyneraLabs</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed text-pretty">
              Somos uma empresa de tecnologia fundada por desenvolvedores apaixonados, comprometidos em criar soluções
              digitais que realmente fazem diferença. Desde 2026, ajudamos startups e empresas consolidadas a
              transformar suas ideias em produtos digitais de alta qualidade.
            </p>
          </div>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="py-20 bg-card/20" aria-labelledby="mvv-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="mvv-title" className="sr-only">Missão, Visão e Valores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mvv.map((item) => (
                <div
                  key={item.title}
                  className={`glass rounded-2xl p-8 border ${item.border} hover:border-primary/30 transition-all`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} border ${item.border} flex items-center justify-center mb-6`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-background" aria-labelledby="timeline-title">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">Nossa Trajetória</p>
              <h2 id="timeline-title" className="text-4xl font-bold text-foreground">
                Uma história de evolução
              </h2>
            </div>
            <ol className="relative border-l border-border/60 ml-6 space-y-8">
              {timeline.map((t) => (
                <li key={t.year} className="ml-8">
                  <div className="absolute -left-3 w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                  </div>
                  <time className="text-xs font-mono text-primary uppercase tracking-wider">{t.year}</time>
                  <p className="mt-1 text-foreground/90">{t.event}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-20 bg-card/20" aria-labelledby="differentials-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">Por que nos escolher</p>
              <h2 id="differentials-title" className="text-4xl font-bold text-foreground text-balance">
                Nossos Diferenciais
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {differentials.map((d) => (
                <div
                  key={d.title}
                  className="glass rounded-2xl p-6 border border-border/60 hover:border-primary/30 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <d.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-2">{d.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
