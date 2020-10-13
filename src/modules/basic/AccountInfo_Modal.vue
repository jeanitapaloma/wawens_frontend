<template>
  <div>
    <div>
      <b-modal id="modal-center" centered title="BootstrapVue" hide-header>
        <div class="body">
          <strong>
            <h1 class="header text-center" style="color:darkviolet;">ACCOUNT INFORMATION</h1>
          </strong>
          <br>
          <br>

          <div class="container">
            <b-row>
              <b-col cols="4" lg="4">
                <b-img
                  :src="require('@/assets/clark.png')"
                  square="square"
                  alt="Square image"
                  id="userIcon"
                  width="180"
                  height="180"
                ></b-img>
                <p class="text" style="font-weight:bold;margin-left:50px;">ADMIN</p>
              </b-col>
              <b-col cols="4">
                <div class="col">
                  <div class="box-info">EMAIL:</div>
                  <br>
                  <div class="box-info">FIRTS NAME:</div>
                  <br>
                  <div class="box-info">MIDDLE NAME:</div>
                  <br>
                  <div class="box-info">LAST NAME:</div>
                  <br>
                  <div class="box-info">GENDER:</div>
                  <br>
                  <div class="box-info">CONTACT:</div>
                  <br>
                  <div class="box-info">ADDRESS:</div>
                  <br>
                </div>
              </b-col>
            </b-row>
          </div>
        </div>
         <template v-slot:modal-footer="{ close }">
          <button type="button" class="btn" @click="close()" style="color:darkviolet;font-size:15px;">CLOSE</button>
        </template>
      </b-modal>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      info:{
        // email,
        // fname,
        // lname,
        // mname,
        // gender,
        // contact,
        // address
      }
    };
  },
  methods: {
    shown() {
      this.$bvModal.show("modal-center");
    }
  }
};
</script>
<style scoped>
#userIcon {
  border-radius: 5px;
  /* margin-left: 300px; */
  text-align: center;
}
.box-info {
  color: black;
  border: 1px solid darkviolet;
  /* text-align: center; */
  font-weight: bold;
  font-size: 12px;
  
}
.header {
  font-size: 20px;
}

</style>
