import pfp from "../images/pfp.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="bg-sims bg-bottom bg-no-repeat mt-24 w-screen"
    >
      <div className="backdrop-blur-[2px]">
        <div className="flex flex-col flex-wrap lg:flex-row justify-center items-center gap-24 py-24">
          <div className="w-[22rem] h-[22rem]">
            <img
              className="w-full h-full object-cover drop-shadow-2xl rounded-full object-top"
              src={pfp}
              alt=""
            />
          </div>
          <div className="max-w-[47rem] mx-10">
            <h3 className="text-center text-5xl">About</h3>
            <p className="mt-10 text-md">
              As a software engineer, I am passionate about using technology to
              create solutions that{" "}
              <span className="text-emerald-500">connect</span> people and{" "}
              <span className="text-emerald-500">enhance</span> their lives.
              With a strong background in effective communication and a love for
              strategy video games and board games like Chess and Catan, I
              approach programming as both an art and a science. I believe that
              by blending technical expertise with a deep understanding of
              user's needs, we can create software that not only functions
              seamlessly but also{" "}
              <span className="text-emerald-500">delights</span> its audience.
            </p>

            <p className="mt-10 text-md">
              My goal is to build programs that solve real-world problems and
              provide a superior user experience. In my free time, I enjoy
              competitive video games, updating my letterboxd, and exploring new
              artists of alternative and hyperpop music.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
