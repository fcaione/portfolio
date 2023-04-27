import pfp from "../images/pfp.jpeg"

const About = () => {
	return (
			<section id="about" className="pt-24">
				<div className="flex flex-col md:flex-row justify-center items-center gap-20">
					<img className="w-80" src={pfp} alt="" />
					<div>
						I am an analytically-driven software engineer interested in the
						intersection between rhetoric and coding.
					</div>
				</div>
			</section>
	)
}
export default About
