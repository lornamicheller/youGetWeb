<template>
  <div>
    <div class="container-fluid">
      <div class="container" style="padding-top: 160px;">
        <div class="row justify-content-center">
          <div
            class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4"
            style="padding: 0; margin-top: 100px;"
          >
            <form>
              <div class="form-group">
                <label class="label" for="exampleInputEmail1">Business Name</label>
                <input
                  v-model="businessName"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Business Name"
                />
              </div>
              <div class="form-group">
                <label class="label" for="exampleInputEmail1">Business Address</label>
                <input
                  v-model="businessAddress"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Business Address"
                />
              </div>
              <div class="form-group">
                <label class="label" for="exampleInputEmail1">Business Phone</label>
                <input
                  v-model="businessPhone"
                  type="tel"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Business Phone"
                />
              </div>
              <div class="form-group">
                <label class="label" for="exampleInputEmail1">Business Location</label>
                <input
                  v-model="businessCoordenate"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="(Latituded, Longituded)"
                />
              </div>
              <div class="text-center">
                <!-- <router-link to="/businessCategory"> -->
                <button
                  type="submit"
                  @click="setBusiness()"
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
import Parse from "parse";
export default {
  data() {
    return {
      data: null,
      businessName: null,
      businessAddress: null,
      businessPhone: null,
      businessCoordenate: null
    };
  },
  mounted: function() {
    Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
    Parse.initialize(
      "HTzPuPz4IAwcYAhYj96i6rD8hdzfsGuPzppMAlOJ", // This is your Application ID
      "rKRxSPX035PcdC3bZi919Se3CsSufijmjbfni8xd" // This is your Javascript key
      // 'ijcYK0Uitub8QGrTERUTkwOSVW6FKZw1q1sgYMPH' // This is your Master key (never use it in the frontend)
    );

    this.data = this.$route.params.foto;
    console.log("Info", this.data);
  },
  methods: {
    setBusiness() {
      if (
        this.businessName == null ||
        this.businessName == "" ||
        this.businessAddress == null ||
        this.businessAddress == "" ||
        this.businessPhone == null ||
        this.businessPhone == "" ||
        this.businessCoordenate == null ||
        this.businessCoordenate == ""
      ) {
        alert("All field are requerided.");
        return;
      } else if (
        this.businessName != null &&
        this.businessAddress != null &&
        this.businessPhone != null &&
        this.businessName != "" &&
        this.businessAddress != "" &&
        this.businessPhone != ""
      ) {
        var comps = this.businessCoordenate.split(",");
        let lat = parseFloat(comps[0].trim());
        let lon = parseFloat(comps[1].trim());

        if (isNaN(lat) || isNaN(lon)) {
          alert(
            "Store location latitude and longitude is invalid. Correct format is latitude,longitude"
          );
          return;
        }
        Parse.Cloud.run("createStore", {
          //get the user store
          store: this.businessName,
          phone: this.businessPhone,
          businessDoc: this.data,
          // photoLogo: this.photoLogo,
          address: this.businessAddress,
          userId: Parse.User.current().id,
          // agreement: this.agreement,
          latitude: lat,
          longitude: lon
        }).then(
          result => {
            console.log(result);
            // this.provider.storeId = result.id;
            this.$router.push({ name: "businessCategory", params: { result } });
            // this.navigate.navigateRoot("/your-interest");
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