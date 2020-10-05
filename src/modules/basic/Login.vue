<template>
  <div>
    <div>
      <b-modal v-model="modal" id="modal-tall" hide-header title="WAWEN's UBE HALAYA" hide-footer>
        <br>
        <h3
          style="text-align: center;font-style:Segoe Script;font-size: 28px;color:black"
        >WAWEN's UBE HALAYA</h3>
        <span>
          <p style="text-align: center; color:black">Sign in to your Account.</p>
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
                <i class="fa fa-envelope" style="font-size:20px"></i>
              </span>
            </div>

            <input type="email" v-model="form.email" class="form-control" name="email" placeholder="Email" required>
          </div>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-key" style="font-size:20px"></i>
              </span>
            </div>
            <input
              name="password"
              type="password"
              v-model="form.password"
              class="form-control"
              placeholder="Password"
              required
            >
            <span class="input-group-text">
              <i class="fa fa-eye" style="font-size:18px"></i>
            </span>
          </div>
          <button @submit="onSubmit" name="submit">LOGIN</button>
          <br>
          <p class="text-center">
            <a href>Forgot Password?</a>
            <br>Don't have yet an account?
            <a v-on:click="redirect('/register')">Sign Up</a>
          </p>

          <br>
        </form>
      </b-modal>
    </div>
  </div>
</template>

<script>
import AUTH from "@/services/auth";
export default {
 data: () => ({
    modal: true,
    auth: AUTH,
    form:{
      email: "",
      password: "",
    },
  }),
  methods:{
    onSubmit(evt) {
      evt.preventDefault();
      AUTH.login(this.form.email, this.form.password);
  }
},
mounted(){
  this.$http.post('api/users').then(res => console.log(res)).catch(err => console.log(err));
  
}
}
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
