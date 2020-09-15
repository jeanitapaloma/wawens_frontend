<template>
  <div class="card bg-light">
    <article class="card-body mx-auto" style="width: 500px; height:800px;
padding-top: 70px;">
      <v-img src="../assets/logo.png" id="logo" max-height="80" max-width="80" centered contain/>
      <br>
      <a class="btn btn-block btn-social btn-twitter">
        <span class="fa fa-google"></span>
        <strong>Sign Up with GOOGLE</strong>
      </a>
      <a href class="btn btn-block btn-social btn-facebook">
        <i class="fa fa-facebook"></i>
        <strong>Sign Up with FACEBOOK</strong>
      </a>
      <p class="divider-text">
        <span class="bg-light">OR</span>
      </p>
      <form>
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-envelope"></i>
            </span>
          </div>
          <input name class="form-control" placeholder="Email address" type="email">
        </div>
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-key"></i>
            </span>
          </div>
          <input class="form-control" placeholder="Create password" type="password">
        </div>
        <!-- form-group// -->
        <div class="form-group input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <i class="fa fa-lock"></i>
            </span>
          </div>
          <input class="form-control" placeholder="Confirm password" type="password">
        </div>
        <!-- form-group// -->
        <div class="form-group">
          <button id="create" type="submit" class="btn btn-primary">SIGN UP</button>
        </div>
        <!-- form-group// -->
        <p class="text-center">
          By signing up these you agree to our
          <a href>Term</a> and
          <a href>Policy</a>
          <br>Already have an account?
          <a href>Login here</a>
          <br>
        </p>
      </form>
    </article>
  </div>
  <!-- card.// -->
</template>
<script>
</script>
<style>
#create {
  width: 110px;
  background-color: #7b0eaa;
  color: white;
  margin-left: 180px;
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
  border-bottom: 1px solid violet;
  top: 55%;
  left: 0;
  z-index: 1;
}

.btn-facebook {
  background-color: rgb(55, 55, 187);
  color: #fff;
  border-color: lightblue;
}
.btn-twitter {
  background-color: whitesmoke;
  color: #fff;
  border-color: darkviolet;
}
.form-control {
  border-color: darkviolet;
}
.fa {
  border-color: darkviolet;
}
#logo {
  margin-left: 200px;
}
</style>