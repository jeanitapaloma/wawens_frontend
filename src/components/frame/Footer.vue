<template>
  <div id="page-container">
    <div id="content-wrap">
      <footer class="footer">      
        <div class="footer-left" id="footer-left">
          <p class="footer-company-about" id="footer-company-about">
            <strong>CONTACT INFORMATION:</strong>
            <br>
            <strong>Phone:</strong> +63 945 380 8056
            <strong>
              <br>Email:
            </strong> owner@wawenubehalaya.com
            <br>
          </p>
        </div>

        <div class="footer-center" id="footer-center">
          <p class="footer-company-about" id="footer-company-about">
            <strong>&nbsp;&nbsp; &nbsp;FOLLOW US:</strong>
            <br>
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-youtube"></a> 
            </p>
            <br>
            <h1 style="font-size:14px; margin-left:5px;"><strong> ©2020 UBE HALAYA CEBU-Wawen's Ube Halaya</strong></h1>
        </div>
        <div class="footer-right" id="footer-right">
          <p class="footer-company-about" id="footer-company-about">
            <span>
              <strong>LOCATION:</strong>
            </span>
            <br>Cebu City, Cebu, Philippines 6000
            <strong>
              <br>TERMS & CONDITIONS PRIVACY POLICY
            </strong>
            <br>
          </p>
        </div>
      </footer>
    </div>
  </div>
</template>
<style scoped>
.footer {
  background: transparent;
  box-shadow: transparent;
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 10px sans-serif;
  padding: 40px 35px;
  position: absolute;
  bottom: 0;
  height: 15%;
  /* border-color:#e5b1fd; */
}
.footer-left {
  display: inline-block;
  vertical-align: top;
  width: 40%;
}
.footer-center {
  display: inline-block;
  vertical-align: top;
  width: 36%;
}
.footer-center i {
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
.footer-center p {
  display: inline-block;
  color: black;
  font-weight: 400;
  vertical-align: middle;
  margin: 0;
}
.footer-center p span {
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 1;
  align-items: center;
}
.footer-right {
  width: 20%;
  display: inline-block;
  vertical-align: top;
}
.footer-company-about {
  line-height: 20px;
  color: black;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}
#copyright{
  padding-left: 5px;
}
.footer-icons a {
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
.fa {
  padding: 5px;
  font-size: 30px;
  width: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
}

.fa:hover {
    opacity: 0.7;
}
</style>
