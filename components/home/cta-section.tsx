import Link from 'next/link'
import { ArrowRight, MessageSquare } from 'lucide-react'

export function CtaSection() {
  return (
    <section className="py-24 bg-card/30" aria-labelledby="cta-title">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animated-border glass rounded-3xl p-10 md:p-16">
          <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center mx-auto mb-6 animate-float">
            <MessageSquare className="w-8 h-8 text-primary" aria-hidden="true" />
          </div>
          <h2
            id="cta-title"
            className="text-4xl sm:text-5xl font-bold text-foreground text-balance mb-4"
          >
            Pronto para iniciar seu projeto?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl mx-auto text-pretty">
            Entre em contato conosco e receba uma proposta personalizada sem compromisso. Vamos transformar sua ideia em realidade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/servicos"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base hover:bg-primary/90 transition-all glow"
            >
              Solicitar Orçamento
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
