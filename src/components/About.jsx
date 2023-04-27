import pfp from "../images/pfp.jpeg"

const About = () => {
	return (
		<section id="about" className="bg-sims bg-bottom mt-24">
			<div className="backdrop-blur-[2px] w-full h-full">
				<div className="flex flex-col lg:flex-row justify-center items-center gap-20 p-24">
					<img className="w-80" src={pfp} alt="" />
					<div className="w-[47rem]">
						<h3 className="text-center text-5xl">About</h3>
						<p className="mt-10 text-md">
							As a software engineer, I am passionate about using technology to
							create solutions that connects people and enhances their lives.
							With a strong background in effective communication and a love for
							strategy video games and board games like Chess and Catan, I
							approach programming as both an art and a science. I believe that
							by blending technical expertise with a deep understanding of user
							needs, we can create software that not only functions seamlessly
							but also delights its audience.
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
	)
}
export default About
