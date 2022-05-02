import React, { useState } from "react";
import axios from "axios";

const AdminAddProduct = () => {
  const [showImage, setShowImage] = useState({ 0: "", 1: "", 2: "", 3: "" });
  const [product, setProduct] = useState({
    name: "",
    new: false,
    imageUrl: "",
    price: "",
    description: "",
    type: [],
  });

  const { name, imageUrl, price, description, type } = product;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const name = e.target.name;
    const position = name.split("_")[1];
    if (e.target.value !== null) {
      setShowImage({ ...showImage, [position]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var confirm = window.confirm("ต้องการเพิ่มข้อมูลใช่หรือไม่");

    if (confirm) {
      const convertImageToArray = Object.values(showImage).map(
        (value) => value
      );
      const splitType = type.split(",");
      setProduct({
        ...product,
        showImage: convertImageToArray ? convertImageToArray : showImage,
        type: splitType,
      });
      try {
        const apiURL = "http://localhost:4000/api/product/create";
        axios.post(apiURL, product).then((res) => {
          if (res.data) {
            alert("เพิ่มข้อมูลสำเร็จ");
            setProduct({
              name: "",
              new: false,
              imageUrl: "",
              price: "",
              description: "",
              type: [],
            });
          }
        });
      } catch (e) {
        console.error(e.message);
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h3>ข้อมูลสินค้าในระบบ</h3>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="row mt-3">
          <div className="col-lg-12 mb-3">
            <label htmlFor="name" className="form-label">
              ชื่อสินค้า
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              name="name"
              value={name}
              className="form-control"
            />
          </div>

          <div className="col-lg-6 mb-3">
            <label htmlFor="imageUrl" className="form-label">
              ลิงค์รูปภาพ
            </label>
            <input
              type="text"
              onChange={handleInputChange}
              name="imageUrl"
              value={imageUrl}
              className="form-control"
            />
          </div>
          <div className="col-lg-6 mb-3">
            <label htmlFor="price" className="form-label">
              ราคาสินค้า
            </label>
            <input
              type="number"
              onChange={handleInputChange}
              name="price"
              value={price}
              className="form-control"
            />
          </div>

          <div className="col-lg-12 mb-3">
            <label htmlFor="showImage" className="form-label">
              รูปย่อย
            </label>
            <input
              type="text"
              name="showImage_0"
              onChange={handleImageChange}
              className="form-control mb-3"
            />
            <input
              type="text"
              name="showImage_1"
              onChange={handleImageChange}
              className="form-control mb-3"
            />
            <input
              type="text"
              name="showImage_2"
              onChange={handleImageChange}
              className="form-control mb-3"
            />
            <input
              type="text"
              name="showImage_3"
              onChange={handleImageChange}
              className="form-control"
            />
          </div>

          <div className="col-lg-12 mb-3">
            <label htmlFor="type" className="form-label">
              ชนิดสินค้า
            </label>
            <input
              type="text"
              onChange={handleInputChange}
              name="type"
              value={type}
              className="form-control"
            />
          </div>

          <div className="col-lg-12 mb-3">
            <label htmlFor="description" className="form-label">
              รายละเอียดสินค้า
            </label>

            <textarea
              onChange={handleInputChange}
              name="description"
              className="form-control"
              cols="30"
              rows="10"
            >
              {description}
            </textarea>
          </div>

          <div className="col-lg-12">
            <button className="btn btn-primary">เพิ่มสินค้า</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AdminAddProduct;
