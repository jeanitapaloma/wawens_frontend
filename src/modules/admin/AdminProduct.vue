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
            <div
              class="card-header text-center"
              style="background-image: linear-gradient(#e5b1fd, #efe0f8);color:darkviolet;font-weight:bold"
            >Ube Halaya</div>
            <b-row>
              <b-col lg="3" v-for="(item,i) in ubeHalaya" :key="i">
                <ProductCard v-if="item.category == 'Ube Halaya'" :item="item" :id="item.id"></ProductCard>
              </b-col>
            </b-row>
          </div>
          <br>
          <div class="card">
            <div
              class="card-header text-center"
              style="background-image: linear-gradient(#e5b1fd, #efe0f8); color:darkviolet; font-weight:bold"
            >Ube Cake</div>
            <b-row>
              <b-col lg="3" v-for="(item,i) in ubeCake" :key="i">
                <ProductCard v-if="item.category == 'Ube Cake'" :item="item" :id="item.id"></ProductCard>
              </b-col>
            </b-row>
          </div>
          <br>
          <div class="card">
            <div
              class="card-header text-center"
              style="background-image: linear-gradient(#e5b1fd, #efe0f8);color:darkviolet;font-weight:bold"
            >Ube Ubechi</div>
            <b-row>
              <b-col lg="3" v-for="(item,i) in ubeChi" :key="i">
                <ProductCard v-if="item.category == 'Ube Ubechi'" :item="item" :id="item.id"></ProductCard>
              </b-col>
            </b-row>
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
import ProductCard from "./ProductCard";
export default {
  components: {
    sidebar,
    addProductModal,
    ProductCard
  },

  data() {
    return {
      show: false,
      items: [
        {
          id: 1,
          img: "UbeHalaya1.jpg",
          text: "Ube Halaya in Square Bottle",
          price: " Php 180.00 ",
          type: "pieces",
          category: "Ube Halaya",
          desription:
            "Ube Halaya is one of the delicious jam created by wawens."
        },
        {
          id: 2,
          img: "UbeHalaya2.jpg",
          text: "Ube Halaya in Square Box",
          price: " Php 890.00 ",
          type: "pack",
          category: "Ube Halaya",
          desription: "Ube Halaya is very yummy and delicious."
        },
        {
          id: 3,
          img: "cake.png",
          text: "Ube Cake for our Dreams",
          price: " Php 200.00 ",
          type: "pieces",
          category: "Ube Cake",
          desription:
            "Made with fresh Ube, this pretty pink and purple cake has a swirl of fresh ube sauce in the cake."
        },
        {
          id: 4,
          img: "cake.png",
          text: "Ube Cake for our Success",
          price: " Php 200.00 ",
          type: "pieces",
          category: "Ube Cake",
          desription:
            "Ube Halaya Cake are decorated with sparkly clear crystal sprinkles and pearl sprinkles. "
        },
        {
          id: 5,
          img: "wawens.png",
          text: "Ubechi with tender care and love",
          price: " Php 100.00 ",
          type: "pieces",
          category: "Ube Ubechi",
          desription:
            "Ube Ubechi is one of the popular ubechi in the philippines,with mixture of ube and cheeze."
        },
        {
          id: 6,
          img: "wawens.png",
          text: "Ubechi with Cheeze",
          price: " Php 100.00 ",
          type: "pieces",
          category: "Ube Ubechi",
          desription:
            "Ube Ubechi is one of the popular ubechi in the philippines,with mixture of ube and cheeze."
        }
      ],
      ubeHalaya: [],
      ubeCake: [],
      ubeChi: []
    };
  },
  computed: {},
  methods: {
    openModal() {
      this.$refs.childModal.shown();
    }
  },
  mounted() {
    console.log("sadas");

    let ubeHalaya = this.items.filter(item => {
      return item.category == "Ube Halaya";
    });
    this.ubeHalaya = ubeHalaya;

    let ubeCake = this.items.filter(item => {
      return item.category == "Ube Cake";
    });
    this.ubeCake = ubeCake;

    let ubeChi = this.items.filter(item => {
      return item.category == "Ube Ubechi";
    });
    this.ubeChi = ubeChi;
  }
};
</script>
<style scoped>
.pProducts {
  color: purple;
  font-weight: bold;
  font-family: Segoe Script;
  font-style: italic;
  font-size: 20px;
  margin-top: 1%;
}
#card1 {
  color: darkviolet;
}
.btn {
  background: #bb6bd9;
  height: calc(2.5em + 0.75rem + 2px);
  width: 100%;
  font-size: 1rem;
  color: white;
  /* font-size: 16; */
}
.button {
  background: #bb6bd9;
  height: calc(2.5em + 0.75rem + 2px);
  width: 100%;
  font-size: 1rem;
  color: white;
  font-weight: bold;
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
p {
  color: darkviolet;
  text-align: center;
  font-weight: bold;
}
</style>
