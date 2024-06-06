import React from 'react';

import '../css/detail.css'
export default function Detail() {
    return (
        <div class="detail">
  <div class="product-image">
    <img src="image.jpg" alt="Tên sản phẩm"/>
  </div>
  <div class="product-info">
    <h2>Tên sản phẩm</h2>
    <p>Mô tả sản phẩm</p>
    <ul>
      <li>Đặc điểm 1</li>
      <li>Đặc điểm 2</li>
      <li>Đặc điểm 3</li>
    </ul>
    <button>Mua ngay</button>
  </div>
</div>
    );
  
  
}