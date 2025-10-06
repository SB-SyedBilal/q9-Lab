import React from 'react'
import AtorHero from '../../components/AtorPage/AtorHero'
import AtorSlider from '../../components/AtorPage/AtorSlider'
import AtorBanner from '../../components/AtorPage/AtorBanner'
import AtorCase from '../../components/AtorPage/AtorCase'
import AtorHowWorks from '../../components/AtorPage/AtorHowWorks'
import AtorForm from '../../components/AtorPage/AtorForm'
import RequestForm from "../../components/RequestForm/RequestForm"

const page = () => {
  return (
    <div>
      <AtorHero />
      {/* <AtorSlider /> */}

      <AtorHowWorks />
      <AtorBanner />
      <AtorCase />
      {/* <AtorForm /> */}
      <RequestForm />
      

    </div>
  )
}

export default page
