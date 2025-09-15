import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { BsLinkedin, BsGithub, BsEnvelopeFill, BsTelephoneFill } from "react-icons/bs";

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q9svx3f",   
        "template_6m7cw9e", 
        formRef.current,
        "Ty8PP1oRyZb16mKkv"    
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h4 className="small-heading">Contact</h4>
        <h2 className="main-heading">Get In Touch</h2>

        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/navyasrinivas25/"
            target="_blank"
            rel="noreferrer"
            className="ms-2"
          >
            <BsLinkedin color="blue" size={28} />
          </a>
          <a
            href="https://github.com/navyareddy2517"
            target="_blank"
            rel="noreferrer"
            className="ms-2"
          >
            <BsGithub color="black" size={28} />
          </a>
          <a href="mailto:navyasrinivas25@gmail.com" className="ms-2">
            <BsEnvelopeFill color="black" size={28} />
          </a>
          <a href="tel:+916304892545" className="ms-2">
            <BsTelephoneFill color="blue" size={28} />
          </a>
        </div>

        {/* Contact Form (Top) */}
        <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
          <input type="text" name="from_name" placeholder="NAME" required />
          <input type="email" name="reply_to" placeholder="EMAIL ADDRESS" required />
          <textarea name="message" placeholder="MESSAGE" rows="5" required></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>

      {/* Footer Contact */}
      <div className="contact-footer">
        <div className="footer-left">
          <h3>Navya Gujjula</h3>
          <p>Feel free to reach out for collaborations or just a friendly hello!</p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/navyasrinivas25/"><BsLinkedin /></a>
            <a href="https://github.com/navyareddy2517"><BsGithub /></a>
            <a href="mailto:navyasrinivas25@gmail.com"><BsEnvelopeFill /></a>
            <a href="tel:+916304892545"><BsTelephoneFill /></a>
          </div>
        </div>

        <div className="footer-right">
          <form ref={formRef} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="NAME" required />
            <input type="email" name="reply_to" placeholder="EMAIL ADDRESS" required />
            <textarea name="message" placeholder="MESSAGE" rows="5" required></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
