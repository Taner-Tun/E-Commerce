import React, {useState} from "react"
import Footer from "../components/Footer"
import "../scss/main.scss"

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
        <h1>Contact Us</h1>
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
      <Footer />
    </>
  )
}

export default Contact
