import type { Metadata } from 'next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Check, Zap, Globe, Smartphone, Server, BarChart3, ShieldCheck, ArrowRight, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

const WHATSAPP = '5573982228893'

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`
}

export const metadata: Metadata = {
  title: 'Serviços — SyneraLabs',
  description: 'Conheça nossos serviços e planos. Desenvolvimento web, mobile, APIs e consultoria técnica para o seu negócio.',
}

const plans = [
  {
    name: 'Starter',
    price: 'R$ 3.000',
    period: 'por projeto',
    description: 'Ideal para MVPs e landing pages profissionais.',
    featured: false,
    features: [
      'Landing page ou site institucional',
      'Até 5 páginas',
      'Design responsivo',
      'SEO básico',
      'Formulário de contato',
      'Hospedagem por 1 ano',
      'Suporte por 30 dias',
    ],
    cta: 'Solicitar Orçamento',
    whatsappMessage: 'Olá! Tenho interesse no plano Starter. Gostaria de solicitar um orçamento.',
    color: 'border-border',
    badgeColor: '',
  },
  {
    name: 'Profissional',
    price: 'R$ 7.000',
    period: 'por projeto',
    description: 'Para startups e empresas em crescimento.',
    featured: true,
    features: [
      'Aplicação web completa',
      'Painel administrativo',
      'Autenticação e usuários',
      'Banco de dados e API',
      'Integrações (pagamento, e-mail)',
      'Deploy e DevOps',
      'Suporte por 90 dias',
      'Código-fonte incluído',
    ],
    cta: 'Solicitar Orçamento',
    whatsappMessage: 'Olá! Tenho interesse no plano Profissional. Gostaria de solicitar um orçamento.',
    color: 'border-primary',
    badgeColor: 'bg-primary text-primary-foreground',
  },
  {
    name: 'Premium',
    price: 'Sob consulta',
    period: 'projeto personalizado',
    description: 'Soluções enterprise e projetos complexos.',
    featured: false,
    features: [
      'Tudo do plano Profissional',
      'Arquitetura de microsserviços',
      'App mobile Android',
      'Integrações avançadas',
      'SLA e uptime garantido',
      'Equipe dedicada',
      'Suporte contínuo',
      'Mentoria técnica',
    ],
    cta: 'Falar com Especialista',
    whatsappMessage: 'Olá! Tenho interesse no plano Premium. Gostaria de conversar com um especialista sobre meu projeto.',
    color: 'border-border',
    badgeColor: '',
  },
]

const serviceDetails = [
  {
    icon: Globe,
    title: 'Desenvolvimento Web',
    description:
      'Criamos aplicações web modernas com React e Next.js. Desde landing pages até plataformas SaaS complexas com autenticação, banco de dados e integrações.',
    items: ['Next.js / React', 'TypeScript', 'Tailwind CSS', 'SEO técnico', 'Performance otimizada'],
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    border: 'border-blue-400/20',
  },
  {
    icon: Smartphone,
    title: 'Apps Mobile',
    description:
      'Desenvolvemos aplicativos iOS e Android com React Native e Expo, garantindo experiência nativa e código compartilhado entre plataformas.',
    items: ['React Native', 'Expo', 'Android', 'Push Notifications', 'Publicação nas stores'],
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    border: 'border-cyan-400/20',
  },
  {
    icon: Server,
    title: 'APIs & Backend',
    description:
      'Arquiteturas backend robustas com Node.js, bancos de dados otimizados e APIs REST/GraphQL documentadas e seguras.',
    items: ['Node.js / NestJS', 'SupraBase / MySQL',],
    color: 'text-violet-400',
    bg: 'bg-violet-400/10',
    border: 'border-violet-400/20',
  },
  // {
  //   icon: ShieldCheck,
  //   title: 'DevOps & Cloud',
  //   description:
  //     'Configuração de CI/CD, containers e infraestrutura cloud para deploy confiável, escalável e com monitoramento contínuo.',
  //   items: ['Docker & Kubernetes', 'AWS / Vercel', 'GitHub Actions', 'Monitoramento', 'Backup automático'],
  //   color: 'text-emerald-400',
  //   bg: 'bg-emerald-400/10',
  //   border: 'border-emerald-400/20',
  // },
  {
    icon: BarChart3,
    title: 'Consultoria Técnica',
    description:
      'Assessoria estratégica para startups e empresas: revisão de arquitetura, escolha de stack, code review e mentoria de equipes.',
    items: ['Revisão de arquitetura', 'Code review', 'Mentoria de devs', 'Escolha de stack', 'Planejamento técnico'],
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    border: 'border-orange-400/20',
  },
  {
    icon: Zap,
    title: 'Performance & SEO',
    description:
      'Auditoria e otimização de Core Web Vitals, SEO técnico, acessibilidade e performance para ranqueamento e conversão máximos.',
    items: ['Auditoria de performance', 'Core Web Vitals', 'SEO técnico', 'Acessibilidade WCAG', 'Otimização de imagens'],
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    border: 'border-yellow-400/20',
  },
]

export default function ServicosPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-background bg-grid" aria-labelledby="services-hero-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">O que oferecemos</p>
            <h1
              id="services-hero-title"
              className="text-5xl sm:text-6xl font-bold text-foreground text-balance mb-6"
            >
              Nossos <span className="gradient-text">Serviços</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed text-pretty">
              Do conceito ao deploy, oferecemos soluções completas de desenvolvimento de software
              para transformar seu negócio digitalmente.
            </p>
          </div>
        </section>

        {/* Service details */}
        <section className="py-20 bg-card/20" aria-labelledby="service-details-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="service-details-title" className="sr-only">Detalhes dos Serviços</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceDetails.map((s) => (
                <article
                  key={s.title}
                  className={`glass rounded-2xl p-6 border ${s.border} hover:border-primary/40 transition-all hover:-translate-y-1`}
                >
                  <div className={`w-12 h-12 rounded-xl ${s.bg} border ${s.border} flex items-center justify-center mb-5`}>
                    <s.icon className={`w-6 h-6 ${s.color}`} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                  <ul className="space-y-1.5" role="list">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Check className={`w-3.5 h-3.5 flex-shrink-0 ${s.color}`} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 bg-background" aria-labelledby="pricing-title">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">Planos</p>
              <h2 id="pricing-title" className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
                Investimento transparente
              </h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
                Sem surpresas. Valores claros e escopo definido desde o início.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={cn(
                    'rounded-2xl p-8 border transition-all relative',
                    plan.featured
                      ? 'glass border-primary glow bg-primary/5'
                      : 'glass border-border/60 hover:border-primary/30'
                  )}
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                        <Star className="w-3 h-3" aria-hidden="true" />
                        Mais popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                    <div>
                      <span className="text-3xl font-black text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground text-sm ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8" role="list">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink(plan.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      'flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all',
                      plan.featured
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                        : 'glass border border-border text-foreground hover:border-primary/40 hover:text-primary'
                    )}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Todos os preços são estimativas. O valor final depende do escopo detalhado do projeto.{' '}
              <a
                href={whatsappLink('Olá! Gostaria de solicitar um orçamento personalizado para meu projeto.')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Fale conosco
              </a>{' '}
              para um orçamento personalizado.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-card/20" aria-labelledby="services-cta-title">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="services-cta-title" className="text-4xl font-bold text-foreground text-balance mb-4">
              Vamos conversar sobre seu projeto?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Envie uma mensagem e nossa equipe responderá em até 24 horas úteis com uma proposta inicial.
            </p>
            <a
              href={whatsappLink('Olá! Gostaria de conversar sobre meu projeto e solicitar um orçamento.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all glow"
            >
              Falar pelo WhatsApp
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
