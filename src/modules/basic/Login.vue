<template>
  <div class="container p-3 my-3">
    <div class="inner">
      <form action @submit="onSubmit" v-if="show">
        <h3>WAWEN's UBE HALAYA</h3>
        <div class="row">
          <div class="col">
            <a href class="btn btn-block btn-facebook">
              <i class="fa fa-facebook"></i>
              <strong>&nbsp;Log in with FACEBOOK</strong>
            </a>
          </div>
        </div>
        <br>
        <p class="divider-text">
          <span class="bg-light">OR</span>
        </p>
        <br>
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-envelope"></i>
            </span>
          </div>
          <input type="email" v-model="form.email" placeholder="Email" required class="form-control">
        </div>
  <br>
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-key"></i>
            </span>
          </div>
          <input type="password" v-model="form.password" placeholder="Password" required class="form-control">
        </div>
        <br>
        <button>LOGIN</button>
        <br>
        <p class="text-center">
          <a href>Forgot Password?</a>
          <br>Don't have yet an account?
          <a href>Sign Up</a>
        </p>

        <br>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.password = "";
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
  border: 1px solid darkviolet;
  top: 55%;
  left: 0;
  z-index: 1;
}
.fa fa-facebook {
  height: 30px;
}
fa fa-key {
  height: 30px;

}

.btn-facebook {
  color: black;
  height: 40px;
  font-family: "Muli-Regular";
  font-size: 16px;
  justify-content: center;
  color: #333;
   border: 1px solid darkviolet;
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
  font-size: 30%;
}
.inner {
  width: 900px;
  margin-left: 300px;
  padding-top: 120px;
  padding-bottom: 50px;
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
  border: 1px solid darkviolet;
  width: 100%;
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
  border-radius: 20px;
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
