import React from 'react'
import './newsLetter.css'

const NewsLetter = () => {
    return (
        <div className='newsLetter__section'>
            <div className="newsLetter__title">
                <p>Subscribe Our Newsletter</p>
            </div>
            <div className="newsLetter__inputSection">
                <div className="inputDiv">
                    <input type="text" placeholder='Name:' />
                </div>
                <div className="inputDiv">
                    <input type="text" placeholder='Enter your Email:' />
                </div>
                <button>SEND</button>
            </div>
        </div>
    )
}

export default NewsLetter
