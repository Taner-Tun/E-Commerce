import React, {useState} from "react"
import Footer from "../components/Footer"
import "../scss/main.scss"
import meats from "../assets/images/meats.webp"

function Contact() {
  const [message, setMessage] = useState("")

  const handleSendMessage = () => {
    // Logic for sending the message
    const messageText = "Your Message Received!"
    setMessage(messageText)
  }

  return (
    <>
      <div className="main-container">
        <div className="image">
          <img src={meats} alt="meats" />
        </div>
        <br />
        <hr />
        <h1 className="contactus">Contact Us</h1>
        <div className="contact-container">
          <form>
            <div className="contact-form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="contact-form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="contact-form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <div className="contact-form-group">
              <button type="button" onClick={handleSendMessage}>
                Send Message
              </button>
            </div>
          </form>
          <div className="contact-message">
            <p className="contact-message-text">{message}</p>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <div className="call">
          <h1>Call Us</h1>
          <h3>Opening Hours</h3>
          <p>Monday–friday: 9-18</p>
          <p>Saturday–Sunday: Closed</p>
          <button className="btn1">078 768 500</button>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact
