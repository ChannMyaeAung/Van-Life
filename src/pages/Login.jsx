import React, { useEffect, useState } from "react";
import {
  Form,
  NavLink,
  redirect,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { styles } from "../style";
import { loginUser } from "../api";

/* Loader Function */
export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

/* Action function */
export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const data = await loginUser({ email, password });

  localStorage.setItem("loggedin", true);

  /* Redirecting user to host dashboard after logging in */
  const response = redirect("/host");
  response.body = true;
  return response;
}

/* Main Login Component goes here */
const Login = () => {
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

      <Form method="post" className="flex flex-col w-full px-3" replace>
        {/* Vanilla CSS is used for styling inputs */}
        <input
          type="email"
          name="email"
          className="login__input"
          placeholder="Email address"
        />

        <input
          type="password"
          name="password"
          className="login__input"
          placeholder="Password"
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
      </Form>
    </div>
  );
};

export default Login;
