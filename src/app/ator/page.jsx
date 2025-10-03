import React from 'react'
import AtorHero from '../../components/AtorPage/AtorHero'
import AtorSlider from '../../components/AtorPage/AtorSlider'
import AtorHowWorks from '../../components/AtorPage/AtorHowWorks'
import AtorBanner from '../../components/AtorPage/AtorBanner'
import AtorCase from '../../components/AtorPage/AtorCase'

const page = () => {
  return (
    <div>
      <AtorHero />
      <AtorSlider />
      <AtorHowWorks />
      <AtorBanner />
      <AtorCase />
    </div>
  )
}

export default page
