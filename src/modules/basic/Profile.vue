<template>
  <div>
    <b-container class="profile">
      <br>
      <em>Personal Information</em>
      <br>
      <br>
      <b-row>
        <b-col cols="7">
          <div class="form-group">
            <label for="email">EMAIL</label>
            <b-form-input
              required
              type="email"
              class="form-control"
              id="email"
              v-model="email"
              :disabled="!inputEnable"
            ></b-form-input>
          </div>
          <div class="form-group">
            <label for="firtsname" class="bmd-label-floating">FIRST NAME</label>
            <b-form-input
              required
              type="text"
              class="form-control"
              id="firstname"
              v-model="firstname"
              :disabled="!inputEnable"
            ></b-form-input>
          </div>
          <div class="form-group">
            <label for="middlename" class="bmd-label-floating">MIDDLE NAME</label>
            <b-form-input
              required
              type="text"
              class="form-control"
              id="middlename"
              v-model="middlename"
              :disabled="!inputEnable"
            ></b-form-input>
          </div>
          <div class="form-group">
            <label for="lastname" class="bmd-label-floating">LAST NAME</label>
            <b-form-input
              required
              type="text"
              class="form-control"
              id="lastname"
              v-model="lastname"
              :disabled="!inputEnable"
            ></b-form-input>
          </div>
          <b-row>
            <b-col cols="8" sm="6">
              <label for="gender" class="bmd-label-floating">GENDER</label>
              <b-form-input
                required
                type="text"
                class="form-control"
                id="gender"
                v-model="gender"
                :disabled="!inputEnable"
              ></b-form-input>
            </b-col>
            <b-col cols="4" sm="6">
              <label for="contact" class="bmd-label-floating">CONTACT</label>
              <b-form-input
                required
                type="text"
                class="form-control"
                id="contact"
                v-model="contact"
                :disabled="!inputEnable"
              ></b-form-input>
            </b-col>
          </b-row>
          <br>
          <div class="form-group">
            <label for="address" class="bmd-label-floating">ADDRESS</label>
            <b-form-input
              required
              type="text"
              class="form-control"
              id="address"
              v-model="address"
              :disabled="!inputEnable"
            ></b-form-input>
          </div>
          <br>
          <center>
            <b-button v-show="show" v-on:click="update" id="btn">UPDATE</b-button>
            <b-button v-show="!show" v-on:click="save" id="btn">SAVE CHANGES</b-button>&nbsp;
            <b-button v-show="!show" id="btn">CANCEL</b-button>
          </center>
        </b-col>

        <b-col cols="5">
          <b-img
            style="cursor: pointer"
            thumbnail
            flui
            v-b-tooltip.hover.top
            title="Change your Avatar"
            id="userIcon"
            src="require('~@/assets/wallpaper.png')"
            @click="$refs.file.click()"
          ></b-img>
          <div>
            <span>
              <input
                type="file"
                id="file"
                @change="handleFileUpload()"
                ref="file"
                style="display:none"
              >
            </span>
            <br>
            <br>
            <label for="username" class="bmd-label-floating">USERNAME:</label>
            <br>
            <span>
              <strong>{{username}}</strong>
            </span>
            <br>
            <center>
              <b-button v-show="show" v-on:click="change" id="btn1">CHANGE PASSWORD</b-button>
              <div v-show="!show">
                <div class="form-group">
                  <label for="currentPassword" class="bmd-label-floating">*CURRENT PASSWORD:</label>
                  <b-form-input
                    type="text"
                    class="form-control"
                    id="password"
                    v-model="password"
                  ></b-form-input>
                </div>
                <div class="form-group">
                  <label for="newPassword" class="bmd-label-floating">*NEW PASSWORD:</label>
                  <b-form-input
                    type="text"
                    class="form-control"
                    id="newPassword"
                    v-model="newPassword"
                  ></b-form-input>
                </div>
                <div class="form-group">
                  <label for="confirmPassword" class="bmd-label-floating">*CONFIRM PASSWORD:</label>
                  <b-form-input
                    type="text"
                    class="form-control"
                    id="confirmPassword"
                    v-model="confirmPassword"
                  ></b-form-input>
                </div>
                <br>
                <b-button id="btn">CANCEL</b-button>&nbsp;
                <b-button v-on:click="save" id="btn">SAVE</b-button>
              </div>
            </center>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      file: "",
      email: "",
      firstname: "",
      middlename: "",
      lastname: "",
      gender: "",
      contact: "",
      address: "",
      username: "",
      inputEnableA: false,
      show: true
    };
  },
  methods: {
    update() {
      this.inputEnable = true;
      this.show = false;
    },
    change() {
      this.inputEnable = true;
      this.show = false;
    }
  }
};
</script>

<style scoped>
#userIcon {
  width: 60%;
  height: 30%;
  margin-left: 20%;
  margin-right: 15%;
  margin-top: 10px;
  overflow: hidden;
}
.form-control {
  display: block;
  width: 100%;
  font-size: 18px;
  height: 40px;
  border: 1px solid #bb6bd9;
  color: black;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
em {
  color: #bb6bd9;
  font-size: 30px;
  font-family: Segoe Script;
  text-align: center;
  margin-top: 12%;
}
.mt-4 {
  border-color: #bb6bd9;
}
.img-thumbnail {
  border: 1px solid #bb6bd9;
}
.form-control {
  border: 1px solid #bb6bd9;
}
.btn-outline-primary {
  color: #bb6bd9;
  border-color: #bb6bd9;
}

#button {
  background-color: transparent;
}
.border {
  border-color: #bb6bd9;
  border-radius: 0.25rem;
}

#btn1 {
  background: #bb6bd9;
  height: calc(2.5em + 0.75rem + 2px);
  width: 40%;
  font-size: 1rem;
  font-size: 16;
}
#btn {
  background: #bb6bd9;
  height: calc(2.5em + 0.75rem + 2px);
  width: 30%;
  font-size: 1rem;
  font-size: 16;
}
@media (min-width: 992px) {
  .container,
  .container-sm,
  .container-md,
  container-lg {
    margin-top: 8px;
    margin-left: 10%;
    margin-bottom: 5%;
  }
}
/* :disabled="!inputEnable" */
</style>

