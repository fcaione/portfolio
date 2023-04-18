import resume from "../data/Frederick_Caione_Resume.pdf"

const Nav = () => {
	return (
		<div className="p-5 mr-6 text-xl">
			<ul className="flex justify-end gap-5">
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href={resume} target="_blank">
						Resume
					</a>
				</li>
			</ul>
		</div>
	)
}
export default Nav
