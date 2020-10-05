<template>
  <div>
    <sidebar>
      <b-container class="mt-5">
        <div>
          <p class="d-flex justify-content-between pProducts">
            WAWEN'S UBE HALAYA:Wawe'ns Ube Halaya Products
            <span>
              <button
                type="button"
                class="btn"
                data-toggle="modal"
                data-target="exampleModalCenter"
                @click="openModal"
              >+ ADD PRODUCT</button>
            </span>
          </p>
          <div class="card">
            <div class="card-header text-center" style="background-image: linear-gradient(#e5b1fd, #efe0f8);">Ube Halaya</div>
            <div class="card-body">
              <b-row>
                <b-col lg="3" v-for="(item,i) in items" :key="i">
                  <b-card
                    :img-src="require(`@/assets/${item.img}`)"
                    img-alt="Image"
                    img-top
                    img-height="200px"
                    class="mb-5"
                  >
                    <b-link data-toggle="modal" data-target=".bd-example-modal-lg">
                      <h1>{{item.text}}</h1>
                    </b-link>
                    <h4>Price : {{item.price}}</h4>
                  </b-card>
                </b-col>
              </b-row>
            </div>
          </div>
        </div>
      </b-container>
    </sidebar>
    <add-product-modal ref="childModal"/>
  </div>
</template>
<script>
import sidebar from "../../components/frame/sidebar";
import addProductModal from "../basic/addProduct_Modal";
export default {
  components: {
    sidebar,
    addProductModal,
  },
   data() {
    return {
      show: false,
          items: [
      {img:"buchi.jpg", text:"Buchi", price:" Php 180.00 / pcs"},
      {img:"cake.png", text:"Cake",price:" Php 890.00 / pcs"},
      {img: "ubequencher.png", text:"UbeQuencher",price:" Php 200.00 / pcs"},
      {img: "christmaspresent.jpg", text:"Gift Cake", price:" Php 100.00 / pcs"}
    ]
    };
  },
  methods: {
    openModal() {
      this.$refs.childModal.shown();
    }
  },
  mounted() {
    console.log("sadas");
  }
};
</script>
<style>
.pProducts {
  color: purple;
  font-weight: bold;
  font-family: Segoe Script;
  font-style: italic;
  font-size: 20px;
  /* margin-top: 1%; */
}
.btn {
  background: #bb6bd9;
  height: calc(2.5em + 0.75rem + 2px);
  width: 100%;
  font-size: 1rem;
  color: white;
  /* font-size: 16; */
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
  width: 50%;
  height: 50%;
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

#app {
  /* display: flex; */
  width: 100%;
  /* height: 100vh; */
  justify-content: center;
  align-items: center;
  font-size: 15px;
}

pre {
  background: #eee;
  padding: 1rem;
  border-radius: 5px;

}

</style>


