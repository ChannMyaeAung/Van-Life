import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { styles } from "../style";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginFormData);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div
      id="login"
      className={`${styles.flexCenter} flex-col mt-10 md:max-w-[1280px] md:mx-auto`}
    >
      <h1 className="font-bold text-center text-primaryBlack text-[23px] md:text-[32px] pt-10 pb-6 leading-[24px]">
        Sign in to your account
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col w-full px-3">
        {/* Vanilla CSS is used for styling inputs */}
        <input
          type="email"
          onChange={handleChange}
          name="email"
          className="login__input"
          placeholder="Email address"
          value={loginFormData.email}
        />

        <input
          type="password"
          onChange={handleChange}
          name="password"
          className="login__input"
          placeholder="Password"
          value={loginFormData.password}
        />

        <button className={`primary__cta-btn my-6`}>Log in</button>

        {/* Redirect to SignUp Page */}
        <div id="redirect__to_signup">
          <p className="text-center text-primaryBlack font-medium text-[14px] leading-[24px] md:text-[16px]">
            Don't have an account?{" "}
            <NavLink to={"/signup"} className={`text-orangePrimary font-bold`}>
              Create one now
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;