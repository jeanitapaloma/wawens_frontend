<template>
  <div>
    <h1>Personal Information</h1>
    <b-container class="profile">
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
              :disabled="!inputEnable || show"
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
              :disabled="!inputEnable || show"
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
              :disabled="!inputEnable || show"
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
              :disabled="!inputEnable || show"
            ></b-form-input>
          </div>
          <b-row>
            <b-col cols="6" sm="6">
              <label for="gender" class="bmd-label-floating">GENDER</label>
              <b-form-input
                required
                type="text"
                class="form-control"
                id="gender"
                v-model="gender"
                :disabled="!inputEnable || show"
              ></b-form-input>
            </b-col>
            <b-col cols="6" sm="6">
              <label for="contact" class="bmd-label-floating">CONTACT</label>
              <b-form-input
                required
                type="text"
                class="form-control"
                id="contact"
                v-model="contact"
                :disabled="!inputEnable || show"
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
              :disabled="!inputEnable || show"
            ></b-form-input>
          </div>
          <center>
            <br>
            <b-button v-show="show" v-on:click="update" id="btn" >UPDATE</b-button>
            <b-button v-show="!show" id="btn">CANCEL</b-button>&nbsp;
            <b-button v-show="!show" id="btn">SAVE CHANGES</b-button>
          </center>
          <br>
          <!-- v-on:click="save" -->
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
              <b-button v-show="isChangeClicked" v-on:click="change" id="btn">CHANGE PASSWORD</b-button>
              <div v-show="!isChangeClicked">
                <div class="form-group">
                  <label for="currentPassword" class="bmd-label-floating">*CURRENT PASSWORD:</label>
                  <b-form-input type="text" class="form-control" id="password" v-model="password"></b-form-input>
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
                <b-button id="btn">SAVE</b-button>
                <br>
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
      password: "",
      newPassword: "",
      confirmPassword: "",
      currentPassword: "",
      inputEnable: false,
      show: true,
      isChangeClicked: true
    };
  },
  methods: {
    update() {
      this.inputEnable = true;
      this.show = false;
    },
    change() {
      this.inputEnable = true;
      this.isChangeClicked = false;
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
h1 {
  color: darkviolet;
  font-size: 30px;
  font-family: Segoe Script;
  margin-top: 6%;
  margin-left: 8%;
}

.img-thumbnail {
  border: 1px solid #bb6bd9;
  border-color: #bb6bd9;
}
#btn {
  background: #bb6bd9;
  height: calc(2.5em + 0.75rem + 2px);
  width: 30%;
  font-size: 1rem;
  font-size: 16;
}
.profile{
  border: 1px solid #bb6bd9;
  background-color: #fce9fc;
}
/* @media (min-width: 992px) {
  .container,
  .container-sm,
  .container-md,
  container-lg {
    margin-left: 10%;
    margin-bottom: 5%;
    border: 1px solid #bb6bd9;
  }
} */
</style>

