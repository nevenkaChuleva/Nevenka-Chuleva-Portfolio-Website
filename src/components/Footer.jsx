import React from 'react';

export default function Footer(){
    return(
        <footer className="footer--container" id="contact">
            <h4 className="footer--interested"> Interested? Contact me!</h4>
            <p className="footer--first email"> Email: </p>
            <a href="mailto:chuleva.n@yahoo.com" className="footer--second email-name"> chuleva.n@yahoo.com </a>
            <p className="footer--first github"> Github: </p>
            <a href="https://github.com/nevenkaChuleva" target="_blank" className="footer--second github-name"> github.com/nevenkaChuleva </a> 
            <p className="footer--first linkedin"> LinkedIn: </p>
            <a href="https://www.linkedin.com/in/nevenka-chuleva-a20354232/" target="_blank" className="footer--second linkedin-name"> linkedin.com/in/nevenka-chuleva-a20354232/</a>
        </footer>
    )
}