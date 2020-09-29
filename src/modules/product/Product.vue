<template>
  <div id="container">
    <div class="row">
      <div class="column">
        <img :src="require('@/assets/halaya.jpg')" alt="Snow" style="width:100%">
      </div>
      <div class="column">
        <img :src="require('@/assets/cake.png')" alt="Forest" style="width:100%">
      </div>
      <div class="column">
        <img :src="require('@/assets/buchi.jpg')" alt="Mountains" style="width:100%">
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
#container {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
}

* {
  box-sizing: border-box;
}

.column {
  float: left;
  width: 33.33%;
  padding: 5px;
}

/* Clearfix (clear floats) */
.row::after {
  content: "";
  clear: both;
  display: table;
}
</style>