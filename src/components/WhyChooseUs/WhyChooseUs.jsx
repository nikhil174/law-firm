import React from 'react'
import './whyChooseUs.css'
import WcuCard from './WcuCard'

const WhyChooseUs = () => {
  return (
    <div className='wcu__section'>
      <h1 className='wcu__title'>Why Choose Us?</h1>
      <div className="wcu__cards">
        <WcuCard successRate="98" />
        <WcuCard successRate="100" bgGray />
        <WcuCard successRate="100" />
      </div>
    </div>
  )
}

export default WhyChooseUs
