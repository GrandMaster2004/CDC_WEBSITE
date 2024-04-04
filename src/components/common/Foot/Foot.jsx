import React from 'react'
import "./Foot.css"
function Foot() {
  return (
    <div>
      <div>
      <footer className="footer">
        <div className="container row">
            <div className="footer-col">
                <h4>company</h4>
                <ul>
                    <li><a href="#">about us</a></li>
                    <li><a href="#">our services</a></li>
                    <li><a href="#">privacy policy</a></li>
                    <li><a href="#">visit website</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>get help</h4>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Query</a></li>
                    <li><a href="#">Verify</a></li>
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
                    <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                    <a href="#"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
    </footer>
      
      </div>
    </div>
  )
}

export default Foot
