import React from 'react';
import '../css/header.css'
import Nav from 'react-bootstrap/Nav';
function Header() {
  
    return (
      
      <Nav fill variant="tabs" defaultActiveKey="/home">
     
        <Nav.Item>
          <Nav.Link href="/home">Danh sách sản phẩm</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Lắp đặt phòng net</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Trả góp</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Bảng giá</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Xây dựng cấu hình</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Chính Sách Bảo Hành</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/home">Thiết bị mining</Nav.Link>
        </Nav.Item>
        
      </Nav>
    );
  }
  
  export default Header;