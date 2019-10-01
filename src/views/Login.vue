<template>
  <div>
    <div class="container-fluid" style="padding: 0;">
      <div class="row justify-content-center" style="padding: 0;">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" style="padding: 0;">
          <div class="red-bg"></div>
          <div class="overlay">
            <div class="container-fluid text-center">
              <div class="row justify-content-center" style="margin: 0;">
                <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12" style="padding: 0;">
                  <h1 class="welcome-title">Welcome</h1>
                </div>
              </div>
              <div class="row justify-content-center" style="margin: 0;">
                <div class="col-xl-8 col-lg-12 col-md-12 col-sm-12 text-center">
                  <p
                    class="content"
                  >Somos la plataforma más costo efectiva para todo tipo de negocio, que le permita promover sus servicos, ofertas, promociones y descuentos instantáneamente alcanzando la mayor cantidad de personas con campañas geo-dirigidas y categorizadas.</p>
                </div>
              </div>
              <img class="cellphone" src="../assets/Artboard 17.png" />
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12" style="padding: 0;">
          <img class="logo" src="../assets/Artboard 18.png" />

          <div class="row justify-content-center">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fas fa-envelope icon"></i>
                </span>
              </div>
              <input type="text" class="form-control" placeholder="Email ID" />
            </div>
          </div>

          <div class="row justify-content-center">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">
                  <i class="fas fa-lock icon"></i>
                </span>
              </div>
              <input type="text" class="form-control" placeholder="Password" />
            </div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary sign-in">Sign In</button>
          </div>
          <div class="text-center">
            <router-link to="/register">
              <button type="submit" class="btn btn-primary create-btn">Create Account</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700&display=swap");

@font-face {
  font-family: "renogare_soft";
  src: url("../assets/renogare_soft/RenogareSoft-Regular.ttf")
    format("opentype");
  font-style: normal;
}

/* LEFT SIDE */

.red-bg {
  background: url("../assets/girl.jpg");
  background-size: cover;
  height: 100vh;
  width: 100%;
  background-position: center;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ed1c238c;
  z-index: 2;
}

.welcome-title {
  font-family: "renogare_soft";
  color: white;
  font-size: 70px;
  margin-top: 80px;
}

.content {
  color: white;
  font-size: 15px;
  text-align: justify;
  line-height: 25px;
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 300;
}

.cellphone {
  width: 200px;
  height: 400px;
  object-fit: contain;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 60px;
}

/* LEFT SIDE */

/* RIGHT SIDE */

.logo {
  width: 200px;
  height: 150px;
  object-fit: contain;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 200px;
}

.form-control {
  background: transparent;
  border: 0;
  font-size: 13px;
  margin-top: 7px;
}

.input-group {
  background: #231f20;
  height: 50px;
  width: 300px;
  border-radius: 25px;
  margin-top: 20px;
  font-family: "Poppins", sans-serif;
}

.icon {
  color: #ed1c24;
  font-size: 15px;
}

.input-group-text {
  width: 40px;
  height: 40px;
  margin-top: 5px;
  margin-left: 4px;
  border-radius: 50% !important;
  background: #727987;
  border-color: #727987;
}

.sign-in {
  border: none;
  height: 50px;
  width: 300px;
  border-radius: 25px;
  margin-top: 20px;
  background: #231f20;
  font-weight: 300;
  font-size: 13px;
  font-family: "Poppins", sans-serif;
  transition: 0.5s;
}

.sign-in:hover {
  background: #0f0e0e;
}

.create-btn {
  border: none;
  height: 50px;
  width: 300px;
  border-radius: 25px;
  margin-top: 20px;
  margin-bottom: 100px;

  background: #ed1c24;
  font-weight: 300;
  font-size: 13px;
  font-family: "Poppins", sans-serif;
  transition: 0.5s;
}

.create-btn:hover {
  background: #c7161c;
}

/* RIGHT SIDE */
</style>