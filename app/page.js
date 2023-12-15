"use client"

import Hero from './components/Hero'
import BelowHero from './components/belowHero'
import History from './components/History'
import Climb from './components/Climb'
import BelowHistory from './components/BelowHistory'
import { ParallaxProvider } from 'react-scroll-parallax'
import Footer from './components/Footer'


export default function Home() {
  return (
    <div className='max-w-[100%] overflow-hidden'>
      <ParallaxProvider >
      <Hero/>
      <BelowHero/>
      <History/>
      <BelowHistory/>
      <Climb/>
      <Footer/>
      </ParallaxProvider>
    </div>
      )
}
