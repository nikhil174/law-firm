import React from 'react'
import './heroSection.css'

const HeroSection = () => {
  return (
    <div className='hero__section'>
      <div className="hero__content">
        <p style={{
          fontSize: '66px',
          fontWeight: '500',
          lineHeight: '147.52%',
          width: '571px'
        }}>You don’t have to </p>
        <h1 style={{
          fontSize: '66px',
          width: '571px',
        }}>Fight them Alone.</h1>
        <p style={{
          opacity: '0.3',
          fontSize: '18px',
          width: '560px',
          marginTop: '36px'
        }}>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
        <div className="hero__input">
          <img src="messageIcon.png" alt='m' />
          <input placeholder='Enter your email address' />
          <button>Let's Talk</button>
        </div>
      </div>
      <div className='hero__image'>
        <div className="hero__img">
          <div className='image__bg'></div>
          <div className="image__poster">
            <img src="heroImage.png" alt="hero_image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
