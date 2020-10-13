<template>
  <div>
    <div>
      <b-modal
        class="modal fade text-center"
        :id="id"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        title="UPDATE PRODUCT"
        centered
        hide-header
      >
        <strong>
          <h1 class="header text-center" style="color:darkviolet;">UPDATE PRODUCT</h1>
          <br>
        </strong>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <label type="text">
                <span style="color:red;">*</span>Name of the Product:
              </label>
              <input class="form-control" id="name">
            </div>

            <div class="row">
              <div class="col">
                <label type="text">
                  <span style="color:red;">*</span>Price:
                </label>
                <input class="form-control" id="name">
              </div>
              <div class="col">
                <label type="text">
                  <span style="color:red;">*</span>Per:
                </label>
                <input class="form-control" id="name">
              </div>
            </div>
            <br>
            <div class="form-group">
              <label type="text">
                <span style="color:red;">*</span>Images:
              </label>
              <b-form-file multiple :file-name-formatter="formatNames" class="form-control"></b-form-file>
            </div>
          </div>
          <div class="col">
            <label type="text">
              <span style="color:red;">*</span>Descriptions:
            </label>
            <br>
            <textarea class="form-control" id="comment"></textarea>
          </div>
        </div>
        <template v-slot:modal-footer="{ ok, cancel }">
          <button type="button" class="btn" @click="cancel()">CANCEL</button>
          <button type="button" class="btn1" @click="ok()">UPDATE</button>
        </template>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {};
  },
  methods: {
    shown() {
      this.$bvModal.show(this.id);
    },
    formatNames(files) {
        return files.length === 1 ? files[0].name : `${files.length} files selected`
      }
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
  /* margin-top: 1%; */
}
.btn {
  background: transparent;
  height: calc(2.5em + 0.75rem + 2px);
  width: 25%;
  font-size: 1rem;
  color: darkviolet;
  height: calc(2.5em + 0.75rem + 2px);
  border: 1px solid darkviolet;
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
.form-control {
  border: 1px solid darkviolet;
  height: calc(2em + 0.75rem + 2px);
}
</style>
