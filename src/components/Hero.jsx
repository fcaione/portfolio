import { BsLinkedin, BsGithub } from "react-icons/bs"
import { Fade } from "react-awesome-reveal"

export const Hero = () => {
	return (
		<>
			<div className="text-center p-10 flex flex-col">
				<div>
					<Fade direction="left" cascade>
						<h3 className="text-5xl py-2 font-light">
							Hey, I'm{" "}
							<span className="text-emerald-500 font-normal">Frederick Caione</span>
						</h3>
						<h2 className="text-2xl">A Software Engineer based in New York</h2>
						<div className="text-3xl flex justify-center py-3 gap-10">
							<a
								href="https://www.linkedin.com/in/frederickcaione/"
								target="_blank"
							>
								<BsLinkedin />
							</a>
							<a href="https://github.com/fcaione" target="_blank">
								<BsGithub />
							</a>
						</div>
					</Fade>
				</div>
			</div>
			<div className="flex justify-center">
				<img className="w-96" src="/profile.jpeg" alt="" />
			</div>
		</>
	)
}
