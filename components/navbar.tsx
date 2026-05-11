'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/tecnologias', label: 'Tecnologias' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/servicos', label: 'Serviços' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'glass border-b border-border/60 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group" aria-label="SyneraLabs — ir para home">
            <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center overflow-hidden group-hover:bg-primary/30 transition-colors">
              <Image
                src="/logoSynera.jpeg"
                alt="Logo Synera Labs"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="text-lg font-bold tracking-tight text-foreground">
              Synera<span className="text-primary">Labs</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    pathname === link.href
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  )}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/servicos"
              className="px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors glow"
            >
              Solicitar Orçamento
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-4 pb-4 border-t border-border/60 pt-4 animate-fade-in"
          >
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-4 py-3 rounded-lg text-sm font-medium transition-all',
                      pathname === link.href
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                    )}
                    aria-current={pathname === link.href ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  href="/servicos"
                  className="block px-4 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold text-center hover:bg-primary/90 transition-colors"
                >
                  Solicitar Orçamento
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
