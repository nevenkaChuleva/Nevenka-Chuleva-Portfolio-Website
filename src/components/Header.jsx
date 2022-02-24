import React from "react";
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaAngleDown } from 'react-icons/fa';
import CVPDF from '../assets/CV_Chuleva_Nevenka.pdf';


export default function Header() {
  return (
    <section className="header--container" id="home">
        <div className="header--everything">
            <p className="header--paragraph header--coloured">Hello</p>
            <h1>I<span className="header--coloured">'</span>m Nevenka Chuleva<span className="header--coloured">.</span></h1>
            <p className="header--paragraph"> | Frontend Developer | </p>
            <a href={CVPDF} download><button className="header--button"> Download CV </button></a>
        </div>

        <div className="header--icon-container">
          <a href="https://github.com/nevenkaChuleva" target="_blank"> <FaGithub /> </a> 
          <a href="https://www.linkedin.com/in/nevenka-chuleva-a20354232/" target="_blank"> <FaLinkedin /> </a> 
        </div>
    </section>
  );
}
