import React from "react";
import { styles } from "../style";

const Footer = () => {
  return (
    <footer
      className={`mt-auto h-[75px] relative w-full bottom-0 flex-shrink-0 bg-[#161616] text-[#AAAAAA] z-10 text-center ${styles.flexCenter}`}
    >
      <p className={`z-50 opacity-80`}>@{new Date().getFullYear()} #VANLIFE</p>
    </footer>
  );
};

export default Footer;
