<template>
  <div class="container">
    <div>
      <h1>WAWEN'S UBE HALAYA : Order</h1>
      <hr>
      <div class="row">
        <div
          class="column"
          style="border-right-color: #e5b1fd;border-style: solid;border-width: thin;border-left-color: white;border-top-color: white;border-bottom-color: white;"
        >
          <h2>Selected Products</h2>
          <div v-for="i in 2" :key="i">
            <div class="selected-item">
              <div class="column1" style="width:40%">
                <img :src="require('@/assets/halaya.jpg')">
              </div>
              <div class="column1" style="width:50%;margin-left:5%;">
                <h2>Product Name</h2>
                <div style="width:100%;">
                  <div class="row">
                    <div class="col-sm-4">
                      <h5>QUANTITY:</h5>
                    </div>
                    <div class="col-sm-4">
                      <h5>1</h5>
                    </div>
                    <div class="col-sm-4">
                      <h5>pc(s)</h5>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-4">
                      <h5>SUBTOTAL:</h5>
                    </div>
                    <div class="col-sm-4">
                      <h5>Php 0.00</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr>
        </div>
        <div
          class="column"
          style="border-right-color: white;border-style: solid;border-width: thin;border-left-color: #e5b1fd;border-top-color: white;border-bottom-color: white;"
        >
          <div style="margin-left:10px;">
            <h2>Delivery Details</h2>
            <div class="form-row">
              <i>
                (
                <i style="color:red;">*</i>Actual delivery date and time will be seen at
                <u
                  style="color:#8028d8"
                  @click="redirect('/order_status')"
                >order status</u> page once your order is confirmed.):
              </i>
              <div class="form-group col-6">
                <label>Preferred Delivery Date:</label>
                <span class="form-control">{{date}}</span>
              </div>
              <div class="form-group col-6">
                <label>Preferred Delivery Time:</label>
                <span class="form-control">{{time}}</span>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label>Payment Option:</label>
                <span class="form-control">{{payment}}</span>
              </div>
              <div class="form-group col-md-6">
                <label>Active Contact Number:</label>
                <span class="form-control">{{contact}}</span>
              </div>
            </div>
            <div class="form-group">
              <label>Receiver's Complete Name:</label>
              <span class="form-control">{{receiver}}</span>
            </div>
            <div class="form-group">
              <label>Complete Name Delivery Address:</label>
              <span class="form-control">{{address}}</span>
            </div>
            <div class="form-group">
              <label>Message/Delivery Instructions(Optional):</label>
              <span class="form-control" style="height:100px;overflow: auto;">{{message}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <button id="cart" @click="redirect('/cart')" class="btn btn-primary btn-lg">Back to Cart</button>
      </div>
      <div class="col">
        <button
          id="submit"
          @click="redirect('/order_status')"
          class="btn btn-primary btn-lg"
        >SUBMIT ORDER</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 80px;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
}

h1 {
  color: #8028d8;
  font-family: Segoe Print;
  font-weight: bolder;
  text-align: center;
  padding-bottom: 2%;
}

h2 {
  color: #8028d8;
  font-family: Segoe Print;
  font-weight: bold;
}

h5 {
  font-weight: bolder;
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
  color: white;
  border-radius: 10px;
  border: none;
  background-color: #8028d8;
  font-weight: bolder;
  height: 40px;
  font-size: 15px;
  margin-top: 50px;
  margin-bottom: 50px;
}

#cart {
  float: left;
  color: #8028d8;
  border-radius: 10px;
  border: none;
  background-color: #e5b1fd;
  font-weight: bolder;
  height: 40px;
  font-size: 15px;
  margin-top: 50px;
  margin-bottom: 50px;
}

.form-group label {
  font-weight: bolder;
  font-size: 16px;
}

.form-group span {
  border: 1px solid #e5b1fd;
  font-size: 13px;
}
</style>

<script>
import ROUTER from "@/router";
export default {
  data() {
    return {
      quantity: 1,
      date: null,
      time: null,
      payment: null,
      contact: null,
      receiver: null,
      address: null,
      message: null
    };
  },
  methods: {
    redirect(parameter) {
      ROUTER.push(parameter);
    }
  }
};
</script>
