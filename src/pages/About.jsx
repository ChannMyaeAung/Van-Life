import { NavLink } from "react-router-dom";
import { styles } from "../style";

const About = () => {
  return (
    <section
      className={`flex max-w-[1000px] mx-auto flex-col gap-8 ${styles.paddingX} md:items-center md:justify-center`}
      id="about"
    >
      {/* Intro Image for About Page */}
      <figure>
        <img
          src="about.png"
          alt="a person relaxing on a van's roof"
          className="object-cover w-full aspect-[16/9]"
        />
      </figure>

      {/* Description */}
      <article className={`gap-5 ${styles.flexColumnCenter} md:items-start`}>
        <h1 className="font-bold max-w-[500px] md:max-w-full text-[32px] leading-[38px]">
          Don't squeeze in a sedan when you could relax in a van.
        </h1>
        <p className={styles.paragraphOne}>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.
          <span>(Hitch costs extra 😉)</span>
        </p>
        <p className={styles.paragraphOne}>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </article>

      {/* CTA */}
      <article
        className={`bg-[#FFCC8D] md:mx-0 self-start rounded-[5px] w-full max-w-[500px] h-[200px] mx-auto flex flex-col items-start justify-evenly px-5 mt-5 mb-16`}
      >
        <div>
          <h2 className="Cta-btn">Your destination is waiting.</h2>
          <h3 className="Cta-btn">Your van is ready.</h3>
        </div>
        <NavLink
          to={`/vans`}
          className=" text-center py-3 px-5 bg-[#161616] text-white rounded-[10px] hover:bg-white hover:text-[#161616]"
        >
          Explore our vans
        </NavLink>
      </article>
    </section>
  );
};

export default About;
