import { styles } from "../style";

const About = () => {
  return (
    <section className="flex flex-col gap-8" id="about">
      {/* Intro Image for About Page */}
      <figure>
        <img
          src="about.png"
          alt="a person relaxing on a van's roof"
          className="object-cover w-full"
        />
      </figure>

      {/* Description */}
      <article className={`gap-5 px-10 ${styles.flexCenter} md:items-start`}>
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
        className={`bg-[#FFCC8D] rounded-[5px] w-[500px] h-[200px] mx-auto flex flex-col items-start justify-evenly px-5 mt-5 mb-16`}
      >
        <div>
          <h2 className="Cta-btn">Your destination is waiting.</h2>
          <h3 className="Cta-btn">Your van is ready.</h3>
        </div>
        <button className="w-[174px] h-[49px] bg-[#161616] text-white rounded-[10px] hover:bg-white hover:text-[#161616]">
          Explore our vans
        </button>
      </article>
    </section>
  );
};

export default About;
