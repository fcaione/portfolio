import { projects } from "../data/Projects"
import ProjectCard from "./ProjectCard"

const Projects = () => {
	return (
		<>
			<section id="projects" className="pt-24">
				<div className="text-center">
					<h2 className="text-6xl py-2 text-black font-semibold">Projects</h2>
				</div>
				<div className="flex flex-col justify-center items-center p-10 gap-20">
					{projects.map((project) => (
						<ProjectCard {...project} key={project.title} />
					))}
				</div>
			</section>
		</>
	)
}
export default Projects
