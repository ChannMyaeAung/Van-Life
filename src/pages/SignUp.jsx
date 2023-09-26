import React, { useState } from "react";
import { styles } from "../style";
import {
  Form,
  NavLink,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../api";

export function loader({ request }) {
  return new URL(request.url).searchParams.get("message");
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  try {
    await createUserWithEmailAndPassword(auth, email, password);
    /* Redirecting the user to the login page */
    return redirect(`/login`);
  } catch (err) {
    console.error(err);
    throw new Error("Couldn't create user. Error occurred!");
  }
}

const SignUp = () => {
  const statusNavigate = useNavigation();

  const errorMessage = useActionData();

  const message = useLoaderData();

  return (
    <div
      id="login"
      className={`${styles.flexCenter} flex-col mt-10 md:max-w-[1280px] md:mx-auto`}
    >
      <h1 className="font-bold text-center text-primaryBlack text-[23px] md:text-[32px] pt-10 pb-6 leading-[24px]">
        Sign up
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
          {statusNavigate.state === "submitting" ? "Signing Up..." : "Sign Up"}
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

export default SignUp;
