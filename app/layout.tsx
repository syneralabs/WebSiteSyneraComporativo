import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
})

export const metadata: Metadata = {
  title: 'SyneraLabs — Soluções em Tecnologia',
  description:
    'Desenvolvemos soluções digitais modernas e escaláveis. Software sob medida, consultoria e transformação digital para o seu negócio.',
  keywords: ['desenvolvimento web', 'software', 'tecnologia', 'startup', 'React', 'Node.js'],
  authors: [{ name: 'SyneraLabs' }],
  openGraph: {
    title: 'SyneraLabs — Soluções em Tecnologia',
    description: 'Desenvolvemos soluções digitais modernas e escaláveis.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
    
  )
}
