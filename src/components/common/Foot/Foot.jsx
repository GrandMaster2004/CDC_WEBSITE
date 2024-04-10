import React from 'react'
import "./Foot.css"
function Foot() {
  return (
    <div>
      <div>
      <footer className="footer">
        <div className="container row">
            <div className="footer-col">
                <h4>CODERS & DEVELOPERS CLUB</h4>
                <ul>
                    <li>MADAN MOHAN MALAVIYA UNIVERSITY OF TECHNOLOGY,<br/> GORAKHPUR, UTTAR PRADESH - 273010</li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Navigation</h4>
                <ul>
                   
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/query">Query</a></li>
                    <li><a href="/verify">Verify</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>know us</h4>
                <ul>
                    <li><a href="#">download</a></li>
                    <li><a href="#">changelog</a></li>
                    <li><a href="#">github</a></li>
                    <li><a href="#">Telegram</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-links">
                    <li>Be sure to give us a follow on the below social links</li>
                    <br/>
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/codechef-mmmut-chapter/mycompany/"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </footer>
      
      </div>
    </div>
  )
}

export default Foot
