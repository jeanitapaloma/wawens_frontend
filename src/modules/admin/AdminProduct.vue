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
            >UBE HALAYA</div>
            <b-row>
              <b-col lg="3" v-for="(item,i) in items" :key="i">
                <div class="card-header text-center" id="card1">{{item.text}}</div>
                <b-card
                  :img-src="require(`@/assets/${item.img}`)"
                  img-alt="Image"
                  img-top
                  img-height="150px"
                  class="mb-5"
                >
                  <p>Price : {{item.price}}/ {{item.type}}</p>
                  <!-- <a v-readMore:0="msg"></a> -->
                  <div>
                    <button class="button" v-b-toggle.collapse-2>View More</button>
                    <b-collapse id="collapse-2">
                      <div class="card card-body">
                        <p>All product description shall be put here!</p>
                        <div class="row">
                          <div class="col">
                            <button class="btn" @click="updatemodal">Update</button>
                          </div>
                          <div class="col">
                            <button class="btn" @click="showAlert">Remove</button>
                          </div>
                        </div>
                      </div>
                      <button class="button" v-b-toggle="'collapse-2'">View Less</button>
                    </b-collapse>
                  </div>
                </b-card>
              </b-col>
            </b-row>
          </div>
        </div>
      </b-container>
    </sidebar>
    <add-product-modal ref="childModal"/>
    <update-product-modal ref="updateModal"/>
  </div>
</template>
<script>
import sidebar from "../../components/frame/sidebar";
import addProductModal from "../basic/addProduct_Modal";
import updateProductModal from "../basic/UpdateProduct_Modal";
export default {
  components: {
    sidebar,
    addProductModal,
    updateProductModal
  },

  data() {
    return {
      show: false,
      msg: "All information of the product shall be put here",
      msg1: "",
      items: [
        {
          img: "UbeHalaya1.jpg",
          text: "Ube Halaya in Square Bottle",
          price: " Php 180.00 ",
          type: "pieces",
          desription: "All product description shall be put here"
        },
        {
          img: "UbeHalaya2.jpg",
          text: "Ube Halaya in Square Box",
          price: " Php 890.00 ",
          type: "pack",
          desription: "All product description shall be put here"
        },
        {
          img: "UbeHalaya2.jpg",
          text: "Ube Halaya in rounded bottle",
          price: " Php 200.00 ",
          type: "pieces",
          desription: "All product description shall be put here"
        },
        {
          img: "UbeHalaya1.jpg",
          text: "Ube Halaya in rounded bottle",
          price: " Php 100.00 ",
          type: "pieces",
          desription: "All product description shall be put here"
        }
      ]
    };
  },
  methods: {
    openModal() {
      this.$refs.childModal.shown();
    },
    updatemodal() {
      this.$refs.updateModal.shown();
    },
    showAlert() {
      this.$swal({
        title: "Are you sure?",
        text: "You will not be able to recover this file!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, remove it!"
      }).then(result => {
        if (result.isConfirmed) {
          this.$swal("Deleted!", "Your file has been deleted.", "success");
        } else {
          this.$swal("Cancelled", "Your imaginary file is safe :)", "error");
  }
      });
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
}
</style>


