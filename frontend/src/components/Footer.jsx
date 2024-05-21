import React from 'react';

const Footer = () => {
  return (
    <footer className="d-flex flex-wrap justify-content-between bg-dark align-items-center py-3">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-decoration-none lh-1">
          <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
        </a>
        <span className="mb-3 mb-md-0 text-light">© 2024 Zero Meter, All Rights Reserved</span>
      </div>

      {/* Social media icons */}
      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex mx-5">
        <li className="ms-3">
          <a className="text-body-secondary" href="https://www.instagram.com/moiznaama?igsh=bW9sOHF3d2Vyc3Yw" target="_blank" rel="noopener noreferrer">
            <img src='https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png' alt="Twitter" style={{ width: '24px', height: '24px' }} />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="https://www.instagram.com/moiznaama?igsh=bW9sOHF3d2Vyc3Yw" target="_blank" rel="noopener noreferrer">
            <img src='https://i0.wp.com/showmeleb.com/wp-content/uploads/2020/06/facebook-logo-png-white-facebook-logo-png-white-facebook-icon-png-32.png?ssl=1' alt="Facebook" style={{ width: '24px', height: '24px' }} />
          </a>
        </li>
        <li className="ms-3">
          <a className="text-body-secondary" href="https://www.instagram.com/moiznaama?igsh=bW9sOHF3d2Vyc3Yw" target="_blank" rel="noopener noreferrer">
            <img src='https://www.kortegaard.co.uk/wp-content/uploads/2020/06/best-solutions-of-instagram-png-transparent-png-images-unique-white-instagram-logo-outline-of-white-instagram-logo-outline-copy.png' alt="Instagram" style={{ width: '24px', height: '24px' }} />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
