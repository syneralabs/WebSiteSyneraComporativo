import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { TechStrip } from '@/components/home/tech-strip'
import { ServicesSection } from '@/components/home/services-section'
import { ProjectsPreview } from '@/components/home/projects-preview'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CtaSection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TechStrip />
        <ServicesSection />
        <ProjectsPreview />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
