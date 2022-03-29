import "../css/style.css";
import { useForm } from "react-hook-form";
import React, { useContext } from "react";
import { Usercontext } from "../context/logincontext";

export function Login() {
  const { logindata } = useContext(Usercontext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const mail = data.email;
    console.log(mail);
    const pass = data.password;
    console.log(pass);
    logindata(mail, pass);
  };

  console.log(errors);

  return (
    <section>
      <div class="form-container sign-up-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <div class="form-control">
            <label for="name">Email Address</label>
            <input
              placeholder="Email"
              type="email"
              {...register("email", {
                required: true,
                pattern:
                  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {errors.email && <p class="error1">Please check the Email</p>}
          </div>
          <div class="form-control">
            <label for="name">Enter Password</label>
            <input
              placeholder="Password"
              type="password"
              {...register("password", {
                required: true,
                maxLength: 5,
              })}
            />
            {errors.password && <p class="error1">Please check the Password</p>}
          </div>

          <button class="button button--hollow justify-end inline-block">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
