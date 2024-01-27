import React, { Fragment, useEffect, useState } from "react";
import { auth } from "../api";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { NavLink } from "react-router-dom";
import { styles } from "../style";

const Signout = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("loggedin");
        console.log(`Sign out successfully`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={`${styles.flexColumnCenter} gap-3`}>
      {authUser ? (
        <Fragment>
          <p className="text-[32px] font-semibold">{`Sign In as ${authUser.email}`}</p>
          <button className={`${styles.button}`} onClick={userSignOut}>
            Sign Out
          </button>
        </Fragment>
      ) : (
        <Fragment>
          <p className="text-[32px] font-semibold">Signed out successfully.</p>
          <NavLink to={`/login`} className={`${styles.button}`}>
            Sign In
          </NavLink>
        </Fragment>
      )}
    </div>
  );
};

export default Signout;
