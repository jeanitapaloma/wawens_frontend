<template>
  <footer class="footer-distributed">
    <div class="footer-left">
      <p class="footer-company-about">
        <span>CONTACT INFORMATION:</span>
        <strong>Phone:</strong> +63 945 380 8056
        <br>
        <strong>Email:</strong> owner@wawenubehalaya.com
        <br>
      </p>
    </div>

    <div class="footer-center">
      <p class="footer-company-about">
        <span>
          <strong>FOLLOW US:</strong>
        </span>
        <i class="fa fa-facebook"></i>
        <i class="fa fa-youtube"></i>

        <br>
        <br>
        <strong>©2020 UBE HALAYA CEBU-Wawen's Ube Halaya</strong>
        <br>
        <br>
      </p>
    </div>

    <div class="footer-right">
      <p class="footer-company-about">
        <span>LOCATION:</span>
        <br>Cebu City, Cebu, Philippines 6000
        <br>
        <br>
        <strong>
          TERMS & CONDITIONS PRIVACY POLICY
          <br>
        </strong>
      </p>
    </div>
  </footer>
</template>

<script>
</script>
<style>
@import url(
  https://fonts.googleapis.com/css?family=Open+Sans:400,500,300,700);

* {
  font-family: Open Sans;
}

.footer-distributed {
  background: transparent;
  box-shadow: 0 0px 0px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 105%;
  text-align: left;
  font: bold 18px sans-serif;
  padding: 40px 35px;
  position: fixed;
  bottom: 0;
  height: 30%;
}

.footer-distributed .footer-left,
.footer-distributed .footer-center,
.footer-distributed .footer-right {
  display: inline-block;
  vertical-align: top;
}


.footer-distributed .footer-left {
  width: 40%;
}

.footer-distributed .footer-company-name {
  color: #222;
  font-size: 18px;
  font-weight: normal;
  margin: 2;
  display: flex;
  align-content: center;
}

/* Footer Center */

.footer-distributed .footer-center {
  width: 35%;
}

.footer-distributed .footer-center i {
  background-color: darkviolet;
  color: white;
  font-weight: bold;
  font-size: 25px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 42px;
  margin: 10px 15px;
  vertical-align: middle;
}

.footer-distributed .footer-center p {
  display: inline-block;
  color: black;
  font-weight: 400;
  vertical-align: middle;
  margin: 0;
}

.footer-distributed .footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 1;
  align-items: center;
}

.footer-distributed .footer-center p a {
  color: black;
  text-decoration: none;
}

/* Footer Right */

.footer-distributed .footer-right {
  width: 20%;
}

.footer-distributed .footer-company-about {
  line-height: 20px;
  color: black;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

.footer-distributed .footer-company-about span {
  display: block;
  align-content: center;
  color: black;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
}

.footer-distributed .footer-icons {
  margin-top: 25px;
}

.footer-distributed .footer-icons a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #33383b;
  border-radius: 2px;

  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;

  margin-right: 3px;
  margin-bottom: 5px;
}

/* If you don't want the footer to be responsive, remove these media queries */

@media (max-width: 780px) {
  .footer-distributed {
    font: bold 14px sans-serif;
    position: fixed;
    bottom: 0;
  }

  .footer-distributed .footer-left,
  .footer-distributed .footer-center,
  .footer-distributed .footer-right {
    display: block;
    width: 100%;
    margin-bottom: 1000px;
    text-align: center;
    position: fixed;
    bottom: 0;
  }

  .footer-distributed .footer-center i {
    margin-left: 0;
  }
}
</style>