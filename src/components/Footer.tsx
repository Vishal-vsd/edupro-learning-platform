import { Facebook, Instagram, Linkedin, Send, GraduationCap } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  function handleSubscribe(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) setSubscribed(true);
  }

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand-column">
            <a className="brand brand-light" href="#home">
              <span className="brand-mark"><GraduationCap size={21} /></span>
              <span>Edu<span className="brand-accent">Pro</span></span>
            </a>
            <p>Empowering learners with accessible, practical education for a changing world.</p>
            <div className="social-links">
              <a href="https://facebook.com" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://instagram.com" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://linkedin.com" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>

          <div>
            <h3>Explore</h3>
            <a href="#courses">Popular courses</a>
            <a href="#courses">Development</a>
            <a href="#courses">Design</a>
            <a href="#courses">Marketing</a>
          </div>
          <div>
            <h3>Company</h3>
            <a href="#why-us">About us</a>
            <a href="#why-us">Our approach</a>
            <a href="#contact">Contact</a>
            <a href="#contact">Help centre</a>
          </div>
          <div className="newsletter">
            <h3>Stay in the loop</h3>
            <p>Get course updates and learning tips in your inbox.</p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                disabled={subscribed}
              />
              <button type="submit" aria-label="Subscribe" disabled={subscribed}><Send size={17} /></button>
            </form>
            {subscribed && <p className="subscribe-success" role="status">Thanks — you’re on the list.</p>}
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} EduPro. All rights reserved.</p>
          <div><a href="#contact">Privacy</a><a href="#contact">Terms</a><a href="#contact">Cookies</a></div>
        </div>
      </div>
    </footer>
  );
}