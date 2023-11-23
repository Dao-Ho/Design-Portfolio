"use client"
import Navbar from './components/Navbar'
import { FirstSlide } from './components/FirstSlide'

export default function Home() {
  return (
    <div className="overflow-hidden">
    <Navbar />
    <FirstSlide />
    </div>
  )
}
