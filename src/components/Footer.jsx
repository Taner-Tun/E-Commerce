import React from "react"
import "../scss/main.scss"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
       <div className="contact-section">
        <div className="call">
          <h1>Call Us</h1>
          <h3>Opening Hours</h3>
          <p>Monday–friday: 9-18</p>
          <p>Saturday–Sunday: Closed</p>
          <button className="btn1">078 768 500</button>
        </div>
      </div>
            <div className="social-media">
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
  </div>
      <div className="footer-container">
        <p>&copy; {currentYear} Jensen Deli. All rights reserved.</p>
      </div>
    </footer>
    
  )
}

export default Footer
