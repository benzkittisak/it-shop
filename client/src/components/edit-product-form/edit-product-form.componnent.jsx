import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from 'axios';

import { selectCollectionForEdit } from "../../redux/shop/shop.selector";
import { fetchDataStart } from "../../redux/shop/shop.actions";

const EditProductForm = ({ product, productsLoad }) => {
  useEffect(() => {
    productsLoad();
  }, []);

  const [productData, setProductData] = useState(product[0]);
  const { _id , name, price, type, description, imageUrl, showImage } = productData;
  const [showImages, setShowImages] = useState(showImage);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleImageChange = (e) => {
    const {name ,value} = e.target;
    const position = name.split("_")[1];
    if (e.target.value !== null) {
      setProductData({ ...productData, showImage: Object.values({...showImage , [position]:value })})
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var confirm = window.confirm("ต้องการเพิ่มข้อมูลใช่หรือไม่");

    // setProductData({
    //   ...productData,
    //   showImage: Object.values(showImages).map((value) => value),
    // });

    if (confirm) {    
      
      try {
        const apiURL = `http://localhost:4000/api/product/update/${_id}`;
        axios.put(apiURL, productData).then((res) => {
          if (res.data) {
            alert("แก้ไขข้อมูลสำเร็จ");
            setProductData({
              name: "",
              new: false,
              imageUrl: "",
              price: "",
              description: "",
              type: [],
            });
            window.location.href = process.env.PUBLIC_URL + '/admin'
          }
        });
      } catch (e) {
        console.error(e.message);
      }
    }
  };

  return (
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
          value={showImage[0]}
          className="form-control mb-3"
        />
        <input
          type="text"
          name="showImage_1"
          onChange={handleImageChange}
          value={showImage[1]}
          className="form-control mb-3"
        />
        <input
          type="text"
          name="showImage_2"
          value={showImage[2]}
          onChange={handleImageChange}
          className="form-control mb-3"
        />
        <input
          type="text"
          name="showImage_3"
          value={showImage[3]}
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
  );
};

const mapStateToProps = (state, ownProps) => ({
  product: selectCollectionForEdit(ownProps)(state),
});
const mapDispatchToProps = (dispatch) => ({
  productsLoad: () => dispatch(fetchDataStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProductForm);
