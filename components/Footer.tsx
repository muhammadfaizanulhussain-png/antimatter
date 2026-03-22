import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="contact-info">
                <h3>Contact Us</h3>
                <p>Email: info@digitaldarwaaza.com</p>
                <p>Phone: +123-456-7890</p>
            </div>
            <div className="footer-links">
                <h3>Links</h3>
                <ul>
                    <li><a href="https://digitaldarwaaza.com/about">About Us</a></li>
                    <li><a href="https://digitaldarwaaza.com/services">Services</a></li>
                    <li><a href="https://digitaldarwaaza.com/contact">Contact</a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;