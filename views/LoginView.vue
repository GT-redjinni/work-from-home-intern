<script>
import { RouterLink } from "vue-router";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  methods: {
    onSubmit(values) {
      console.log(JSON.stringify(values, null, 2));
      console.log(values);
    },
    validateEmail(value) {
      // if the field is empty
      console.log(value);
      if (!value) {
        return "This field is required";
      }
      // if the field is not a valid email
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return "This field must be a valid email";
      }

      return true;
    },
    validatepassword(value) {
      console.log(value);
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      // if the field is not a valid password
      const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!regex.test(value)) {
        return "Minimum eight characters, at least one letter and one number:";
      }

      return true;
    },
    validateconfirmpassword(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }
      // if the field is not a valid password

      // if (value ===  ) {
      //   return 'password shold be match';
      // }

      return true;
    },
  },
};
</script>

<template>
  <div class="container ">
    <div class="row">
      <div class="col-md-6 b1">
        <div class="card border-0 ">
          <img src=" https://media.tenor.com/p0G_bmA2vSYAAAAd/login.gif" />
        </div>
      </div>
      <div class="col-md-6 b2">
        <div class="card mt-5 border-0 ">
          <div class="card-body mt-10 border-0">
            <h1 class="text-center">Login</h1>
            <Form @submit="onSubmit">
              <div class="mb-5">
                <label for="exampleInputEmail1" class="form-label"
                  >Email address <span class="text-danger">*</span></label
                >
                <Field
                  name="email"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  :rules="validateEmail"
                />
                <ErrorMessage name="email" class="text-danger" />
              </div>
              <div class="mb-5">
                <label for="exampleInputPassword1" class="form-label"
                  >Password<span class="text-danger"> *</span></label
                >
                <Field
                  name="password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  :rules="validatepassword"
                />
                <ErrorMessage name="password" class="text-danger" />
              </div>
              <button type="submit" class="btn btn-primary w-100 ">Login</button>
              <p class="text-center mt-3">
                Don't have an account ?
                <RouterLink
                  class="text-danger text-decoration-none"
                  to="/signup"
                  >Signup</RouterLink
                >
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.b1,.b2:hover{

box-shadow: 0px 15px 30px #fff;
animation: mymove 5s infinite;
}
@keyframes  mymove {
  50% {box-shadow: 20px 30px 50px gray;}
}
</style>
