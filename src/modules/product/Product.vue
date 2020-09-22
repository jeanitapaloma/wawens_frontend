<template>
  <div id="container">
    <div class="responsive">
      <div class="gallery">
        <img :src="require('@/assets/halaya.jpg')">
        <div class="desc">Add a description of the image here</div>
      </div>
    </div>

    <div class="responsive">
      <div class="gallery">
        <img :src="require('@/assets/buchi.jpg')">
        <div class="desc">Add a description of the image here</div>
      </div>
    </div>

    <div class="responsive">
      <div class="gallery">
        <img :src="require('@/assets/halaya.jpg')">
        <div class="desc">Add a description of the image here</div>
      </div>
    </div>

    <div class="responsive">
      <div class="gallery">
        <img :src="require('@/assets/buchi.jpg')">
        <div class="desc">Add a description of the image here</div>
      </div>
    </div>

    <div class="clearfix"></div>
  </div>
</template>
<style scoped lang="scss">
#container {
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
  margin-top: 10%;
}

div.gallery {
  border: 1px solid #c19ffc;
}

div.gallery:hover {
  border: 3px solid #7400d9;
}

div.gallery img {
  width: 100%;
  height: 300px;
}

div.desc {
  padding: 15px;
  text-align: center;
}

* {
  box-sizing: border-box;
}

.responsive {
  padding: 0 6px;
  float: left;
  width: 24.99999%;
}

@media only screen and (max-width: 700px) {
  .responsive {
    width: 49.99999%;
    margin: 6px 0;
  }
}

@media only screen and (max-width: 500px) {
  .responsive {
    width: 100%;
  }
}

.clearfix:after {
  content: "";
  display: table;
  clear: both;
}
</style>