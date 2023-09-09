import React, { useState } from "react";
import { styles } from "../style";

const SignUp = () => {
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
      id="signup"
      className={`${styles.flexCenter} flex-col mt-10 md:max-w-[1280px] md:mx-auto`}
    >
      <h1 className="font-bold text-center text-primaryBlack text-[23px] md:text-[32px] pt-10 pb-6 leading-[24px]">
        Sign Up
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

        <button className={`primary__cta-btn my-6`}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
