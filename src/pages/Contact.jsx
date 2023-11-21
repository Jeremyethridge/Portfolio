import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fivimca",
        "template_y70phqk",
        form.current,
        "E169w6V4kxhKQYZi4"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message. Please try again.");
        }
      );
  };

    const handleInputChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value });
    }

    return (
      <form className="contact-container" ref={form} onSubmit={sendEmail}>
        <label className="form-label">Name</label>
        <input
          className="form-input"
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleInputChange}
        />
        <label className="form-label">Email</label>
        <input
          className="form-input"
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleInputChange}
        />
        <label className="form-label">Message</label>
        <textarea
          className="form-input"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
        <input className="submit-button" type="submit" value="Send" />
      </form>
    );
  };

export default Contact;
