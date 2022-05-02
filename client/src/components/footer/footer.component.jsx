import React from "react";
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex gap-2">
            <div className="cory-right">
              <p>&copy; 2022 IT SHOP. Putchang</p>
            </div>
            <div className="admin-login-link">
              <Link className="text-black text-decoration-none" to={process.env.PUBLIC_URL + '/admin'}>
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
