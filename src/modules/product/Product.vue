<template>
  <div class="container">
    <h1>WAWEN'S UBE HALAYA : Products</h1>
    <div>
      <div class="gallery">
        <img :src="require('@/assets/halaya.jpg')" width="600" height="400">
        <div class="desc">
          <div class="name">
            <u>Ube Halaya in Square Bottle</u>
          </div>
          <div class="cart">
            <button>
              Add to Cart
              <i style="color:black;" class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="gallery">
        <img :src="require('@/assets/cake.png')" width="600" height="400">
        <div class="desc">
          <div class="name">
            <u>Ube Halaya Happy Birthday Round Cake</u>
          </div>
          <div class="cart">
            <button>
              Add to Cart
              <i style="color:black;" class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="gallery">
        <img :src="require('@/assets/buchi.jpg')" width="600" height="400">
        <div class="desc">
          <div class="name">
            <u>Ubechi</u>
          </div>
          <div class="cart">
            <button>
              Add to Cart
              <i style="color:black;" class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- for modal -->
  
    <!-- end of modal -->
  </div>
</template>
<style>
.container {
  margin-top: 20px;
  width: 90%;
  margin-left: 10%;
  margin-right: 10%;
}

h1 {
  color: #8028d8;
  font-family: Segoe Script;
  font-weight: bolder;
  text-align: center;
  padding-bottom: 2%;
}

div button {
  float: right;
  background-color: white;
  border: 2px solid #8028d8;
  color: #8028d8;
  font-family: Segoe Script;
  font-weight: bolder;
  text-align: center;
  text-decoration: none;
  border-radius: 8px;
  font-stretch: narrower;
  font-size: 10px;
  width: 100%;
  height: 40px;
}

div.gallery {
  display: block;
  margin: 5px;
  border: 1px solid #ccc;
  float: left;
  width: 31%;
  margin-left: 1%;
  border-style: outset;
  height: 350px;
}

div.gallery:hover {
  border: 2px solid white;
}

div.gallery img {
  width: 100%;
  height: 80%;
  border: 1px solid #8028d8;
}

div.desc {
  padding: 10px;
  height: 20%;
  border: 1px solid #e5b1fd;
}

div u {
  color: #8028d8;
  font-size: 15px;
  font-weight: bolder;
}

div.name {
  width: 69%;
  float: left;
}

div.cart {
  width: 29%;
  float: right;
}
</style>

