import React from 'react';
import { Search, ShoppingBag, Heart, User } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-root">
      {/* Top Black Bar */}
      <div className="header-topbar">
        <div className="header-topbar-content">
          <div className="header-topbar-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="3"/></svg>
            <span>Lorem ipsum dolor</span>
          </div>
          <div className="header-topbar-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="3"/></svg>
            <span>Lorem ipsum dolor</span>
          </div>
          <div className="header-topbar-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="3"/></svg>
            <span>Lorem ipsum dolor</span>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <div className="header-main-simple">
        <div className="header-main-grid">
          <div className="header-logo-simple">
            <img src="/logo.svg" alt="Logo" className="header-logo-img-simple" />
          </div>
          <div className="header-logo-text-simple">LOGO</div>
          <div className="header-actions-simple">
            <button className="header-action-btn-simple"><Search size={32} /></button>
            <button className="header-action-btn-simple"><Heart size={32} /></button>
            <button className="header-action-btn-simple"><ShoppingBag size={32} /></button>
            <button className="header-action-btn-simple"><User size={32} /></button>
            <div className="header-lang-simple">ENG <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg></div>
          </div>
        </div>
        <nav className="header-nav-simple">
          <a href="#" className="header-nav-link-simple">SHOP</a>
          <a href="#" className="header-nav-link-simple">SKILLS</a>
          <a href="#" className="header-nav-link-simple">STORIES</a>
          <a href="#" className="header-nav-link-simple">ABOUT</a>
          <a href="#" className="header-nav-link-simple">CONTACT US</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
