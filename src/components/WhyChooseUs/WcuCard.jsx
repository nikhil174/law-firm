import React from 'react'
import './wcuCard.css'

const WcuCard = ({ bgGray, successRate }) => {
  return (
    <div className={`wcuCard ${bgGray ? 'grayBg' : ''}`}>
      <div className="card__icon">
        <img src="wcuCardIconBg.png" alt="icon bg" />
        <img className='wcuCardIcon' src="wcuCardIcon.png" alt="icon" />
      </div>
      <div className="card__srate">
        <h4>{successRate}% Success Rate</h4>
      </div>
      <div className="card__detail">
        <p>
          Amet minim mollit non deserunt ullamco est
          sit aliqua dolor do amet sint. Velit officia
          consequatduis enim velit mollit Exer.
        </p>
      </div>
      <div className="card__btn">
        <button>Read More</button>
      </div>
    </div>
  )
}

export default WcuCard
