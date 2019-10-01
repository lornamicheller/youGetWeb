<template>
  <div>
    <div class="container-fluid">
      <div class="container" style="padding-top: 130px;">
        <div class="row justify-content-center">
          <div
            class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-4"
            style="padding: 0; margin-top: 20px;"
          >
            <h1
              style="font-size: 30px; text-align: center; font-family: 'Poppins', sans-serif; color: #ed1c24; font-weight: 700; margin-bottom: 40px;"
            >Payment Method</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <form method="post" id="payment-form">
        <div class="justify-content-center">
          <label class="label" for="card-element">Credit or debit card</label>

          <div class="form" id="card-element">
            <!-- a Stripe Element will be inserted here. -->
          </div>
          <!-- Used to display Element errors -->
          <div id="card-errors" role="alert"></div>
        </div>
        <button @click="createNewUser()" class="btn-Stripe continue-btn">Submit Payment</button>
      </form>

      <!-- <form method="post" id="payment-form">
        <div class="form-row">
          <label for="card-element">Credit or debit card</label>
          <div id="card-element">
          </div>

          <div id="card-errors" role="alert"></div>
        </div>

        <button @click="createNewUser()">Submit Payment</button>
      </form>-->
    </div>

    <!-- vue modal  with boostrap -->
    <b-modal id="bv-modal-thankyou" hide-footer>
      <template v-slot:modal-title>
      Subscripción
      </template>
      <div class="d-block text-center">
        <h3>Gracias, su pago ha sido procesado. Ahora puede iniciar sección en la aplicación.</h3>
      </div>
      <b-button class="mt-3" block @click="closeModal()">OK</b-button>
    </b-modal>
    <!-- vue modal  with boostrap -->

  </div>
  
</template>


<script>
import Parse from "parse";
// let stripe = Stripe("pk_test_1eKxhVAU9OSAFiekz8bsTQBn0031r5OQZt"),
//   elements = stripe.elements(),
//   card = undefined;

export default {
  data() {
    return {
      data: null,
      cardName: null,
      number: null,
      expMont: null,
      expDate: null,
      cvv: null,
      stripe: null,
      cardNumberElement: null,
      elements: null
    };
  },
  mounted: function() {
    // Create a Stripe client.
    // this.stripe = Stripe('pk_test_1eKxhVAU9OSAFiekz8bsTQBn0031r5OQZt');

    // Create an instance of Elements.

    this.stripe = Stripe("pk_test_1eKxhVAU9OSAFiekz8bsTQBn0031r5OQZt");
    this.elements = this.stripe.elements();

    this.createNewUser();
    Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
    Parse.initialize(
      "HTzPuPz4IAwcYAhYj96i6rD8hdzfsGuPzppMAlOJ", // This is your Application ID
      "rKRxSPX035PcdC3bZi919Se3CsSufijmjbfni8xd" // This is your Javascript key
      // 'ijcYK0Uitub8QGrTERUTkwOSVW6FKZw1q1sgYMPH' // This is your Master key (never use it in the frontend)
    );

    this.data = this.$route.params.result;
  },
  methods: {

    closeModal() {
      this.$bvModal.hide('bv-modal-thankyou');
      this.$router.push("/");

    },

    createNewUser() {
      var self = this;
      var style = {
        base: {
          color: "#32325d",
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#aab7c4"
          }
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a"
        }
      };
      // Create an instance of the card Element.
      var card = self.elements.create("card", { style: style });

      // Add an instance of the card Element into the `card-element` <div>.
      card.mount("#card-element");

      // Handle real-time validation errors from the card Element.
      card.addEventListener("change", function(event) {
        var displayError = document.getElementById("card-errors");
        if (event.error) {
          displayError.textContent = event.error.message;
        } else {
          displayError.textContent = "";
        }
      });

      // Handle form submission.
      var form = document.getElementById("payment-form");
      form.addEventListener("submit", function(event) {
        event.preventDefault();

        self.stripe.createToken(card).then(function(result) {
          if (result.error) {
            // Inform the user if there was an error.
            var errorElement = document.getElementById("card-errors");
            errorElement.textContent = result.error.message;
          } else {
            // Send the token to your server.
            self.stripeTokenHandler(result.token);
          }
        });
      });
    },
    // Submit the form with the token ID.
    stripeTokenHandler(token) {
      // Insert the token ID into the form so it gets submitted to the server
      var form = document.getElementById("payment-form");
      var hiddenInput = document.createElement("input");
      hiddenInput.setAttribute("type", "hidden");
      hiddenInput.setAttribute("name", "stripeToken");
      hiddenInput.setAttribute("value", token.id);
      console.log("token", token);
      form.appendChild(hiddenInput);

      // Submit the form
      // form.submit();

      // this.errorAlert(JSON.stringify(token) + "TOKEN");
      Parse.Cloud.run("createStripeUser", {
        cardToken: token.id,
        email: Parse.User.current().get("username"),
        userId: Parse.User.current().id
      }).then(
        result => {
          console.log("success createStripeUser: ", result);
          // this.card = result;
          //this.$router.push({ name: "choosePlan", params: { token } });
          
          
          Parse.Cloud.run("getStore", {
            userId: Parse.User.current().id
          }).then(
             store => {
               console.log("success getStore: ", store);
               if( store != null ) {
                 store.set("active", true);
                 store.save();
               }

               this.$bvModal.show('bv-modal-thankyou');
               //this.$router.push({ name: "thankyou", params: { result } });

             }, error => {
               //an error
               console.log("error getStore: ", error);
            });
          
        },
        error => {
          this.emptyFields(error);
          console.log(error);
        }
      );
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import url("https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700&display=swap"); */

/* @font-face { */
/* font-family: "renogare_soft";
  src: url("../assets/renogare_soft/RenogareSoft-Regular.ttf")
    format("opentype");
  font-style: normal;
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
/* } */
/* 
.logo {
  width: 150px;
  height: 80px;
  object-fit: contain;
  display: block;
  margin-right: auto;
  margin-left: auto;
}*/

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

#card-element {
  font-family: "Poppins", sans-serif;
}

.continue-btn:hover {
  background: #c7161c;
}

.label {
  font-size: 13px;
  font-family: "Poppins", sans-serif;
}
</style>