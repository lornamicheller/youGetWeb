<template>
  <div>
    <div class="container-fluid">
      <h2 class="title">Business Categories</h2>
      <div class="container" style="padding-top: 30px;">
        <div class="row justify-content-center">
          <div class="col-lg-2 col-md-2 col-sm-6 text-center" style="margin: 10px; padding: 0">
            <button
              @click="switchDay('Entertainment',status)"
              id="ent"
              type="button"
              class="btn btn-primary icon-btn"
            >
              <img src="../assets/entertainment.png" class="icon" />
            </button>
            <p class="icon-title">Entertainment</p>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6 text-center" style="margin: 10px; padding: 0">
            <button
              @click="switchDay('Experiences',status)"
              id="exp"
              type="button"
              class="btn btn-primary icon-btn"
            >
              <img src="../assets/Experiences.png" class="icon" />
            </button>
            <p class="icon-title">Experiences</p>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6 text-center" style="margin: 10px; padding: 0">
            <button
              @click="switchDay('Dining',status)"
              id="din"
              type="button"
              class="btn btn-primary icon-btn"
            >
              <img src="../assets/dining.png" class="icon" />
            </button>
            <p class="icon-title">Dining</p>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6 text-center" style="margin: 10px; padding: 0">
            <button
              @click="switchDay('Bars',status)"
              id="bars"
              type="button"
              class="btn btn-primary icon-btn"
            >
              <img src="../assets/bars.png" class="icon" />
            </button>
            <p class="icon-title">Bars</p>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6 text-center" style="margin: 10px; padding: 0">
            <button
              @click="switchDay('Beauty',status)"
              id="beau"
              type="button"
              class="btn btn-primary icon-btn"
            >
              <img src="../assets/beauty.png" class="icon" />
            </button>
            <p class="icon-title">Beauty</p>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6 text-center" style="margin: 10px; padding: 0">
            <button
              @click="switchDay('Tattoos',status)"
              id="tatt"
              type="button"
              class="btn btn-primary icon-btn"
            >
              <img src="../assets/tattoos.png" class="icon" />
            </button>
            <p class="icon-title">Tattoos</p>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6 text-center" style="margin: 10px; padding: 0">
            <button
              @click="switchDay('Fitness',status)"
              id="fit"
              type="button"
              class="btn btn-primary icon-btn"
            >
              <img src="../assets/fitness.png" class="icon" />
            </button>
            <p class="icon-title">Fitness</p>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6 text-center" style="margin: 10px; padding: 0">
            <button
              @click="switchDay('Colmados',status)"
              id="colm"
              type="button"
              class="btn btn-primary icon-btn"
            >
              <img src="../assets/colmados.png" class="icon" />
            </button>
            <p class="icon-title">Colmados</p>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6 text-center" style="margin: 10px; padding: 0">
            <button
              @click="switchDay('Smoke',status)"
              id="smo"
              type="button"
              class="btn btn-primary icon-btn"
            >
              <img src="../assets/smokeshops.png" class="icon" />
            </button>
            <p class="icon-title">Smoke Shops</p>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6 text-center" style="margin: 10px; padding: 0">
            <button
              @click="switchDay('House',status)"
              id="hou"
              type="button"
              class="btn btn-primary icon-btn"
            >
              <img src="../assets/household.png" class="icon" />
            </button>
            <p class="icon-title">Household</p>
          </div>
        </div>

        <div class="row justify-content-center" style="padding-top: 5px;">
          <div class="col-lg-2 col-md-2 col-sm-6 text-center" style="margin: 10px; padding: 0">
            <button
              @click="switchDay('Technology',status)"
              id="tech"
              type="button"
              class="btn btn-primary icon-btn"
            >
              <img src="../assets/technology.png" class="icon" />
            </button>
            <p class="icon-title">Technology</p>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6 text-center" style="margin: 10px; padding: 0">
            <button
              @click="switchDay('Clothing',status)"
              id="clo"
              type="button"
              class="btn btn-primary icon-btn"
            >
              <img src="../assets/clothing.png" class="icon" />
            </button>
            <p class="icon-title">Clothing</p>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6 text-center" style="margin: 10px; padding: 0">
            <button
              @click="switchDay('Pets',status)"
              id="pet"
              type="button"
              class="btn btn-primary icon-btn"
            >
              <img src="../assets/pets.png" class="icon" />
            </button>
            <p class="icon-title">Pets</p>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6 text-center" style="margin: 10px; padding: 0">
            <button
              @click="switchDay('Vacations',status)"
              id="vac"
              type="button"
              class="btn btn-primary icon-btn"
            >
              <img src="../assets/vacation.png" class="icon" />
            </button>
            <p class="icon-title">Vacation</p>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-6 text-center" style="margin: 10px; padding: 0">
            <button
              @click="switchDay('Shopping',status)"
              id="shop"
              type="button"
              class="btn btn-primary icon-btn"
            >
              <img src="../assets/shopping.png" class="icon" />
            </button>
            <p class="icon-title">Shopping</p>
          </div>
        </div>
      </div>
      <div class="text-center">
        <!-- <router-link to="/paymentMethod"> -->
        <button type="submit" @click="setArray()" class="btn btn-primary continue-btn">Continue</button>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
import Parse from "parse";
export default {
  data() {
    return {
      data: null,
      statusEntertaiment: null,
      statusExperience: null,
      statusDining: null,
      statusShopping: null,
      statusVacations: null,
      statusPets: null,
      statusClothing: null,
      statusTechnology: null,
      statusHouse: null,
      statusSmoke: null,
      statusColmados: null,
      statusFitness: null,
      statusTattoos: null,
      statusBeauty: null,
      statusBars: null,
      items: null
    };
  },
  mounted: function() {
    Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
    Parse.initialize(
      "HTzPuPz4IAwcYAhYj96i6rD8hdzfsGuPzppMAlOJ", // This is your Application ID
      "rKRxSPX035PcdC3bZi919Se3CsSufijmjbfni8xd" // This is your Javascript key
      // 'ijcYK0Uitub8QGrTERUTkwOSVW6FKZw1q1sgYMPH' // This is your Master key (never use it in the frontend)
    );

    this.items = [];
    this.data = this.$route.params.result;

    console.log("Info Business", this.data);
    this.status = false;
  },

  methods: {
    switchDay(parameter, status) {
      this.buttonColor = "#3c3f46"; //desired Color
      //Sunday

      if (parameter == "Entertainment" && status == true) {
        document.getElementById("ent").style.backgroundColor = "#ed1c24";

        this.buttonChane = "#ed1c24";
        this.status = false;
        this.statusEntertaiment = true;
        // document.getElementById("sunAM").removeAttribute("disabled");
        // document.getElementById("sunPM").removeAttribute("disabled");
        console.log(
          "change White Sunday" + this.buttonChane + " " + this.statusSun
        );
      }
      if (parameter == "Entertainment" && status == false) {
        document.getElementById("ent").style.backgroundColor = "#3c3f46";
        // document.getElementById("sunAM").setAttribute("disabled", "disabled");
        // document.getElementById("sunPM").setAttribute("disabled", "disabled");
        this.buttonChane = "#3c3f46";
        this.status = true;
        this.statusEntertaiment = false;
      }
      if (parameter == "Experiences" && status == true) {
        document.getElementById("exp").style.backgroundColor = "#ed1c24";

        this.buttonChane = "#ed1c24";
        this.status = false;
        this.statusExperience = true;
        // document.getElementById("sunAM").removeAttribute("disabled");
        // document.getElementById("sunPM").removeAttribute("disabled");
        console.log(
          "change White Sunday" + this.buttonChane + " " + this.statusSun
        );
      }
      if (parameter == "Experiences" && status == false) {
        document.getElementById("exp").style.backgroundColor = "#3c3f46";
        // document.getElementById("sunAM").setAttribute("disabled", "disabled");
        // document.getElementById("sunPM").setAttribute("disabled", "disabled");
        this.buttonChane = "#3c3f46";
        this.status = true;
        this.statusExperience = false;
      }
      if (parameter == "Dining" && status == true) {
        document.getElementById("din").style.backgroundColor = "#ed1c24";

        this.buttonChane = "#ed1c24";
        this.status = false;
        this.statusDining = true;
        // document.getElementById("sunAM").removeAttribute("disabled");
        // document.getElementById("sunPM").removeAttribute("disabled");
        console.log(
          "change White Sunday" + this.buttonChane + " " + this.statusSun
        );
      }
      if (parameter == "Dining" && status == false) {
        console.log(this.status);
        document.getElementById("din").style.backgroundColor = "#3c3f46";
        // document.getElementById("sunAM").setAttribute("disabled", "disabled");
        // document.getElementById("sunPM").setAttribute("disabled", "disabled");
        this.buttonChane = "#3c3f46";
        this.status = true;
        this.statusDining = false;
      }
      if (parameter == "Bars" && status == true) {
        document.getElementById("bars").style.backgroundColor = "#ed1c24";

        this.buttonChane = "#ed1c24";
        this.status = false;
        this.statusBars = true;
        // document.getElementById("sunAM").removeAttribute("disabled");
        // document.getElementById("sunPM").removeAttribute("disabled");
        console.log(
          "change White Sunday" + this.buttonChane + " " + this.statusSun
        );
      }
      if (parameter == "Bars" && status == false) {
        document.getElementById("bars").style.backgroundColor = "#3c3f46";
        // document.getElementById("sunAM").setAttribute("disabled", "disabled");
        // document.getElementById("sunPM").setAttribute("disabled", "disabled");
        this.buttonChane = "#3c3f46";
        this.status = true;
        this.statusBars = false;
      }
      if (parameter == "Beauty" && status == true) {
        document.getElementById("beau").style.backgroundColor = "#ed1c24";

        this.buttonChane = "#ed1c24";
        this.status = false;
        this.statusBeauty = true;
        // document.getElementById("sunAM").removeAttribute("disabled");
        // document.getElementById("sunPM").removeAttribute("disabled");
        console.log(
          "change White Sunday" + this.buttonChane + " " + this.statusSun
        );
      }
      if (parameter == "Beauty" && status == false) {
        document.getElementById("beau").style.backgroundColor = "#3c3f46";
        // document.getElementById("sunAM").setAttribute("disabled", "disabled");
        // document.getElementById("sunPM").setAttribute("disabled", "disabled");
        this.buttonChane = "#3c3f46";
        this.status = true;
        this.statusBeauty = false;
      }
      if (parameter == "Tattoos" && status == true) {
        document.getElementById("tatt").style.backgroundColor = "#ed1c24";

        this.buttonChane = "#ed1c24";
        this.status = false;
        this.statusTattoos = true;
        // document.getElementById("sunAM").removeAttribute("disabled");
        // document.getElementById("sunPM").removeAttribute("disabled");
        console.log(
          "change White Sunday" + this.buttonChane + " " + this.statusSun
        );
      }
      if (parameter == "Tattoos" && status == false) {
        document.getElementById("tatt").style.backgroundColor = "#3c3f46";
        // document.getElementById("sunAM").setAttribute("disabled", "disabled");
        // document.getElementById("sunPM").setAttribute("disabled", "disabled");
        this.buttonChane = "#3c3f46";
        this.status = true;
        this.statusTattoos = false;
      }
      if (parameter == "Fitness" && status == true) {
        document.getElementById("fit").style.backgroundColor = "#ed1c24";

        this.buttonChane = "#ed1c24";
        this.status = false;
        this.statusFitness = true;
        // document.getElementById("sunAM").removeAttribute("disabled");
        // document.getElementById("sunPM").removeAttribute("disabled");
        console.log(
          "change White Sunday" + this.buttonChane + " " + this.statusSun
        );
      }
      if (parameter == "Fitness" && status == false) {
        document.getElementById("fit").style.backgroundColor = "#3c3f46";
        // document.getElementById("sunAM").setAttribute("disabled", "disabled");
        // document.getElementById("sunPM").setAttribute("disabled", "disabled");
        this.buttonChane = "#3c3f46";
        this.status = true;
        this.statusFitness = false;
      }
      if (parameter == "Colmados" && status == true) {
        document.getElementById("colm").style.backgroundColor = "#ed1c24";

        this.buttonChane = "#ed1c24";
        this.status = false;
        this.statusColmados = true;
        // document.getElementById("sunAM").removeAttribute("disabled");
        // document.getElementById("sunPM").removeAttribute("disabled");
        console.log(
          "change White Sunday" + this.buttonChane + " " + this.statusSun
        );
      }
      if (parameter == "Colmados" && status == false) {
        document.getElementById("colm").style.backgroundColor = "#3c3f46";
        // document.getElementById("sunAM").setAttribute("disabled", "disabled");
        // document.getElementById("sunPM").setAttribute("disabled", "disabled");
        this.buttonChane = "#3c3f46";
        this.status = true;
        this.statusColmados = false;
      }
      if (parameter == "Smoke" && status == true) {
        document.getElementById("smo").style.backgroundColor = "#ed1c24";

        this.buttonChane = "#ed1c24";
        this.status = false;
        this.statusSmoke = true;
        // document.getElementById("sunAM").removeAttribute("disabled");
        // document.getElementById("sunPM").removeAttribute("disabled");
        console.log(
          "change White Sunday" + this.buttonChane + " " + this.statusSun
        );
      }
      if (parameter == "Smoke" && status == false) {
        document.getElementById("smo").style.backgroundColor = "#3c3f46";
        // document.getElementById("sunAM").setAttribute("disabled", "disabled");
        // document.getElementById("sunPM").setAttribute("disabled", "disabled");
        this.buttonChane = "#3c3f46";
        this.status = true;
        this.statusSmoke = false;
      }
      if (parameter == "House" && status == true) {
        document.getElementById("hou").style.backgroundColor = "#ed1c24";

        this.buttonChane = "#ed1c24";
        this.status = false;
        this.statusHouse = true;
        // document.getElementById("sunAM").removeAttribute("disabled");
        // document.getElementById("sunPM").removeAttribute("disabled");
        console.log(
          "change White Sunday" + this.buttonChane + " " + this.statusSun
        );
      }
      if (parameter == "House" && status == false) {
        document.getElementById("hou").style.backgroundColor = "#3c3f46";
        // document.getElementById("sunAM").setAttribute("disabled", "disabled");
        // document.getElementById("sunPM").setAttribute("disabled", "disabled");
        this.buttonChane = "#3c3f46";
        this.status = true;
        this.statusHouse = false;
      }
      if (parameter == "Technology" && status == true) {
        document.getElementById("tech").style.backgroundColor = "#ed1c24";

        this.buttonChane = "#ed1c24";
        this.status = false;
        this.statusTechnology = true;
        // document.getElementById("sunAM").removeAttribute("disabled");
        // document.getElementById("sunPM").removeAttribute("disabled");
        console.log(
          "change White Sunday" + this.buttonChane + " " + this.statusSun
        );
      }
      if (parameter == "Technology" && status == false) {
        document.getElementById("tech").style.backgroundColor = "#3c3f46";
        // document.getElementById("sunAM").setAttribute("disabled", "disabled");
        // document.getElementById("sunPM").setAttribute("disabled", "disabled");
        this.buttonChane = "#3c3f46";
        this.status = true;
        this.statusTechnology = false;
      }
      if (parameter == "Clothing" && status == true) {
        document.getElementById("clo").style.backgroundColor = "#ed1c24";

        this.buttonChane = "#ed1c24";
        this.status = false;
        this.statusClothing = true;
        // document.getElementById("sunAM").removeAttribute("disabled");
        // document.getElementById("sunPM").removeAttribute("disabled");
        console.log(
          "change White Sunday" + this.buttonChane + " " + this.statusSun
        );
      }
      if (parameter == "Clothing" && status == false) {
        document.getElementById("clo").style.backgroundColor = "#3c3f46";
        // document.getElementById("sunAM").setAttribute("disabled", "disabled");
        // document.getElementById("sunPM").setAttribute("disabled", "disabled");
        this.buttonChane = "#3c3f46";
        this.status = true;
        this.statusClothing = false;
      }
      if (parameter == "Pets" && status == true) {
        document.getElementById("pet").style.backgroundColor = "#ed1c24";

        this.buttonChane = "#ed1c24";
        this.status = false;
        this.statusPets = true;
        // document.getElementById("sunAM").removeAttribute("disabled");
        // document.getElementById("sunPM").removeAttribute("disabled");
        console.log(
          "change White Sunday" + this.buttonChane + " " + this.statusSun
        );
      }
      if (parameter == "Pets" && status == false) {
        document.getElementById("pet").style.backgroundColor = "#3c3f46";
        // document.getElementById("sunAM").setAttribute("disabled", "disabled");
        // document.getElementById("sunPM").setAttribute("disabled", "disabled");
        this.buttonChane = "#3c3f46";
        this.status = true;
        this.statusPets = false;
      }
      if (parameter == "Vacations" && status == true) {
        document.getElementById("vac").style.backgroundColor = "#ed1c24";

        this.buttonChane = "#ed1c24";
        this.status = false;
        this.statusVacations = true;
        // document.getElementById("sunAM").removeAttribute("disabled");
        // document.getElementById("sunPM").removeAttribute("disabled");
        console.log(
          "change White Sunday" + this.buttonChane + " " + this.statusSun
        );
      }
      if (parameter == "Vacations" && status == false) {
        document.getElementById("vac").style.backgroundColor = "#3c3f46";
        // document.getElementById("sunAM").setAttribute("disabled", "disabled");
        // document.getElementById("sunPM").setAttribute("disabled", "disabled");
        this.buttonChane = "#3c3f46";
        this.status = true;
        this.statusVacations = false;
      }
      if (parameter == "Shopping" && status == true) {
        document.getElementById("shop").style.backgroundColor = "#ed1c24";

        this.buttonChane = "#ed1c24";
        this.status = false;
        this.statusShopping = true;
        // document.getElementById("sunAM").removeAttribute("disabled");
        // document.getElementById("sunPM").removeAttribute("disabled");
        console.log(
          "change White Sunday" + this.buttonChane + " " + this.statusSun
        );
      }
      if (parameter == "Shopping" && status == false) {
        document.getElementById("shop").style.backgroundColor = "#3c3f46";
        // document.getElementById("sunAM").setAttribute("disabled", "disabled");
        // document.getElementById("sunPM").setAttribute("disabled", "disabled");
        this.buttonChane = "#3c3f46";
        this.status = true;
        this.statusShopping = false;
      }
    },

    setArray() {
      if (this.statusEntertaiment == true) {
        this.items.push("2P9d9RwQRZ");
      }
      if (this.statusSmoke == true) {
        this.items.push("c3TzmDIUVL");
      }
      if (this.statusExperience == true) {
        this.items.push("hjNgfQlNHv");
      }
      if (this.statusDining == true) {
        this.items.push("CMcwvQQhBZ");
      }

      //

      if (this.statusBars == true) {
        this.items.push("BmF5H92h5R");
      }
      if (this.statusBeauty == true) {
        this.items.push("SfUW78cOyK");
      }
      if (this.statusTattoos == true) {
        this.items.push("CFN7QbIpno");
      }
      if (this.statusFitness == true) {
        this.items.push("zZ7PpNQKYy");
      }
      if (this.statusColmados == true) {
        this.items.push("PM0b1zHQIF");
      }

      if (this.statusTechnology == true) {
        this.items.push("WWyjuvo2BG");
      }

      if (this.statusClothing == true) {
        this.items.push("sMNXD3Vgk4");
      }

      if (this.statusPets == true) {
        this.items.push("8WZBh1z927");
      }

      if (this.statusVacations == true) {
        this.items.push("7LJI4NesAB");
      }
      if (this.statusShopping == true) {
        this.items.push("5UIcmIoyJW");
      }

      console.log("Array", this.items);

      if (this.items.length > 0) {
        Parse.Cloud.run("insertBusinessCategory", {
          //get the user store
          storeId: this.data.id,
          categoryArray: this.items
        }).then(
          result => {
            //this.$router.push({ name: "paymentMethod", params: { result } });
            this.$router.push({ name: "choosePlan", params: { result } });
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700&display=swap");

.continue-btn {
  border: none;
  height: 55px;
  width: 300px;
  border-radius: 25px;
  margin-top: 5px;
  background: #ed1c24;
  font-weight: 300;
  font-size: 13px;
  font-family: "Poppins", sans-serif;
  transition: 0.5s;
  margin-top: 40px;
}

.continue-btn:hover {
  background: #c7161c;
}

.title {
  font-family: "Poppins", sans-serif;
  color: #4b4b4b;
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  margin-top: 100px;
}

.icon {
  width: 70px;
  height: 70px;
  object-fit: contain;
}

.icon-btn {
  border-radius: 50%;
  width: 75px;
  height: 75px;
  padding: 0;
  background: #3c3f46;
  border: 0;
}

.icon-title {
  font-size: 12px;
  margin-top: 5px;
  font-family: "Poppins", sans-serif;
}
</style>