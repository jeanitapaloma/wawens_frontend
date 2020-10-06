<template>
  <div>
    <div>
      <b-modal
        v-model="modal"
        class="modal fade text-center"
        id="addProduct"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        title="Add Product"  
        >
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label type="text">*Name of the Product:</label>
              <input class="form-control" id="name">
            </div>
            <div class="row">
              <div class="col">
                <label type="text">*Price:</label>
                <input class="form-control" id="name">
              </div>
              <div class="col">
                <label type="text">*Per:</label>
                <input class="form-control" id="name">
              </div>
            </div>
            <div class="form-group">
              <label type="text">*Images:</label>
              <input class="form-control" id="name">
              <span></span>
            </div>
          </div>
          <div class="col">
            <label type="text">*Description:</label>
            <br>
            <textarea class="form-control" id="comment"></textarea>
          </div>
        </div>
        <template v-slot:modal-footer="{ update, cancel }">
          <button type="button" class="btn1" @click="cancel()">Cancel</button>
          <button type="button" class="btn1" @click="update()">Update</button>
        </template>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
    data: () => ({
    modal: true,
  }),
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
.btn3 {
  background: transparent;
  height: calc(2.5em + 0.75rem + 2px);
  width: 25%;
  font-size: 1rem;
  color: white;
  /* font-size: 16; */
}
.btn1 {
  background: #bb6bd9;
  height: calc(2.5em + 0.75rem + 2px);
  width: 25%;
  color: white;
  font-size: 16;
}
#comment {
  width: 90%;
  height: 88%;
}
</style>
