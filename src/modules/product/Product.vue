<template>
  <div class="container mt-5 pt-5">
    <b-jumbotron bg-variant="transparent" header="WAWEN'S UBE HALAYA : Products"></b-jumbotron>
    <b-row>
      <b-col lg="4" v-for="i in 3" :key="i">
        <b-card
          :img-src="require('@/assets/buchi.jpg')"
          img-alt="Image"
          img-top
          img-height="300px"
          class="mb-5"
        >
          <b-link data-toggle="modal" data-target=".bd-example-modal-lg">
            <h1>Buchi</h1>
          </b-link>
          <h4>Price : &#x20B1; 19.00 / pcs</h4>
        </b-card>
      </b-col>
    </b-row>
    <div class="modal fade bd-example-modal-lg"  role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
          <div class="row">
    <div class="col">
          <p style="font-size:19px; margin-left:20px"><strong> UBE HALAYA ROUND CAKE 2</strong></p>
          <img :src="require('@/assets/buchi.jpg')" style="width:100%; height: 80%;margin-top:5px;margin-left:20px;" >
          </div>
    <div class="col" >
          <p style="font-size:19px; margin-right:50px" ><strong>DESCRIPTION</strong></p>
          <p style="font-size:14px;">
            An Ubechi is the best for all age to taste! <br>Children Multi Purpose Bowl Baby Food Supplement Rice 
            <br><br><strong> INGREDIENTS:</strong><br>
            Pure Purple Ube, Butter, Sugar, Milk, Flour, Egg<br>
           <br><strong>DELIVERY: </strong><br>
            Within 2 kilometer all delivery is FREE upon minimum of 2 cakes ordered
            Delivery fee starts beyond 2 kilometers
            9 cakes or less -can set date and time of delivery
            More than 9 cakes orders cannot set date and time but the owner will update you when: <br>
             <strong><br>RETAIL PRICE: </strong> Php 850/cake (530 grams Net Weight).
            <br>(Wholesale rates available upon request) 
            <br><br>
            Shelf life from production:
            Room temp" 1-2 days Freezer: 30 days Chiller. 10-14 days
            Best consumed within 7 days from production
          </p>
          <strong>Quantity</strong>
          </div>
  </div>
    </div></div></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>

<style>
.container {
  margin-top: 80px;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
}

.jumbotron h1 {
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
  font-size: 32px;
}

</style>
