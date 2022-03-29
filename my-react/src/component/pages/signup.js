import "../css/style.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { Usercontext } from "../context/logincontext";
// import { yupResolver } from "react-hook-form/resolvers/yup";
// import * as yup from "yup";

export function Signup() {
  const { signUpdata } = useContext(Usercontext);

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
    const confirmpass = data.password;
    console.log(confirmpass);
    signUpdata(mail, pass, confirmpass);
  };

  console.log(errors);
  return (
    <section>
      <div class="form-container sign-up-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Create Account</h1>

          <div class="form-control">
            <label for="name">Email Address</label>
            <input
              placeholder=""
              type="email"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && <p class="error1">Please check the Email</p>}
          </div>
          <div class="form-control">
            <label for="name">Enter Password</label>
            <input
              placeholder=""
              type="password"
              {...register("password", {
                required: true,
                maxLength: 5,
              })}
            />
            {errors.password && <p class="error1">Please check the Password</p>}
          </div>
          <div class="form-control">
            <label for="name">Confirm Password</label>
            <input
              placeholder=""
              type="password"
              {...register("password", {
                required: true,
                maxLength: 5,
              })}
            />
            {errors.password && <p class="error1">Please check the confirm Password</p>}
          </div>
          <button class="button checkout_btn button--hollow">Sign Up</button>
        </form>
      </div>
    </section>
  );
}
