import React from "react";
import MasterLayout from "../../layout/master.layout";

const ContactPage = () => (
  <MasterLayout>
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-12 mb-4">
          <h2 className="text-center">ติดต่อเรา</h2>
        </div>
        <div className="col-lg-12">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe
                title="GoogleMaps"
                width="100%"
                height="500"
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=%E0%B8%A1%E0%B8%88%E0%B8%9E.%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%88%E0%B8%B5%E0%B8%99&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="col-lg-12 mt-4">
          <h4 className="text-center">สมาชิกในกลุ่ม</h4>
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-between gap-4">
            <div className="contact-profile">
              <img
                className="img-fluid"
                src="https://cdn.discordapp.com/attachments/966965279466864664/970545786347749386/blank-profile-picture-973460_640.webp"
                alt=""
              />
            </div>
            <div className="contect-profile-content w-full">
              <h5>ชื่อ-นามสกุล</h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-between gap-4">
            <div className="contact-profile">
              <img
                className="img-fluid"
                src="https://cdn.discordapp.com/attachments/966965279466864664/970545786347749386/blank-profile-picture-973460_640.webp"
                alt=""
              />
            </div>
            <div className="contect-profile-content w-full">
              <h5>ชื่อ-นามสกุล</h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet consectetur
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MasterLayout>
);

export default ContactPage;
