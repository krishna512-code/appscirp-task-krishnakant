import React from 'react';
import './Footer.css';

const InstagramIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg>
);
const LinkedInIcon = () => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M8 11v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="8" cy="8" r="1" fill="currentColor"/><path d="M12 16v-3a2 2 0 1 1 4 0v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
);

const Footer = () => {
  return (
    <footer className="footer-root">
      <div className="footer-top-row">
        <div className="footer-newsletter-block">
          <h3 className="footer-title">BE THE FIRST TO KNOW</h3>
          <p className="footer-desc">Sign up for updates from mettā muse.</p>
          <form className="footer-newsletter-form">
            <input type="email" placeholder="Enter your e-mail..." className="footer-input" aria-label="Email address for newsletter" />
            <button className="footer-btn" aria-label="Subscribe to newsletter" type="submit">SUBSCRIBE</button>
          </form>
        </div>
        <hr className="footer-section-divider" />
        <div className="footer-contact-block">
          <div>
            <h3 className="footer-title">CALL US</h3>
            <div className="footer-contact-info">+44 221 133 5360 &nbsp; &bull; &nbsp; customercare@mettamuse.com</div>
          </div>
          <div className="footer-currency-block">
            <h3 className="footer-title">CURRENCY</h3>
            <div className="footer-currency-row">
              <img src="https://flagcdn.com/w20/us.png" alt="United States flag for USD currency" className="footer-currency-flag" width="20" height="16" />
              <span className="footer-currency-label">USD</span>
            </div>
          </div>
        </div>
        <hr className="footer-section-divider" />
      </div>
      <div className="footer-bottom-row">
        <div className="footer-col footer-brand-links">
          <div className="footer-brand">mettā muse</div>
          <a href="#" className="footer-link">About Us</a>
          <a href="#" className="footer-link">Stories</a>
          <a href="#" className="footer-link">Artisans</a>
          <a href="#" className="footer-link">Boutiques</a>
          <a href="#" className="footer-link">Contact Us</a>
          <a href="#" className="footer-link">EU Compliances Docs</a>
        </div>
        <hr className="footer-section-divider" />
        <div className="footer-col footer-quick-links">
          <div className="footer-title">QUICK LINKS</div>
          <a href="#" className="footer-link">Orders & Shipping</a>
          <a href="#" className="footer-link">Join/Login as a Seller</a>
          <a href="#" className="footer-link">Payment & Pricing</a>
          <a href="#" className="footer-link">Return & Refunds</a>
          <a href="#" className="footer-link">FAQs</a>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms & Conditions</a>
        </div>
        <hr className="footer-section-divider" />
        <div className="footer-col footer-follow">
          <div className="footer-title">FOLLOW US</div>
          <div className="footer-social-icons">
            <a href="#" className="footer-social-link" aria-label="Instagram"><InstagramIcon /></a>
            <a href="#" className="footer-social-link" aria-label="LinkedIn"><LinkedInIcon /></a>
          </div>
          <div className="footer-title footer-accepts-title">mettā muse ACCEPTS</div>
          <div className="footer-payments">
            <svg width="376" height="35" viewBox="0 0 376 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="55" height="34" rx="4.5" fill="white" stroke="#FFF2F5"/>
              <path d="M26.6248 17.6346V22.2179H25.1667V10.9028H29.021C29.4829 10.895 29.9417 10.9786 30.3711 11.1487C30.8005 11.3188 31.1921 11.5721 31.5233 11.894C31.837 12.1867 32.0899 12.5385 32.2677 12.929C32.4454 13.3196 32.5444 13.7413 32.559 14.1702C32.5736 14.599 32.5036 15.0266 32.3529 15.4283C32.2022 15.8301 31.9738 16.1982 31.6808 16.5117L31.5233 16.6778C30.8501 17.3181 29.9506 17.6661 29.021 17.6432L26.6248 17.6346ZM26.6248 12.2893V16.2825H29.0569C29.5968 16.2997 30.1182 16.0892 30.4963 15.7039C30.7668 15.422 30.9484 15.0667 31.0186 14.6824C31.0887 14.2981 31.0444 13.9016 30.891 13.5423C30.7376 13.183 30.4819 12.8767 30.1558 12.6616C29.8297 12.4464 29.4475 12.3319 29.0569 12.3323L26.6248 12.2893ZM35.9118 14.22C36.8428 14.1771 37.7537 14.4893 38.4584 15.098C39.0958 15.7139 39.4352 16.5733 39.3894 17.4599V22.2351H38.0015V21.138H37.9313C37.6824 21.5495 37.3305 21.8889 36.9102 22.1228C36.49 22.3566 36.016 22.4768 35.5351 22.4714C34.7501 22.4969 33.9845 22.2241 33.3924 21.708C33.1119 21.4792 32.887 21.1895 32.7349 20.861C32.5828 20.5325 32.5074 20.1736 32.5144 19.8117C32.4979 19.4459 32.5689 19.0814 32.7216 18.7486C32.8743 18.4157 33.1043 18.1242 33.3924 17.8981C34.0991 17.3899 34.9545 17.1305 35.8244 17.1605C36.5649 17.1319 37.2997 17.2937 37.9585 17.6346V17.3367C37.9634 17.0904 37.9121 16.8462 37.8086 16.6226C37.7052 16.399 37.5522 16.2019 37.3613 16.0462C36.9779 15.6977 36.4757 15.5091 35.9576 15.5191C35.5814 15.5156 35.2105 15.608 34.8799 15.7877C34.5494 15.9674 34.2701 16.2284 34.0684 16.5461L32.7865 15.7382C33.1346 15.2395 33.6045 14.8382 34.1516 14.5724C34.6986 14.3067 35.3046 14.1854 35.9118 14.22ZM34.0684 19.8461C34.065 20.0316 34.1072 20.2151 34.1914 20.3804C34.2756 20.5458 34.3991 20.6879 34.5511 20.7942C34.8705 21.0463 35.2673 21.1795 35.6755 21.1709C36.2899 21.1695 36.8786 20.9274 37.3169 20.4949C37.7537 20.0852 38.0015 19.5138 38.0015 18.9151C37.4501 18.5231 36.7801 18.3338 36.1052 18.3794C35.5811 18.3587 35.0641 18.5063 34.6299 18.8005C34.4579 18.9155 34.3168 19.071 34.2189 19.2533C34.121 19.4356 34.0694 19.6391 34.0684 19.8461ZM47.3687 14.475L42.5132 25.6325H41.0122L42.847 21.7252L39.6615 14.475H41.2414L43.5502 20.0394L45.7975 14.475H47.3687Z" fill="#5F6368"/>
              <path d="M20.742 16.6458C20.742 16.2047 20.7076 15.7635 20.6375 15.3281H14.4929V17.8303H18.0035C17.932 18.228 17.781 18.6071 17.5595 18.9451C17.338 19.283 17.0505 19.5727 16.7144 19.7969V21.4211H18.8113C19.4489 20.8042 19.9501 20.0605 20.2826 19.238C20.6152 18.4155 20.7717 17.5325 20.742 16.6458Z" fill="#4285F4"/>
              <path d="M14.5016 22.9989C16.0862 23.0424 17.6278 22.4806 18.8128 21.4277L16.7131 19.7949C16.2086 20.1184 15.6369 20.3226 15.0416 20.3919C14.4464 20.4612 13.8431 20.3939 13.2777 20.1951C12.7124 19.9962 12.1998 19.6711 11.779 19.2443C11.3582 18.8176 11.0402 18.3005 10.8493 17.7324H8.698V19.4082C9.23632 20.4868 10.0645 21.394 11.0896 22.0283C12.1147 22.6625 13.2962 22.9986 14.5016 22.9989Z" fill="#34A853"/>
              <path d="M10.849 17.7438C10.5765 16.9379 10.5765 16.0647 10.849 15.2588V13.583H8.69765C8.23901 14.4874 8 15.4872 8 16.5013C8 17.5154 8.23901 18.5152 8.69765 19.4196L10.849 17.7438Z" fill="#FBBC04"/>
              <path d="M14.5016 12.5733C15.4283 12.5564 16.3242 12.9065 16.9938 13.5473L18.8558 11.6953C17.6686 10.581 16.0938 9.9732 14.4658 10.0009C13.2675 10.0069 12.0943 10.3447 11.0762 10.9767C10.0581 11.6087 9.23498 12.5104 8.698 13.5816L10.8493 15.2588C11.1008 14.4855 11.5885 13.8105 12.2436 13.3288C12.8988 12.8471 13.6885 12.5828 14.5016 12.5733Z" fill="#EA4335"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="footer-copyright">Copyright © 2023 mettamuse. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
