<template>
  <div>
    <div class="container">
      <div class="wrapper">
        <img class="upload-img" v-if="picture == null" src="../assets/icono tiendas.png" />
        <img class="upload-img" v-if="picture != null" :src="pictureUrl" />
      </div>
      <h1 class="title-img text-center mt-2">Upload Business</h1>
      <h1 class="title-img text-center">Photo/Logo</h1>
    </div>
    <div class="text-center">
      <label class="btn btn-primary icon">
        Upload Picture
        <input
          @change="onFileSelected"
          type="file"
          class="custom-file-input"
          style="display: none;"
          name="image"
        />
      </label>
    </div>
    <div class="text-center">
      <!-- <router-link to="/businessInfo"> -->
      <button type="submit" @click="setPhoto()" class="btn btn-primary continue-btn">Continue</button>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import Parse from "parse";

export default {
  data() {
    return {
      driverInfo: null,
      picture: null,
      pictureUrl: null
    };
  },
  mounted: function() {
    Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
    Parse.initialize(
      "HTzPuPz4IAwcYAhYj96i6rD8hdzfsGuPzppMAlOJ", // This is your Application ID
      "rKRxSPX035PcdC3bZi919Se3CsSufijmjbfni8xd" // This is your Javascript key
      // 'ijcYK0Uitub8QGrTERUTkwOSVW6FKZw1q1sgYMPH' // This is your Master key (never use it in the frontend)
    );

    this.driverInfo = this.$route.params.data;
    console.log("Info", this.driverInfo);
  },
  methods: {
    register() {},
    registerAccount() {},
    onFileSelected(event) {
      var self = this;
      const toBase64 = file =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result);
          reader.onerror = error => reject(error);
        });

      async function Main() {
        const file = document.querySelector(".custom-file-input").files[0];

        self.picture = await toBase64(file);
        self.pictureUrl = self.picture;
        //console.log(self.picture);
        console.log("we have image data, proceed to upload and save it...");

        const base64Image = self.picture;
        const name = "photo.jpeg";
        const parseFile = new Parse.File(name, {
          base64: base64Image
        });

        // convierte la foto a base64
        parseFile.save().then(
          savedFile => {
            console.log("file saved: " + savedFile.url());
            //console.log('file saved:' + savedFile);

            self.picture = savedFile;
            //console.log(self.picture.url());
            // this.savedPhoto = savedFile;
          },
          err => {
            console.log("error grabando file: " + err);
            alert(err);
          }
        );

        //console.log(self.picture);
      }

      Main();
    },
    setPhoto() {
      let foto = this.picture;
      this.$router.push({ name: "businessInfo", params: { foto } });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700&display=swap");

.upload-img {
  height: 180px;
  width: 180px;
  border-radius: 50%;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 150px;
  object-fit: cover;
}

.title-img {
  font-size: 17px;
  font-weight: 300;
  font-family: "Poppins", sans-serif;
}

.icon {
  border: none;
  height: 55px;
  width: 300px;
  border-radius: 25px;
  margin-top: 50px;
  background: #231f20;
  font-weight: 300;
  font-size: 13px;
  font-family: "Poppins", sans-serif;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  padding-top: 18px;
  transition: 0.5s;
}

.icon:hover {
  background: #0f0e0e;
  /* border-color: #d6d6d6; */
  /* box-shadow: 0 8px 6px -6px black; */
}

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
}

.continue-btn:hover {
  background: #c7161c;
}
</style>