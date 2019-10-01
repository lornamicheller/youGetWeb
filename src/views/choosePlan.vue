<template>
  <div>
    <div class="container" style="padding-top: 100px;">
      <img src="../assets/Artboard 18.png" class="logo" />
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">$74.99</h5>
              <h6 class="card-subtitle mb-2">(Oferta exclusiva)</h6>
              <div class="row justify-content-center">
                <span style="color: #ed1c24; font-size: 25px;">&bull;</span>
                <p class="card-text">Sin compromiso</p>
              </div>
              <div class="row justify-content-center">
                <span style="color: #ed1c24; font-size: 25px;">&bull;</span>
                <p class="card-text">Área de Alcance = 20 millas</p>
              </div>
              <div class="divider"></div>
              <p
                class="card-text2"
              >Incluye 30 días de uso gratis comenzando desde la fecha de registro. Luego de los 30 días de uso gratuito, el primer pago será efectuado recurridamente cada mes en la fecha en que se completó la registración.</p>
              <p
                class="card-text3"
              >Este precio estará solamente disponible para negocios que se registren durante el mes de octubre 2019.</p>
              <!-- <router-link to="/"> -->
              <button
                @click="purchase('99.99')"
                type="button"
                class="btn btn-primary subscribe-btn"
              >Subscribe</button>
              <!-- </router-link> -->
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">$99.99</h5>
              <h6 class="card-subtitle mb-2">(Oferta exclusiva)</h6>
              <div class="row justify-content-center">
                <span style="color: #ed1c24; font-size: 25px;">&bull;</span>
                <p class="card-text">Sin compromiso</p>
              </div>
              <div class="row justify-content-center">
                <span style="color: #ed1c24; font-size: 25px;">&bull;</span>
                <p class="card-text">Área de Alcance = 20 millas</p>
              </div>
              <div class="divider"></div>
              <p
                class="card-text2"
                style="margin-bottom: 54px;"
              >Incluye 30 días de uso gratis comenzando desde la fecha de registro. Luego de los 30 días de uso gratuito, el primer pago será efectuado recurridamente cada mes en la fecha en que se completó la registración.</p>
              <!-- <p
                class="card-text3"
              >Este precio estará solamente disponible para negocios que se registren durante el mes de octubre 2019.</p>-->
              <!-- <router-link to="/"> -->
              <button
                @click="purchase('74.99')"
                type="button"
                class="btn btn-primary subscribe-btn"
              >Subscribe</button>
              <!-- </router-link> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Parse from "parse";
export default {
  data() {
    return {
      card: null,
      stripe: null,
      token: null
    };
  },
  mounted: function() {
    // this.stripe = require("stripe")(
    //   "sk_test_XlL2qjNVUMwFdnJtKK7U5txF000xlfgWS5"
    // );
    // this.token = request.body.stripeToken;
    this.card = this.$route.params.token;
    console.log(this.card);
  },
  methods: {
    async purchase(value) {
      if (value == "99.99") {
        // const charge = await stripe.charges.create({
        //   amount: 99.99 * 100,
        //   currency: "usd",
        //   description: "Example charge",
        //   source: token,
        //   capture: false
        // });
        //this.$router.push("/Login");
        this.$router.push({ name: "paymentMethod", params: { value: 99.99 } });
      }
      if (value == "74.99") {
        // const charge = await stripe.charges.create({
        //   amount: 74.99 * 100,
        //   currency: "usd",
        //   description: "Example charge",
        //   source: token,
        //   capture: false
        // });
        //this.$router.push("/Login");
        this.$router.push({ name: "paymentMethod", params: { value: 74.99 } });
      }
    }
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

.logo {
  width: 150px;
  height: 80px;
  object-fit: contain;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 70px;
}

.card {
  background: #3c3f46;
  border-radius: 25px;
  margin-top: 100px;
  margin: 40px;
  /* height: 380px; */
  -webkit-box-shadow: 0 8px 6px -6px black;
  -moz-box-shadow: 0 8px 6px -6px black;
  box-shadow: 0 8px 6px -6px black;
}

.card-title {
  text-align: center;
  font-weight: 600;
  font-size: 60px;
  color: white;
  font-family: "Poppins", sans-serif;
}

.card-subtitle {
  color: #ed1c24;
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  text-align: center;
}

.subscribe-btn {
  width: 150px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  overflow: hidden;
  border: none;
  height: 50px;
  border-radius: 25px;
  background: #ed1c24;
  font-weight: 300;
  font-size: 13px;
  font-family: "Poppins", sans-serif;
  transition: 0.5s;
}

.subscribe-btn:hover {
  background: #c7161c;
}

.card-text {
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: white;
  font-weight: 300;
  font-size: 15px;
  letter-spacing: 0.5px;
  margin-top: 10px;
  margin-left: 10px;
}

.card-text2 {
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: white;
  font-weight: 300;
  font-size: 11px;
  letter-spacing: 0.5px;
  margin: 15px;
}

.card-text3 {
  font-family: "Poppins", sans-serif;
  text-align: center;
  color: white;
  font-weight: 300;
  font-size: 8px;
  letter-spacing: 0.5px;
  margin: 15px;
}

.divider {
  border-top: 2px solid white;
  margin: 30px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>