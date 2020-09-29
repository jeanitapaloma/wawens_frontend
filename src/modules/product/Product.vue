<template>
  <div id="container">
    <h1>WAWEN'S UBE HALAYA : Products</h1>
    <div class="row">
      <div class="column">
        <img :src="require('@/assets/halaya.jpg')" alt="Snow" style="width:100%;height:300px;">
        <label>this is he name</label>
        <img id='cart' :src="require('@/assets/logo.png')">
      </div>
      <div class="column">
        <img :src="require('@/assets/cake.png')" alt="Forest" style="width:100%;height:300px;">
      </div>
      <div class="column">
        <img :src="require('@/assets/buchi.jpg')" alt="Mountains" style="width:100%;height:300px;">
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
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  padding-top: 5%;
}

* {
  box-sizing: border-box;
}

.column {
  float: center;
  width: 30%;
  padding: 5px;
  margin-left: 10px;
  height: 400px;
  border: 1px solid #000;
}

#cart{
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