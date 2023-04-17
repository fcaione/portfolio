import resume from "../data/Frederick_Caione_Resume.pdf"
const Nav = () => {

	return (
		<div className="p-5">
			<ul className="flex justify-end gap-5">
				<li>
					<a href="#">About</a>
				</li>
				<li>
					<a href="#">Projects</a>
				</li>
				<li>
					<a href="#">Skills</a>
				</li>
				<li>
					<a href={resume} target="_blank">Resume</a>
				</li>
			</ul>
		</div>
	)
}
export default Nav
