<template>
<div class="container mt-5 pt-5">
    <b-jumbotron bg-variant="transparent">WAWEN'S UBE HALAYA : <br><p id="category">{{category ? category : 'All Products'}}</p></b-jumbotron>
    <b-row>
        <b-col lg="4" v-for="i in 7" :key="i">
            <b-card id="gallery" :img-src="require('@/assets/cake.png')" img-alt="Image" img-top img-height="300px" class="mb-5">
                <b-link data-toggle="modal" data-target=".bd-example-modal-lg" style="color:#8028d8;">
                    <h1 style="font-family:Segoe Script;font-weight:bolder;text-align:left;">Buchi</h1>
                </b-link>
                <h4>Price : &#x20B1; 19.00 / pcs</h4>
            </b-card>
        </b-col>
    </b-row>
    <div class="modal fade bd-example-modal-lg" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="row">
                    <div class="col">
                        <p style="font-size:19px; margin-left:20px;font-family: Comic Sans MS;">
                            <strong>UBE HALAYA ROUND CAKE 2</strong>
                        </p>
                        <img :src="require('@/assets/buchi.jpg')" style="width:100%; height: 80%;margin-top:5px;margin-left:20px;">
                        <h5 style="font-size:20px; text-align:left; margin-left:20px;">
                            <strong>Price : &#x20B1; 19.00 / order</strong>
                        </h5>
                    </div>
                    <div class="col">
                        <p style="font-size:19px; text-align:left;">
                            <strong>DESCRIPTION</strong>
                        </p>
                        <p style="font-size:14px;">
                            An
                            <strong>Ubechi</strong> is the best for all age to taste!
                            <br>Children Multi Purpose Bowl Baby Food Supplement Rice
                            <br>
                            <br>
                            <strong>INGREDIENTS:</strong>
                            <br>Pure Purple Ube, Butter, Sugar, Milk, Flour, Egg
                            <br>
                            <br>
                            <strong>DELIVERY:</strong>
                            <br>Within 2 kilometer all delivery is FREE upon minimum of 2 cakes ordered
                            Delivery fee starts beyond 2 kilometers 9 cakes or less -can set date and time of delivery
                            More than 9 cakes orders cannot set date and time but the owner will update you when:
                            <br>
                            <strong>
                                <br>RETAIL PRICE:
                            </strong> Php 850/cake (530 grams Net Weight).
                            <br>(Wholesale rates available upon request)
                            <br>
                            <br>Shelf life from production:
                            Room temp" 1-2 days Freezer: 30 days Chiller. 10-14 days
                            Best consumed within 7 days from production
                        </p>

                        <strong style="font-size:19px">QUANTITY</strong>

                        <div class="quantity-toggle" id="app">
                            <center>
                                <button @click="decrement()">&mdash;</button>
                                <input type="text" :value="quantity" readonly>
                                <button @click="increment()">&#xff0b;</button>
                            </center>
                            <button id="cart">
                                Add to Cart
                                <i class="fa fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
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

<style>
.jumbotron {
  color: #8028d8;
  font-size: 50px;
  font-family: Segoe Script;
  font-weight: bolder;
  text-align: center;
  padding-bottom: 2px;
}

#category {
  font-size: 35px;
}

#cart {
  background-color: white;
  border: 2px solid #8028d8;
  color: #8028d8;
  font-family: Segoe Script;
  font-weight: bolder;
  border-radius: 8px;
  font-stretch: narrower;
  font-size: 16px;
  width: 50%;
  height: 40px;
  margin-left: 100px;
  margin-top: 20px;
}

#app {
  /* display: flex; */
  width: 100%;
  /* height: 100vh; */
  justify-content: center;
  align-items: center;
  font-size: 15px;
}

input {
  border: 0;
  width: 8.5rem;
  text-align: center;
  padding: 0 0.5rem;
  height: 35px;
  border: 2px solid black;
  color: black;
}

button {
  border: 2px solid black;
  padding: 0.5rem;
  background: #f5f5f5;
  color: black;
  font-size: 1 rem, bold;
  cursor: pointer;
  width: 10%;
  height: 35px;
}

#gallery {
  display: block;
  box-shadow: 0 0px 1px 0 rgb(214, 195, 247), 0 0px 2px 0 rgb(214, 195, 247);
}

#gallery:hover {
  box-shadow: 0 0px 1px 0 rgb(128, 40, 216), 0 0px 9px 0 rgb(128, 40, 216);
  -ms-transform: scale(1.05); /* IE 9 */
  -webkit-transform: scale(1.05); /* Safari 3-8 */
  transform: scale(1.05);
}
</style>
