import React from 'react'
import ContactHero from '../../components/ContactUsPage/ContactHero'
import ChoosePath from '../../components/ContactUsPage/ChoosePath'
import Intelligence from '../../components/ContactUsPage/Intelligence'
import RequestForm from "../../components/RequestForm/RequestForm";
const page = () => {
  return (
    <div>
      <ContactHero />
      <ChoosePath />
      <Intelligence />
      <RequestForm />
    </div>
  )
}

export default page
