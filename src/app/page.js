"use client"
import Navbar from './components/Navbar'
import { FirstSlide } from './components/FirstSlide'
import { SecondSlide } from './components/SecondSlide'

export default function Home() {
  return (
    <div className="overflow-hidden">
    <Navbar />
    <FirstSlide />
    <SecondSlide />
    </div>
  )
}
