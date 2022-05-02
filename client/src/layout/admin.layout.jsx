import React from "react";
import AdminNavbar from "../components/admin-navbar/admin-navbar.component";
import Footer from "../components/footer/footer.component";

const AdminLayout = ({ children }) => (
  <>
    <AdminNavbar />
    <div className="py-5">{children}</div>
    <Footer />
  </>
);

export default AdminLayout;
