import React from "react";
import "./footer.css";
import { BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        Juan Cruz Rausch
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
      </ul>
      <div className="footer_socials">
        <a href="https://www.instagram.com/juancruzrausch/">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/juancruzrausch/">
          <BsLinkedin />
        </a>
        <a href="https://twitter.com/CruzRausch">
          <BsTwitterX />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Juan Cruz Rausch</small>
      </div>
    </footer>
  );
};

export default Footer;
