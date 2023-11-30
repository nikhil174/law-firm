import React from 'react'
import './navbar.css'

const Navbar = ({ footer }) => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <img src="brandName.png" alt="brand logo" />
                </div>
                <div className={`${footer ? 'navbar__footer' : 'navbar-links'}`}>
                    <a href="#" className="navbar-link">Home</a>
                    <a href="#" className="navbar-link">Attorneys</a>
                    <a href="#" className="navbar-link">Practice Areas</a>
                    <a href="#" className="navbar-link">About Us</a>
                </div>
                {footer ? (<div className='social__links'>
                    <a href="#" className="social__link_icon">
                        <img src="instagram.png" alt="" />
                    </a>
                    <a href="#" className="social__link_icon">
                        <img src="facebook.png" alt="" />
                    </a>
                    <a href="#" className="social__link_icon">
                        <img src="twitter.png" alt="" />
                    </a>
                    <a href="#" className="social__link_icon">
                        <img src="pinterest.png" alt="" />
                    </a>
                </div>) : (<div className="navbar-contact">
                    <button className="navbar-contact-btn">Contact Now</button>
                </div>)}
            </div>
        </nav>
    )
}

export default Navbar

{/* <img className="group-item" alt="" src="Group 10386.svg" />
            <div className="you-dont-have-container">
                <p className="you-dont-have">{`You don’t have to `}</p>
                <p className="fight-them-alone">
                    <b>Fight them Alone.</b>
                </p>
            </div>
            <div className="rectangle-group">
                <div className="group-inner" />
                <div className="hicon-bold-message-35-parent">
                    <img className="hicon-bold-message-35" alt="" src="Hicon / Bold / Message 35.svg" />
                    <div className="enter-your-eamil">Enter your eamil address</div>
                </div>
                <div className="rectangle-container">
                    <div className="rectangle-div" />
                    <div className="lets-talk">Let’s Talk</div>
                </div>
            </div>
            <div className="lorem-ipsum-dolor">Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</div> */}
