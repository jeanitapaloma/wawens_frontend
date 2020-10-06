<template>
  <div class="container">
    <h1>WAWEN'S UBE HALAYA : Cart</h1>
    <hr>
    <div class="row">
      <div
        class="column"
        style="border-right-color: #e5b1fd;border-style: solid;border-width: thin;border-left-color: white;border-top-color: white;border-bottom-color: white;"
      >
        <h2>Selected Products</h2>
        <div v-for="i in 5" :key="i">
          <div class="selected-item">
            <div class="column1" style="width:40%">
              <img :src="require('@/assets/halaya.jpg')">
            </div>
            <div class="column1" style="width:50%;margin-left:5%;">
              <h2>Product Name</h2>
              <h4>Price: PHP 800.00 / order</h4>
              <span id="quantity">
                <button @click="decrement()">&mdash;</button>
                <input type="text" :value="quantity" disabled>
                <button @click="increment()">&#xff0b;</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="column"
        style="border-right-color: white;border-style: solid;border-width: thin;border-left-color: #e5b1fd;border-top-color: white;border-bottom-color: white;"
      >
        <h2 style="margin-left:10px;">Delivery Details</h2>
      </div>
    </div>
    <button id="submit" class="btn btn-primary btn-lg">Continue to Submit Order</button>
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

h2 {
  color: #8028d8;
  font-family: Segoe Script;
  font-weight: bold;
}

hr {
  width: 100%;
  background-color: #e5b1fd;
  display: block;
  height: 1px;
  border-style: inset;
  border-width: 1px;
}

.column,
.column1 {
  float: left;
  width: 50%;
  height: auto;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.selected-item {
  width: 100%;
  height: 150px;
  margin-top: 10px;
}

.selected-item img {
  width: 100%;
  height: 150px;
  border: 1px solid #e5b1fd;
  border-radius: 2px;
  padding: 3px;
}

#quantity button {
  text-align: center;
  border: 1px solid #808080;
  color: white;
  background-color: #808080;
  width: 35px;
  font-weight: bolder;
  font-size: 16px;
}

#quantity input {
  text-align: center;
  width: 100px;
  color: black;
  font-size: 15px;
  border: 2px solid #808080;
}

#submit {
    float: right;
    color: #8028d8;
    border-radius: 10px;
    border: 2px solid #8028d8;
    background-color: #e5b1fd;
    font-weight: bolder;
    height: 50px;
    font-size: 20px;
    margin-top: 50px;
    margin-bottom: 50px;
}
</style>

<script>
export default {
  data() {
    return {
      quantity: 1
    };
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity === 1) {
        alert("Negative quantity not allowed");
      } else {
        this.quantity--;
      }
    }
  }
};
</script>
