<template>
  <div>
    <div>
      <b-modal
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
            <div class="form-group">
              <label type="text">
                <span style="color:red;">*</span>Name of the Product:
              </label>
              <input class="form-control" id="name">
            </div>
            <div class="form-group">
              <label type="text">
                <span style="color:red;">*</span>Category:
                <span>
                  <i
                    class="fa fa-plus-square-o"
                    style="font-size:18px;margin-left:150px;color:darkviolet;"
                    v-on:click="swap"
                  ></i>
                </span>
              </label>

              <b-form-input
                class="form-control"
                v-show="show"
                placeholder="Type new category here.."
              ></b-form-input>

              <!-- fa fa-calendar-plus-o -->
              <select v-show="!show" id="inputState" class="form-control">
                <option selected>Ube Halaya</option>
                <option>Ube Cake</option>
                <option>Ube Ubechi</option>
              </select>
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
              <div class="input-group">
                <input type="text" class="form-control1" >
                <div class="input-group-btn">
                  <button  type="file" id="file" ref="file" v-on:change="handleFileUpload()">
                   Upload Image
                  </button>
                </div>
              </div>
              <!-- <label type="text">
                <span style="color:red;">*</span>Images:
              </label>
              <input class="form-control" id="form-control">
              <div class="input-group-btn">
                <button>
                    <i class="fa fa-file-image-o" style="height: calc(2em + 0.75rem + 2px);"></i>
                </button>
              </div>-->
              <!-- <input type="file" id="file" ref="file" placeholder="Choose a file..." v-on:change="handleFileUpload()"/> -->
              <!-- <b-form-file multiple :file-name-formatter="formatNames" class="form-control"></b-form-file> -->
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
      show: true
    };
  },
  methods: {
    shown() {
      this.$bvModal.show("addProduct");
    },
    swap() {
      this.show = false;
    },
    formatNames(files) {
      return files.length === 1
        ? files[0].name
        : `${files.length} files selected`;
    },
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
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
#file{
  background: lightgrey;
  height: calc(2em + 0.75rem + 2px);
  min-width:  75px;
  font-size: 1rem;
  color: darkviolet;
  border:1px solid darkviolet;
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
.form-control1 {
  border: 1px solid darkviolet;
  height: calc(2em + 0.75rem + 2px);
  width:  150px;
}
</style>
