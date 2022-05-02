import React, { useState } from "react";
import { connect } from "react-redux";
import Swal from 'sweetalert2';

import { signInStart } from "../../redux/user/user.actions";

const AdminLogin = ({ checkUser, currentUser , signInStart }) => {
  const [userLogin, setUserLogin] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      try{
        signInStart(username , password)
        Swal.fire("เข้าสู่ระบบสำเร็จ" , "" , "success")
      }catch(e) {
          console.error(e.message);
      }
  };

  const { username, password } = userLogin;
  

  return (
    <div className="admin-login">
      <form onSubmit={handleSubmit} className="form-login">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>เข้าสู่ระบบ</h3>
            </div>
            <div className="col-lg-12 mb-4">
              <label htmlFor="username" className="form-label">
                ชื่อผู้ใช้
              </label>
              <input
                value={username}
                onChange={handleChange}
                type="text"
                name="username"
                className="form-control"
                required

              />
            </div>
            <div className="col-lg-12 mb-4">
              <label htmlFor="password" className="form-label">
                รหัสผ่าน
              </label>
              <input
                value={password}
                onChange={handleChange}
                type="password"
                name="password"
                className="form-control"
                required
              />
            </div>
            <div className="col-lg-12  mb-4">
              <button type="submit" className="btn btn-primary float-end">
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signInStart:(username , password) => dispatch(signInStart({username,password}))
});


export default connect(null, mapDispatchToProps)(AdminLogin);
