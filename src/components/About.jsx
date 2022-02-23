import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import { FaReact } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';

export default function About(){
    return(
        <section className="about--container" id="about">
            <div className="about--first-part">
                <h2> About me </h2>
                <p> I'm a motivation-driven developer, aiming to build aesthetically pleasing and 
                    user-friendly applications.
                </p>
            </div>
            <div className="about--second-part">
                <p> Skills:</p>
                <ul className="about--name-container">
                    <li> HTML </li>
                    <li> CSS </li>
                    <li> Javascript </li>
                    <li> React </li>
                    <li> SCSS </li>
                </ul>
                <ul className="about--icon-container">
                <dfn title="HTML"> <FaHtml5 /> </dfn>
                <dfn title="CSS"><FaCss3Alt /> </dfn>
                <dfn title="JavaScript"><DiJavascript1 /> </dfn>
                <dfn title="React"><FaReact /> </dfn>
                <dfn title="SASS"><FaSass /> </dfn>
                </ul>
            </div>
        </section>
    )
}