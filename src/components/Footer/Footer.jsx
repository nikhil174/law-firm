import React from 'react'
import Navbar from '../Navbar/Navbar'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footer__section'>
      <Navbar footer />
      <div className="general__texts">
        <p>© 2020 Acme. All right reserved.</p>
        <p><a href="#" className="general__text">Privacy Policy</a></p>
        <p><a href="#" className="general__text">Terms of Service</a></p>
      </div>
    </footer>
  )
}

export default Footer
