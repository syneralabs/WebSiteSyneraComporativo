import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ana Clara Mendes',
    role: 'CEO, EdTech Startup',
    content:
      'A Synera Labs transformou nossa visão em um produto incrível. Entrega impecável, código limpo e suporte excepcional.',
    avatar: 'AC',
    rating: 5,
  },
  {
    name: 'Rafael Souza',
    role: 'CTO, FinTrack',
    content:
      'Profissionalismo de outro nível. Nosso dashboard financeiro foi entregue antes do prazo e com performance acima do esperado.',
    avatar: 'RS',
    rating: 5,
  },
  {
    name: 'Camila Torres',
    role: 'Fundadora, LogiFlow',
    content:
      'Do protótipo ao deploy em produção, a equipe foi extremamente competente. Recomendo sem hesitar.',
    avatar: 'CT',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background" aria-labelledby="testimonials-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm uppercase tracking-widest mb-3">Depoimentos</p>
          <h2 id="testimonials-title" className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="glass rounded-2xl p-6 border border-border/60 hover:border-primary/30 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={`${t.rating} estrelas`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" aria-hidden="true" />
                ))}
              </div>
              <p className="text-foreground/90 text-sm leading-relaxed mb-6">&ldquo;{t.content}&rdquo;</p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
