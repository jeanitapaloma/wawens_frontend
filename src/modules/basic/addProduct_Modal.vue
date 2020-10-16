<template>
  <div>
    <div>
      <b-modal
        hide-backdrop content-class="shadow" 
        class="modal fade text-center"
        id="addProduct"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        title="ADD PRODUCT"
        centered
        hide-header
      >
        <strong>
          <h1 class="header text-center" style="color:darkviolet;">ADD PRODUCT</h1>
          <br>
        </strong>
        <div class="row">
          <div class="col">
            <div class="form-group"  style="font-size:13px;">
              <label type="text">
                <span style="color:red;">*</span>Name of the Product:
              </label>
              <input class="form-control" id="name">
            </div>
            <div class="form-group">
              <label type="text"   style="font-size:13px;">
                <span style="color:red;">*</span>Category:
                <span>
                  <i
                    class="fa fa-plus-square-o"
                    style="font-size:18px;margin-left:138px;color:darkviolet;"
                    v-on:click="swap"
                    v-on:submit.prevent="addNewTodo"
                  ></i>
                </span>
              </label>

              <b-form-input
                id="addCategory"
                class="form-control"
                v-show="show"
                placeholder="Type new category here.."
              ></b-form-input>

              <b-form-select
                class="form-control"
                v-show="!show"
                v-model="selected"
                :options="options"
                style="font-size:12px; color:black;"
              >
              <template v-slot:first>
                <b-form-select-option :value="null" disabled style="font-size:12px; color:black;">-- Please select your option --</b-form-select-option>
              </template>
              </b-form-select>
              <!-- <select v-show="!show" id="inputState" class="form-control">
                <option selected>Ube Halaya</option>
                <option>Ube Cake</option>
                <option>Ube Ubechi</option>
              </select>-->
            </div>
            <div class="row">
              <div class="col">
                <label type="text"  style="font-size:13px;">
                  <span style="color:red;">*</span>Price:
                </label>
                <input class="form-control" id="name">
              </div>
              <div class="col"> 
                <label type="text"  style="font-size:13px;">
                  <span style="color:red;">*</span>Per:
                </label>
                <input class="form-control" id="name">
              </div>
            </div>
            <br>
            <div class="form-group" >
              <label type="text"  style="font-size:13px;">
                <span style="color:red;">*</span>Images:
              </label>
              <div class="input-group">
                <input type="text" class="form-control1">
                <div class="input-group-btn">
                  <button
                    type="file"
                    id="file"
                    ref="file"
                    v-on:change="handleFileUpload()"
                  >Upload Image</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <label type="text"  style="font-size:13px;">
              <span style="color:red;">*</span>Descriptions:
            </label>
            <br>
            <textarea class="form-control" id="comment"></textarea>
          </div>
        </div>
        <template v-slot:modal-footer="{ ok, cancel }">
          <button type="button" class="btn" @click="cancel()">CANCEL</button>
          <button type="button" class="btn1" @click="ok()">SUBMIT</button>
        </template>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      selected: null,
      options: [
        { id: 1, text: "Ube Halaya" },
        { id: 2, text: "Ube Ubechi" },
        { id: 3, text: "Ube Cake" }
      ]
    };
  },
  methods: {
    addNewTodo: function() {
      this.options.push({
        id: this.selected++,
        text: this.selected.text
      });
      this.selected = "";
    },

    shown() {
      this.$bvModal.show("addProduct");
    },
    swap() {
      this.show = false;
      this.addCategory;
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    }
  }
};
</script>
<style scoped>

#file {
  background: lightgrey;
  height: calc(2em + 0.75rem + 2px);
  min-width: 75px;
  font-size: 1rem;
  color: darkviolet;
  border: 1px solid darkviolet;
  font-weight:bold;
}
.btn {
  background: transparent;
  height: calc(2.5em + 0.75rem + 2px);
  width: 25%;
  font-size: 1rem;
  color: darkviolet;
  height: calc(2.5em + 0.75rem + 2px);
  border: 1px solid darkviolet;
  font-weight:bold;
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
.form-control1 {
  border: 1px solid darkviolet;
  height: calc(2em + 0.75rem + 2px);
  width: 150px;
}
</style>
