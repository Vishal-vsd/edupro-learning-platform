import { useState } from "react";
import { GraduationCap, Menu, X, ArrowRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Why EduPro", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="announcement">
        <span>New courses added every week</span>
        <a href="#courses">Explore the catalogue <ArrowRight size={14} /></a>
      </div>
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="EduPro home">
          <span className="brand-mark"><GraduationCap size={23} /></span>
          <span>Edu<span className="brand-accent">Pro</span></span>
        </a>

        <div className="desktop-nav">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>

        <div className="nav-actions">
          <a className="login-link" href="#contact">Log in</a>
          <a className="button button-primary button-small" href="#courses">Sign up</a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-nav" id="mobile-navigation">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}>Log in</a>
          <a className="button button-primary" href="#courses" onClick={() => setMenuOpen(false)}>Sign up</a>
        </div>
      )}
    </header>
  );
}