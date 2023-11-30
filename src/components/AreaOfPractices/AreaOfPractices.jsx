import React from 'react'
import './areaOfPractices.css'

const AreaOfPractices = () => {
    return (
        <div className='aop__section'>
            <div className="aop__title">
                <h1>Area Of Practices</h1>
            </div>
            <div className="aop__img_container">
                <div className="aop__img_cell">
                    <p className="aop__img_bl">BUSINESS LAW</p>
                    <img src="r1c1.png" alt="" />
                </div>
                <div className="aop__img_cell">
                    <p className="aop__img_pl">Partnership LAW</p>
                    <img src="r1c2.png" alt="" />
                </div>
                <div className="aop__img_cell">
                    <p className="aop__img_rel">REAL ESTATE LAW</p>
                    <img src="r2c1.png" alt="" />
                </div>
                <div className="aop__img_cell">
                    <p className='aop__img_bl'>BUSINESS LAW</p>
                    <img src="r2c2.png" alt="" />
                </div>
                <div className="aop__img_cell">
                    <p className="aop__img_ld">LANDLORD DISPUTES</p>
                    <img src="r3c1.png" alt="" />
                </div>
                <div className="aop__img_cell">
                    <p className='aop__img_ea'>ELDER ABUSE</p>
                    <img src="r3c2.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default AreaOfPractices
