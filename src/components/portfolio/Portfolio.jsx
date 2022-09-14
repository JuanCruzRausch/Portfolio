import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/project1.jpeg";
import IMG2 from "../../assets/project2.jpeg";
import IMG3 from "../../assets/project3.jpeg";
import { BsGithub } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG1} alt="img1" />
          </div>
          <div className="noimg">
            <h3>Country App</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/JuanCruzRausch/Proyecto-Individual"
                className="btn"
                target="_blank"
              >
                <BsGithub className="icons-port" /> GitHub
              </a>
              <a
                href="https://countries-app-juan.herokuapp.com/"
                className="btn btn-primary"
                target="_blank"
              >
                <RiPagesLine className="icons-port" /> Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG2} alt="img2" />
          </div>
          <div className="noimg">
            <h3>Marketplace "Mercado los 7 enanitos"</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/JuanCruzRausch/ProyectoGrupal"
                className="btn"
                target="_blank"
              >
                <BsGithub className="icons-port" /> GitHub
              </a>
              <a
                href="https://mercado-los-7-enanitos.vercel.app/"
                className="btn btn-primary"
                target="_blank"
              >
                <RiPagesLine className="icons-port" /> Live Demo
              </a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-img">
            <img src={IMG3} alt="img3" />
          </div>
          <div className="noimg">
            <h3>Posada Brillo de Luna</h3>
            <div className="portfolio_item-cta">
              <a
                href="https://github.com/JuanCruzRausch/Posada-Brillo-De-Luna"
                className="btn"
                target="_blank"
              >
                <BsGithub className="icons-port" /> GitHub
              </a>
              <a
                href="http://posadabrillodeluna.com.ar/"
                className="btn btn-primary"
                target="_blank"
              >
                <RiPagesLine className="icons-port" /> Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
