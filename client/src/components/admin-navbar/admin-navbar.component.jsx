import React from "react";
import {Link} from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'

import { signOutStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";


const AdminNavbar = ({signOut}) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to={process.env.PUBLIC_URL + "/admin"}>
        Admin
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link
              className="nav-link active"
              aria-current="page"
              to={process.env.PUBLIC_URL + "/admin"}
            >
              หน้าแรก
            </Link>
          </li>
          <NavDropdown title="สินค้า" id="nav-dropdown">
            <NavDropdown.Item href={process.env.PUBLIC_URL + "/admin/"}>
              ดูสินค้า
            </NavDropdown.Item>
            <NavDropdown.Item
              href={process.env.PUBLIC_URL + "/admin/add_product"}
            >
              เพิ่มสินค้า
            </NavDropdown.Item>
          </NavDropdown>
        </ul>
        <form className="d-flex">
          <button onClick={()=> signOut()} className="btn btn-outline-danger" type="submit">
            ออกจากระบบ
          </button>
        </form>
      </div>
    </div>
  </nav>
);

const mapDispatchToProps = (dispatch) => ({
  signOut:() => dispatch(signOutStart())
})

export default connect(null,mapDispatchToProps)(AdminNavbar);
