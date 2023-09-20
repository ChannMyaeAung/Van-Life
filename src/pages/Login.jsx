import React, { useEffect, useState } from "react";
import {
  Form,
  NavLink,
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
  useNavigation,
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

  const pathname =
    new URL(request.url).searchParams.get("redirectTo") || "/host";

  try {
    const data = await loginUser({ email, password });

    localStorage.setItem("loggedin", true);

    /* Redirecting user to previous visited page after logging in */
    const response = redirect(pathname);
    response.body = true;
    return response;
  } catch (err) {
    console.log(err);
  }
}

/* Main Login Component goes here */
const Login = () => {
  const statusNavigate = useNavigation();

  const errorMessage = useActionData();

  const message = useLoaderData();

  return (
    <div
      id="login"
      className={`${styles.flexCenter} flex-col mt-10 md:max-w-[1280px] md:mx-auto`}
    >
      <h1 className="font-bold text-center text-primaryBlack text-[23px] md:text-[32px] pt-10 pb-6 leading-[24px]">
        Sign in to your account
      </h1>

      {message && (
        <h3 className="text-[18px] md:text-[21px] text-red-500 font-semibold mb-3">
          {message}!
        </h3>
      )}

      {errorMessage && (
        <h3 className="text-center text-[18px] md:text-[21px] text-red-500 font-semibold mb-3">
          {errorMessage}
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
          disabled={statusNavigate.state === "submitting"}
          className={`primary__cta-btn my-6 disabled:bg-[#aaa] disabled:text-white disabled:cursor-not-allowed`}
          type="submit"
        >
          {statusNavigate.state === "submitting" ? "Logging In..." : "Log in"}
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
