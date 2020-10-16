  <template>
  <div>
    <b-col>
      <div class="card-header text-center" id="card1" style="font-weight:bold;font-size:15px;">{{item.text}}</div>
      <b-card  
        :img-src="require(`@/assets/${item.img}`)"
        img-alt="Image"
        img-top
        img-height="150px"
        class="mb-5"
      >
        <p style="color:darkviolet;font-size:12px;">Price : {{item.price}}/ {{item.type}}</p>
        <div>
          <button v-show="show" class="button" v-b-toggle="'collapse-' + (id +1)" style="color:white;font-size:12px;">View More</button>
          <b-collapse :id="`collapse-${id+1}`" >
            <div class="card card-body">
              <p>{{item.desription}}</p>
              <div class="row">
                <div class="col">
                  <button class="btn" @click="update" style="font-size:10px;font-weight:bold;">UPDATE</button>
                </div>
                <div class="col">
                  <button class="btn" @click="showAlert" style="font-size:10px;font-weight:bold;">REMOVE</button>
                </div>
              </div>
            </div>
            <button  class="button" v-b-toggle="'collapse-' + (id +1)" style="color:white;font-size:12px;">View Less</button>
          </b-collapse>
        </div>
      </b-card>
    </b-col>
    <update-product-modal :id="id" ref="updateModal"/>
  </div>
</template>

<script>
import updateProductModal from "../basic/UpdateProduct_Modal";
export default {
  components: {
    updateProductModal
  },
  props: ["item","id"],
  data: () => ({
    show:true,

  }),
  methods: {
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
    },
    update() {
      this.$refs.updateModal.shown();
    }
  }
};
</script>
<style scoped>

#card1 {
  color: darkviolet;
}
.btn {
  /* background: #bb6bd9; */
  border: 1px solid#bb6bd9;
  height: calc(1.5em + 0.75rem + 2px);
  width: 110%;
  font-size: 1rem;
  color: black;
  border-radius: 4px;
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
.button1 {
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
  text-align: center;
  font-weight: bold;
}
</style>
