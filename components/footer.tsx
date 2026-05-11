import Link from 'next/link'
import { Zap, Github, Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  empresa: [
    { href: '/sobre', label: 'Sobre Nós' },
    { href: '/projetos', label: 'Projetos' },
    { href: '/tecnologias', label: 'Tecnologias' },
    { href: '/servicos', label: 'Serviços' },
  ],
  servicos: [
    { href: '/servicos', label: 'Desenvolvimento Web' },
    { href: '/servicos', label: 'Aplicativos Mobile' },
    { href: '/servicos', label: 'APIs & Backend' },
    { href: '/servicos', label: 'Consultoria Tech' },
  ],
}

const socialLinks = [
  { href: 'https://github.com/syneralabs', label: 'GitHub', icon: Github, },
  { href: 'https://www.linkedin.com/in/synera-labs-undefined-a52416397/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://www.instagram.com/syneralabs/', label: 'Instagram', icon: Instagram },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/60" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="NexaTech — ir para home">
              <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center">
                <Image
                src="/logoSynera.jpeg"
                alt="Logo Synera Labs"
                width={24}
                height={24}
                className="object-cover"
              />
              </div>
              <span className="text-lg font-bold text-foreground">
                Synera<span className="text-primary">Labs</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transformamos ideias em soluções digitais modernas e escaláveis. Do conceito ao deploy.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Empresa</h3>
            <ul className="flex flex-col gap-2" role="list">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Serviços</h3>
            <ul className="flex flex-col gap-2" role="list">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">Contato</h3>
            <ul className="flex flex-col gap-3" role="list">
              <li>
                <a
                  href="mailto:contato@nexatech.com.br"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  syneraLabs@Gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+557398222893"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                  (73) 98222-893
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>São Paulo, SP — Brasil</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/60 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SyneraLabs. Todos os direitos reservados.
          </p>
          <p className="text-sm text-muted-foreground">
            Feito com paixão e muito café.
          </p>
        </div>
      </div>
    </footer>
  )
}
