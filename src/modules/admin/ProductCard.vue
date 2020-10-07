<template>
  <div>
    <b-col>
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
    <update-product-modal ref="updateModal"/>
  </div>
</template>

<script>
import updateProductModal from "../basic/UpdateProduct_Modal";
export default {
  components: {
    updateProductModal
  },
  props: ["item"],
  data: () => ({}),
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
    updatemodal() {
      this.$refs.updateModal.shown();
    }
  }
};
</script>

<style>
</style>