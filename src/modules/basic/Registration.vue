<template>
  <div class="container p-3 my-3">
    <div class="inner">
      <form @submit="onSubmit" v-if="show">
        <h3>WAWEN's UBE HALAYA</h3>
        <div class="row">
          <div class="col">
            <a href class="btn btn-block btn-social btn-facebook">
              <strong>
                <i class="fa fa-facebook-official" style="font-size:33px;color:blue"> &nbsp;</i> Sign Up with FACEBOOK
              </strong>
            </a>
          </div>
        </div>
        <p class="divider-text">
          <span class="bg-light">OR</span>
        </p>
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-user"></i>
            </span>
          </div>
          <input
            type="username"
            v-model="form.username"
            placeholder="Username"
            required
            class="form-control"
          >
        </div>
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-envelope"></i>
            </span>
          </div>
          <input
            type="email"
            v-model="form.email"
            placeholder="Email"
            required
            class="form-control"
          >
        </div>
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-key"></i>
            </span>
          </div>
          <input
            type="password"
            v-model="form.password"
            placeholder="Password"
            required
            class="form-control"
          >
        </div>
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-lock"></i>
            </span>
          </div>
          <input
            type="password"
            v-model="form.conpassword"
            placeholder="Confirm Password"
            required
            class="form-control"
          >
        </div>
        <button>Sign Up</button>
        <center>
            <p>
              By clicking Sign Up, you agree to our
              <a
                href="#"
                v-b-modal.modal-scrollable
                @click="show=true"
              >Terms & Conditions</a>
            </p>
             <p>Already have an account?
          <a href>Login here</a></p>
            <div>
              <b-modal
                scrollable
                title="Our Terms and Conditions"
                id="modal-scrollable"
                v-model="hide"
              >
                <b>Wawens Ube halaya Terms of Service ("Agreement")</b>
                <p>
                  This Agreement was last modified on December 25 ,2020.
                  Please read these Terms of Service completely using ubehalaya.com which is owned and operated by UbeHalaya. This Agreement documents the legally binding terms and conditions attached to the use of the Site at ubehalaya.com.
                  By using or accessing the Site in any way, viewing or browsing the Site, or adding your own content to the Site, you are agreeing to be bound by these Terms of Service.
                </p>
                <template v-slot:modal-footer>
                  <div class="w-100">
                    <b-button
                      id="modal"
                      size="sm"
                      class="float-right"
                      @click="show=false"
                      v-on:click="Terms"
                    >OK</b-button>
                  </div>
                </template>
              </b-modal>
            </div>
        </center>
         
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        conpassword: ""
      },
      show: true,
      submitted: false,
    };
  },
  methods: {
    Terms: function() {
      console.log(
        "{Ajoc is beautiful}"
    )},
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      this.form.username = "";
      this.form.email = "";
      this.form.password = "";
      this.form.conpassword = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
<style>
.divider-text {
  position: relative;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
}
.divider-text span {
  padding: 7px;
  font-size: 12px;
  position: relative;
  z-index: 2;
  border-color: violet;
}
.divider-text:after {
  content: "";
  position: absolute;
  width: 100%;
  border-bottom: 1px solid darkviolet;
  top: 55%;
  left: 0;
  z-index: 1;
}
.btn-facebook {
  font-family: "Muli-Regular";
  color: #333;
  border: 1px solid darkviolet;
}
strong {
  font-size: 18px;
}
body {
  font-family: "Muli-Regular";
  color: #666;
  font-size: 18px;
  margin: 0;
}
input,
textarea,
select,
button {
  font-family: "Muli-Regular";
  color: black;
  font-size: 20px;
}

.inner {
  margin-left: 25%;
  margin-right: 25%;
  padding-top: 5%;
  padding-bottom: 48px;
  background: transparent;
}
.inner h3 {
  text-transform: uppercase;
  font-size: 28px;
  font-family: "Muli-Bold";
  text-align: center;
  margin-bottom: 35px;
  color: #333;
  letter-spacing: 2px;
}
form {
  width: 90%;
  padding-left: 20px;
}
.form-control {
  border: 1px solid darkviolet;
  width: 150%;
  height: 40px;
  padding: 0 10px;
  font-family: "Muli-Bold";
  background: none;
  font-size: 20px;
}
button {
  width: 152px;
  height: 40px;
  margin: auto;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: #bb6bd9;
  font-size: 13px;
  color: black;
  text-transform: uppercase;
  font-family: "Muli-SemiBold";
  border-radius: 20px;
}
@media (max-width: 767px) {
  .inner {
    min-width: auto;
    background: none;
    padding-top: 0;
    padding-bottom: 0;
  }
}
</style>
