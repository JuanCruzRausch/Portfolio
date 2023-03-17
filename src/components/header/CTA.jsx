import React from "react";
import CVEng from "../../assets/CV ingles.pdf";
import CVSpa from "../../assets/CVEspañol.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CVEng} download className="btn">
        Download CV (English)
      </a>
      <a href={CVSpa} download className="btn">
        Download CV (Spanish)
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
