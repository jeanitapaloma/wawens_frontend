<template>
  <div>
      <b-modal v-model="modal" id="modal-tall" hide-header title="WAWEN's UBE HALAYA" hide-footer>
        <br>
        <h3
          style="text-align: center;font-style:Segoe Script;font-size: 28px;color:black"
        >WAWEN's UBE HALAYA</h3>
        <span>
          <p style="text-align: center; color:black ; font-size:15px;">Create your Account.</p>
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
            <input 
            type="text" 
            id="username"
            v-model="form.username" 
            class="form-control" 
            placeholder="Username" 
            :class="{ 'is-invalid': submitted && $v.form.username.$error }"/>
            <div v-if="submitted && !$v.form.username.required" class="invalid-feedback" >Username is required</div>
          </div>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-envelope" style="font-size:20px"></i>
              </span>
            </div>

            <input 
            type="email"
             v-model="form.email" 
             class="form-control" 
             id="email"
             placeholder="Email"
             :class="{ 'is-invalid': submitted && $v.mine.email.$error }" 
             >
             <div v-if="submitted && $v.form.email.$error" class="invalid-feedback">
            <span v-if="!$v.form.email.required">Email is required</span>
            <span v-if="!$v.form.email.email">Email is invalid</span>
          </div>
          </div>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-key" style="font-size:20px"></i>
              </span>
            </div>
            <input
              v-model="form.password"
              id="password"
              class="form-control"
              placeholder="Password"
              :class="{ 'is-invalid': submitted && $v.mine.password.$error }"
              :type="passwordVisible ? 'text' : 'password'"
            >
            <!-- <span class="input-group-text">
              <i class="fa fa-eye" style="font-size:18px"></i>
            </span> -->
            <span class="visibility" tabindex='-1' @click='togglePasswordVisibility' :arial-label='passwordVisible ? "Hide password" : "Show password"'>
              <i class="material-icons">{{ passwordVisible ? "hide" : "show" }}</i>
            </span>

              <div v-if="submitted && $v.form.password.$error" class="invalid-feedback">
                <span v-if="!$v.form.password.required">Password is required</span>
                <span v-if="!$v.form.password.minLength">Weak Password</span>
              </div>
          </div>
          <div class="form-group input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <i class="fa fa-lock" style="font-size:20px"></i>
              </span>
            </div>
            <input
              type="password"
              id="conpassword"
              v-model="form.conpassword"
              class="form-control"
              placeholder="Confirm Password"
              :class="{ 'is-invalid': submitted && $v.mine.conpassword.$error }"
            >
            <!-- <span class="input-group-text">
              <i class="fa fa-eye" style="font-size:18px"></i>
            </span> -->
            <div v-if="submitted && $v.form.conpassword.$error" class="invalid-feedback">
          <span v-if="!$v.form.conpassword.required">Confirm Password is required</span>
          <span v-else-if="!$v.form.conpassword.sameAsPassword">Passwords must match</span>
        </div>
          </div>
          <button @submit="onSubmit">SIGN UP</button><br>
          <center>
            <p style="color:black ; font-size:12px;">
              By clicking Sign Up, you agree to our
              <a
                href="#"
              >Terms & Conditions</a>
            </p>
            <hr style="width:60%;text-align:center;height:px;background-color:black;">
            <p style="color:black ; font-size:12px;">
              Already have an account?
              <a href>Login here</a>
            </p>
            <div>
            </div>
          </center>
        </form>
      </b-modal>
  </div>
</template>
<script>
import { required, email, sameAs } from "vuelidate/lib/validators";
import AUTH from "@/services/auth";
export default {
  data: () => ({
    modal: true,
    auth: AUTH,
    form:{
      username: "",
      email: "",
      password: "",
      conpassword: ""
    },
    passwordVisible: false,
    submitted: false
  }),
  validations: {
    form: {
      username: { required },
      email: { required, email },
      password: {
        required,
        strongPassword(password) {
          return (
            /[a-z]/.test(password) && // checks for a-z
            /[0-9]/.test(password) && // checks for 0-9
            /\W|_/.test(password) && // checks for special char
            password.length >= 6
          );
        }
      },
      conpassword: { required, sameAsPassword: sameAs("password") }
    }
  },
  methods: {
    togglePasswordVisibility () {
			this.passwordVisible = !this.passwordVisible
    },
    onSubmit(evt) {
      evt.preventDefault();
      this.submitted = true;
      if (this.$v.$invalid) {
         AUTH.register(this.form.username,this.form.email,this.form.password,this.form.conpassword)
        return;
      }
      alert("SUCCESS!! :-)" + JSON.stringify(this.form)); 
    }
  }
  
};
</script>

<style scoped>
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
  width: 20%;
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
p{
  font-size: 12px;
}
}
</style>
