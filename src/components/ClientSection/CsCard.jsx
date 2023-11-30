import React from 'react'
import './csCard.css'

const CsCard = ({ bgGray, imgsrc, name }) => {
    return (
        <div className={`csCard ${bgGray ? 'grayBg' : ''}`}>
            <div className="card__icon">
                <img src={imgsrc} alt="icon bg" />
            </div>
            <div className="csCard__name">
                <p>{name}</p>
            </div>
            <div className="csCard__about">Ceo of Hunt</div>
            <div className="csCard__detail">
                <p>
                    Amet minim mollit non deserunt ullamco est
                    sit aliqua dolor do amet sint. Velit officia
                    consequatduis enim velit mollit Exer. sit
                    aliqua dolor do amet sint. Velit officia
                </p>
            </div>
        </div>
    )
}

export default CsCard
