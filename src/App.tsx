import { useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyMobileCta } from '@/components/layout/StickyMobileCta'
import { Hero } from '@/components/sections/Hero'
import { MoreThanKaraoke } from '@/components/sections/MoreThanKaraoke'
import { VocalyzeRoom } from '@/components/sections/VocalyzeRoom'
import { CameraReady } from '@/components/sections/CameraReady'
import { Experience } from '@/components/sections/Experience'
import { Rates } from '@/components/sections/Rates'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { RealMoments } from '@/components/sections/RealMoments'
import { About } from '@/components/sections/About'
import { Location } from '@/components/sections/Location'
import { FinalCta } from '@/components/sections/FinalCta'
import { trackEvent } from '@/lib/analytics'

function App() {
  useEffect(() => {
    trackEvent('page_view')
  }, [])

  return (
    <div className="min-h-screen bg-bg-void">
      <Header />
      <main>
        <Hero />
        <MoreThanKaraoke />
        <VocalyzeRoom />
        <CameraReady />
        <Experience />
        <Rates />
        <HowItWorks />
        <RealMoments />
        <About />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  )
}

export default App
