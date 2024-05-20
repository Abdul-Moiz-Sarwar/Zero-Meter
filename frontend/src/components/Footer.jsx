import React from 'react';
import twitterIcon from '../pages/images/X.png';
import instagramIcon from '../pages/images/insta.jpg';
import facebookIcon from '../pages/images/fb.png';

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
      </div>

      {/* Social media icons */}
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
          <a className="text-body-secondary" href="https://www.instagram.com/moiznaama?igsh=bW9sOHF3d2Vyc3Yw" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" style={{ width: '24px', height: '24px' }} />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="https://www.instagram.com/moiznaama?igsh=bW9sOHF3d2Vyc3Yw" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" style={{ width: '24px', height: '24px' }} />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="https://www.instagram.com/moiznaama?igsh=bW9sOHF3d2Vyc3Yw" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" style={{ width: '24px', height: '24px' }} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
