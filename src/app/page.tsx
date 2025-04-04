'use client'

import { useState } from 'react'
import HeroVideo from '@/components/HeroVideo'
import TextSection from '@/components/TextSection'
import Gallery from '@/components/Gallery'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  const [showThankYou, setShowThankYou] = useState(false)

  const handleFormSubmit = () => {
    setShowThankYou(true)
  }

  return (
    <main className="min-h-screen">
      <HeroVideo />
      <TextSection />
      <Gallery />
      <ContactForm onSubmit={handleFormSubmit} showThankYou={showThankYou} />
      <Footer />
    </main>
  )
}
