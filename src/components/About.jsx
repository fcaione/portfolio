import pfp from "../images/pfp.jpeg"

const About = () => {
	return (
			<section id="about" className="pt-24">
				<div className="flex flex-col md:flex-row justify-center items-center gap-20">
					<img className="w-80" src={pfp} alt="" />
					<div>
					As a software engineer, I am passionate about using technology to create solutions that connects people and enhances their lives. With a strong background in effective communication and a love for strategy video games and board games like Chess and Catan, I approach programming as both an art and a science. I believe that by blending technical expertise with a deep understanding of user needs, we can create software that not only functions seamlessly but also delights its audience. My goal is to build programs that solve real-world problems and provide a superior user experience. In my free time, I enjoy competitive video games, updating my letterboxd, and exploring new artists of alternative and hyperpop music.
					</div>
				</div>
			</section>
	)
}
export default About
