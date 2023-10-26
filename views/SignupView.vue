<script setup>
import { RouterLink } from "vue-router";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("First Name is required"),
  email: Yup.string().required("Email is required").email("Email is invalid"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

function onSubmit(values) {
  // display form values on success
  alert("SUCCESS!! :-)\n\n" + JSON.stringify(values, null, 4));
}
</script>

<template>
  <div class="container main" >  
    <div class="row">
      <div class="col-md-6 b1">
        <div class="card mt-5 border-0">
          <div class="card-body ">
            <h1 class="text-center mb-3">Creat Account</h1>
            <Form @submit="onSubmit" :validation-schema="schema">
              <div class="mb-3">
                <label for="name" class="form-label">User Name<span class="text-danger"> * </span></label>
                <Field id="name" name="name" type="text" class="form-control" />
                <ErrorMessage name="name" class="text-danger" />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address<span class="text-danger"> * </span>
                </label>
                <Field
                  type="email"
                  class="form-control"
                  name="email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <ErrorMessage name="email" class="text-danger" />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password<span class="text-danger"> * </span>
                </label>
                <Field
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="password"
                />
                <ErrorMessage name="password" class="text-danger" />
              </div>
              <div class="mb-3">
                <label for="confirmExampleInputPassword1" class="form-label">
                  Confirm Password<span class="text-danger"> * </span>
                </label>
                <Field
                  type="password"
                  class="form-control"
                  id="confirmExampleInputPassword1"
                  name="confirmPassword"
                />
                <ErrorMessage name="confirmPassword" class="text-danger" />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-primary w-100">
                Signup
              </button>
              <p class="text-center mt-3">
                Already have an account ?
                <RouterLink
                  class="text-danger text-decoration-none"
                  to="/login"
                >
                  Login
                </RouterLink>
              </p>
            </Form>
          </div>
        </div>
      </div>
      <div class="col-md-6 b2">
        <div class="card border-0 ">
          <img src=" https://rurutek.com/jio/assets/img/login-animate.gif" />
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
