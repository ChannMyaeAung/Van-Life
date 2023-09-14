import React, { useState } from "react";
import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { styles } from "../style";
import { loginUser } from "../api";
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("idle");

  const [error, setError] = useState(null);

  const message = useLoaderData();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    loginUser(loginFormData)
      .then((data) => {
        navigate("/host", { replace: true });
      })
      .catch((err) => setError(err))
      .finally(() => setStatus("idle"));
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

      <p>{status}</p>

      {message && (
        <h3 className="text-[18px] md:text-[21px] text-red-500 font-semibold mb-3">
          {message}!
        </h3>
      )}

      {error && (
        <h3 className="text-center text-[18px] md:text-[21px] text-red-500 font-semibold mb-3">
          {error.message}
        </h3>
      )}

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

        <button
          disabled={status === "submitting"}
          className={`primary__cta-btn my-6`}
          type="submit"
        >
          {status === "submitting" ? "Logging In..." : "Log in"}
        </button>

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
