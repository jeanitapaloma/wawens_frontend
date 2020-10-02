<template>
  <div>
    <div>
      <b-modal v-model="modal" id="modal-tall" hide-header title="WAWEN's UBE HALAYA" hide-footer>
        <br>
        <h3
          style="text-align: center;font-style:Segoe Script;font-size: 28px;color:black"
        >WAWEN's UBE HALAYA</h3>
        <span>
          <p style="text-align: center; color:black">Create your Account.</p>
        </span>
        <div class="row">
          <div class="col">
            <b-row>
              <b-col cols="6" sm="6">
                <a href class="btn btn-block btn-social btn-google">
                  <strong>
                    <i class="fa fa-google" style="font-size:30px">&nbsp;</i> Sign Up with Google
                  </strong>
                </a>
              </b-col>
              <b-col cols="6" sm="6">
                <a href class="btn btn-block btn-social btn-facebook">
                  <strong>
                    <i class="fa fa-facebook-official" style="font-size:30px;color:blue">&nbsp;</i> Sign Up with Facebook
                  </strong>
                </a>
              </b-col>
            </b-row>
          </div>
        </div>
        <p class="divider-text">
          <span class="bg-light">OR</span>
        </p>
        <form>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-user" style="font-size:20px"></i>
              </span>
            </div>
            <input type="text" v-model="user" class="form-control" placeholder="Username" required>
          </div>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-envelope" style="font-size:20px"></i>
              </span>
            </div>

            <input type="email" v-model="email" class="form-control" placeholder="Email" required>
          </div>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-key" style="font-size:20px"></i>
              </span>
            </div>
            <input
              type="password"
              v-model="password"
              class="form-control"
              placeholder="Password"
              required
            >
            <span class="input-group-text">
              <i class="fa fa-eye" style="font-size:18px"></i>
            </span>
          </div>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-lock" style="font-size:20px"></i>
              </span>
            </div>
            <input
              type="password"
              v-model="conpassword"
              class="form-control"
              placeholder="Confirm Password"
              required
            >
            <span class="input-group-text">
              <i class="fa fa-eye" style="font-size:18px"></i>
            </span>
          </div>
          <button>SIGN UP</button>
          <center>
            <p>
              By clicking Sign Up, you agree to our
              <a
                href="#"
                v-b-modal.modal-scrollable
                @click="show=true"
              >Terms & Conditions</a>
            </p>
            <hr style="width:60%;text-align:center;height:px;background-color:black;">
            <p>
              Already have an account?
              <a href>Login here</a>
            </p>
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
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    modal: true,
    user: "",
    email: "",
    password: "",
    conpassword: ""
  })
};
</script>

<style>
.fa-eye-slash {
  font-size: 20px;
}
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
  border: 1px solid darkviolet;
  top: 55%;
  left: 0;
  z-index: 1;
}

.btn-facebook {
  font-family: "Muli-Regular";
  color: #333;
  border: 1px solid darkviolet;
}
.btn-google {
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
}
input,
textarea,
select,
button {
  font-family: "Muli-Regular";
  color: #333;
  font-size: 30%;
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
  width: 155px;
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
  font-family: "Muli-SemiBold";
  border-radius: 5px;
}
i {
  height: 20px;
  width: 20px;
}
@media (max-width: 991px) {
  .inner {
    min-width: 768px;
  }
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
