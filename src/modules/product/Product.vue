<template>
  <div id="container">
    <h1>WAWEN'S UBE HALAYA : Products</h1>
    <div class="row">
      <div class="column">
        <img :src="require('@/assets/halaya.jpg')" alt="Snow">
        <label>this is he name</label>
        <!-- <img id="cart" :src="require('@/assets/logo.png')"> -->
      </div>
      <div class="column">
        <img :src="require('@/assets/cake.png')" alt="Forest">
      </div>
      <div class="column">
        <img :src="require('@/assets/buchi.jpg')" alt="Mountains">
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
h1 {
  color: #8028d8;
  font-family: Segoe Script;
  font-weight: bolder;
  text-align: center;
  padding-bottom: 2%;
}

#container {
  margin-top:100px;
  width: 90%;
  margin-left: 10%;
  margin-right: 10%;
}

* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 30%;
  padding: 5px;
  margin-left: 1%;
  height: 400px;
  border: 2px solid #ddd;
  border-radius: 2px;
  border-style:outset;
}

.column img{
  width:100%;
  height:300px;
}

.column:hover {
  border: 2px solid #8028d8;
}

#cart {
  width: 50px;
  height: 50px;
  float: right;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>