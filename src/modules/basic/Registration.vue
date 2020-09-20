<template>
  <div class="container p-3 my-3">
    <div class="inner">
      <form>
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
          <input type="text" class="form-control">
        </div>
        <div class="form-wrapper">
          <label for>Email</label>
          <input type="text" class="form-control">
        </div>
        <div class="form-wrapper">
          <label for>Password</label>
          <input type="password" class="form-control">
        </div>
        <div class="form-wrapper">
          <label for>Confirm Password</label>
          <input type="password" class="form-control">
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
  /* border: 1px solid #ccc; */
  top: 55%;
  left: 0;
  z-index: 1;
}

.btn-facebook {
  /* background-color: blue; */
  color: black;
  /* border-color: blue; */
  height: 40px;
  font-family: "Muli-Regular";
  color: #333;
  /* font-size: 30px; */
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
  font-size: 30px;
}

.wrapper {
  min-height: 100vh;
  position: relative;
  background-size: cover;
  margin-right: 1000px;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
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
  font-size: 20px;
  font-family: "Muli-Bold";
  text-align: center;
  margin-bottom: 10px;
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

select {
  -moz-appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
  padding-left: 20px;
}
select option[value=""][disabled] {
  display: none;
}

button {
  border: none;
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
.checkbox {
  position: relative;
}
.checkbox label {
  padding-left: 22px;
  cursor: pointer;
}
.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.checkbox input:checked ~ .checkmark:after {
  display: block;
}

.checkmark {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 12px;
  width: 13px;
  border-radius: 2px;
  background-color: #ebebeb;
  border: 1px solid #ccc;
  font-family: Material-Design-Iconic-Font;
  color: #000;
  font-size: 10px;
  font-weight: bolder;
}
.checkmark:after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  content: "\f26b";
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

  form {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
  }
}

/*# sourceMappingURL=style.css.map */
</style>
