import React from 'react';
import '../css/search.css'
import Nav from 'react-bootstrap/Nav';
function Search() {
  
    return (
<div class="search">
  <div class="search-bar">
    <input type="text" placeholder="Tìm kiếm..."></input>
    <button type="button">Tìm</button>
  </div>
</div>
    );
}

export default Search;
