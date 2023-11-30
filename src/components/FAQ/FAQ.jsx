import React from 'react'
import './faq.css'
import Accordion from '../Accordion/Accordion'

const FAQ = () => {
    return (
        <div className='faq__section'>
            <div className="faq__title">
                <h1>FAQ</h1>
            </div>
            <div className="faq__container">
                <div className="faq__detail">
                    <p>Amet minim mollit non deserunt ullamco est sit
                        aliqua dolor do amet sint. </p>
                </div>
                <div className="faq__questions">
                    <div className="faq__questions_first">
                        <h1>Do I need a personal injury report?</h1>
                        <p>Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequatduis
                            enim velit mollit Exer. Amet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
                        <hr className='row__seperator'/>
                    </div>
                    <Accordion />
                </div>
            </div>
        </div>
    )
}

export default FAQ
