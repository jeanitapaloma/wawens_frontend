<template>
  <div class="container p-3 my-3">
    <div class="inner">
      <form @submit="onSubmit" v-if="show">
        <h3>WAWEN's UBE HALAYA</h3>
        <div class="row">
          <div class="col">
            <a href class="btn btn-block btn-social btn-facebook">
              <i class="fa fa-facebook"></i>
              <strong>&nbsp;Sign Up with FACEBOOK</strong>
            </a>
          </div>
        </div>
        <p class="divider-text">
          <span class="bg-light">OR</span>
        </p>
        <div class="form-wrapper">
          <label for>Username</label>
          <input type="text"
           v-model="form.username" 
           required class="form-control">
        </div>

        <div class="form-wrapper">
          <label for>Email</label>
          <input type="email" 
          v-model="form.email" 
          required class="form-control">
        </div>

        <div class="form-wrapper">
          <label for>Password</label>
          <input type="password" 
          v-model="form.password" 
          required class="form-control">
        </div>

        <div class="form-wrapper">
          <label for>Confirm Password</label>
          <input type="password" 
          v-model="form.conpassword" 
          required class="form-control">
        </div>
        
        <button>Sign Up</button>
        <p class="text-center">
          By signing up these you agree to our
          <a href>Term</a> and
          <a href>Policy</a>
          <br>Already have an account?
          <a href>Login here</a>
        </p>
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
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
     
        this.$http.post('/register',{
          username: this.form.username,
          email : this.form.email,
          password : this.form.password
        }).then((res)=>{
          // Redirect to homepage
          console.log(res);
          
        })
       
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.username = "";
      this.form.email = "";
      this.form.password = "";
      this.form.conpassword = "";
      // Trick to reset/clear native browser form validation state
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
  border-bottom: 1px solid #ccc;
  top: 55%;
  left: 0;
  z-index: 1;
}

.btn-facebook {
  color: black;
  height: 40px;
  font-family: "Muli-Regular";
  color: #333;
  border: 1px solid #ccc;
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
  color: #333;
  font-size: 20px;
}

.inner {
  width: 900px;
  margin-left: 300px;
  padding-top: 100px;
  padding-bottom: 48px;
  background-color: transparent;
}
.inner h3 {
  text-transform: uppercase;
  font-size: 30px;
  font-family: "Muli-Bold";
  text-align: center;
  margin-bottom: 35px;
  color: #333;
  letter-spacing: 2px;
}


form {
  width: 50%;
  padding-left: 20px;
}

.form-control {
  border: 1px solid #ccc;
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-radius: 20px;
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
  color: #fff;
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

/*# sourceMappingURL=style.css.map */
</style>
