<template>
  <div class="container">
    <h1>WAWEN'S UBE HALAYA : Products</h1>
    <div>
      <div class="gallery">
        <img :src="require('@/assets/halaya.jpg')" width="600" height="400">
        <div class="desc">
          <u>Ube Halaya in Square Bottle</u>
        </div>
      </div>

      <div class="gallery">
        <img :src="require('@/assets/cake.png')" width="600" height="400">
        <div class="desc">
          <u>Ube Halaya Happy Birthday Round Cake</u>
        </div>
      </div>

      <div class="gallery">
        <img :src="require('@/assets/buchi.jpg')" width="600" height="400">
        <div class="desc">
          <u>Ubechi</u>
        </div>
      </div>
    </div>
    <!-- for modal -->

    <!-- end of modal -->
  </div>
</template>

<style>
.container {
  margin-top: 80px;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
}

h1 {
  color: #8028d8;
  font-family: Segoe Script;
  font-weight: bolder;
  text-align: center;
  padding-bottom: 2%;
}

div.gallery {
  display: block;
  margin: 1%;
  border: 1px solid #ccc;
  float: left;
  width: 30%;
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
  font-family: Tahoma;
}

</style>
