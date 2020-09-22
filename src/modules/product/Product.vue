<template>
  <div id="container">
    <div class="row">
      <div class="column">
        <img :src="require('@/assets/logo.png')" alt="Snow" style="width:100%">
      </div>
      <div class="column">
        <img :src="require('@/assets/logo.png')" alt="Forest" style="width:100%">
      </div>
      <div class="column">
        <img :src="require('@/assets/logo.png')" alt="Mountains" style="width:100%">
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