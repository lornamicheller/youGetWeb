<template>
  <div>
    <div class="container-fluid" style="height: 100%;">
      <div class="container" style="padding-top: 100px;">
        <div class="row justify-content-center">
          <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4" style="padding: 0;">
            <img class="logo" src="../assets/Artboard 18.png" />
            <form>
              <div class="form-group">
                <label class="label" for="exampleInputEmail1">Username</label>
                <input
                  v-model="username"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Name"
                />
              </div>
              <div class="form-group">
                <label class="label" for="exampleInputEmail1">Email</label>
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email"
                />
              </div>
              <div class="form-group">
                <label class="label" for="exampleInputEmail1">Password</label>
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group">
                <label class="label" for="exampleInputEmail1">Phone Number</label>
                <input
                  v-model="phone"
                  type="tel"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Phone Number"
                />
              </div>
              <div class="text-center">
                <!-- <router-link to="/uploadPicture"> -->
                <button
                  type="submit"
                  @click="register()"
                  class="btn btn-primary continue-btn"
                >Continue</button>
                <!-- </router-link> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// main.js
import Parse from "parse";
// import Vue from "vue";
// import VueSweetalert2 from "vue-sweetalert2";
// // import App from "./App.vue";

// Vue.use(VueSweetalert2);
// new Vue({
//   el: "#app",
//   render: h => h(App)
// });

export default {
  data() {
    return {
      username: null,
      email: null,
      password: null,
      phone: null
    };
  },
  mounted: function() {
    Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
    Parse.initialize(
      "HTzPuPz4IAwcYAhYj96i6rD8hdzfsGuPzppMAlOJ", // This is your Application ID
      "rKRxSPX035PcdC3bZi919Se3CsSufijmjbfni8xd" // This is your Javascript key
      // 'ijcYK0Uitub8QGrTERUTkwOSVW6FKZw1q1sgYMPH' // This is your Master key (never use it in the frontend)
    );
  },
  methods: {
    register() {
      if (this.username == null || this.name == "") {
        alert("Business Name is Empty");

        return;
      }
      if (this.email == null || this.email == "") {
        alert("Business Email is Empty");

        return;
      }
      if (this.password == null || this.password == "") {
        alert("Business password is Empty");

        return;
      }

      if (this.phone == null || this.phone == "") {
        console.log("phone:" + this.phone);
        alert("Business Phone is Empty");
        return;
      } else {
        this.registerAccount();
        return;
      }
    },
    registerAccount() {
      console.log(this.username);
      console.log(this.email);
      console.log(this.password);
      console.log(this.phone);

      const user = new Parse.User();
      user.set("username", this.email);
      user.set("name", this.username);
      user.set("phone", this.phone);
      user.set("email", this.email);
      user.set("password", this.password);
      user.set("role", "E");

      console.log(user);
      // this.router.navigate(["register"]);
      user
        .signUp()
        .then(data => {
          // console.log(user1);
          this.$router.push({ name: "uploadPicture", params: { data } });
          // this.$router.push("/uploadPicture");
        })
        .catch(error => {
          alert(error);
          console.error("Error while signing up user", error);
        });
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

.label {
  font-size: 13px;
  font-family: "Poppins", sans-serif;
}

.form-control {
  font-size: 10px;
  font-family: "Poppins", sans-serif;
  height: 40px;
  border-radius: 0;
  background: #cfcfcf;
  border: 0;
  color: black;
  /* width: 300px; */
}

.logo {
  width: 150px;
  height: 80px;
  object-fit: contain;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.continue-btn {
  border: none;
  height: 50px;
  width: 100%;
  border-radius: 25px;
  margin-top: 20px;
  background: #ed1c24;
  font-weight: 300;
  font-size: 13px;
  font-family: "Poppins", sans-serif;
  transition: 0.5s;
}

.continue-btn:hover {
  background: #c7161c;
}
</style>