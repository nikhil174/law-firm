import React from 'react'
import './clientSection.css'
import CsCard from './CsCard'

const ClientSection = () => {
    return (
        <div className='cs__container'>
            <div className="cs__header">
                <div className="cs__title">
                    <p>What says our happy clients</p>
                    <div className="cs__arrows">
                        <img className='csArrowBg' src="csArrowBg1.png" alt="" />
                        <img className='csArrowBg' src="csArrowBg2.png" alt="" />
                        <img className='csLeftArrow' src="csLeftArrow.png" alt="" />
                        <img className='csRightArrow' src="csRightArrow.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="cs__cards">
                <CsCard imgsrc='cscard1.png' name="Jane Cooper" />
                <CsCard imgsrc='cscard2.png' name="Devon Lane" bgGray />
                <CsCard imgsrc='cscard3.png' name="Robert Fox" />
            </div>
        </div>
    )
}

export default ClientSection
