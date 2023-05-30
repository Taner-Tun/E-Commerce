import React from "react"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
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
