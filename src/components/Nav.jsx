import resume from "../data/Frederick_Caione_Resume.pdf"

const Nav = () => {
	return (
		<div className="p-5 mr-6 text-xl shadow-sm fixed w-screen z-10 bg-white">
			<ul className="flex justify-end gap-5">
				<li>
					<a href="#about" className="hover:text-emerald-500">About</a>
				</li>
				<li>
					<a href="#projects" className="hover:text-emerald-500">Projects</a>
				</li>
				<li>
					<a href="#skills" className="hover:text-emerald-500">Skills</a>
				</li>
				<li>
					<a href={resume} target="_blank" className="hover:text-emerald-500">
						Resume
					</a>
				</li>
			</ul>
		</div>
	)
}
export default Nav
