const techs = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS',
  'PostgreSQL', 'MongoDB', 'Vercel', 'GraphQL', 'Java'
]

export function TechStrip() {
  return (
    <section className="py-12 border-y border-border/60 bg-card overflow-hidden" aria-label="Tecnologias utilizadas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs text-muted-foreground uppercase tracking-widest font-mono mb-8">
          Tecnologias que utilizamos
        </p>
        <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <div className="flex gap-6 animate-tech-scroll" aria-hidden="true">
            {[...techs, ...techs].map((tech, i) => (
              <span
                key={i}
                className="flex-shrink-0 px-5 py-2 glass rounded-full border border-border/60 text-sm font-mono text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
