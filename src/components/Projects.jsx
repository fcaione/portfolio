import { projects } from "../data/Projects"
import ProjectCard from "./ProjectCard"

const Projects = () => {
	return (
		<section id="projects">
			<div className="text-center">
				<h2 className="text-5xl py-2 text-emerald-500 font-semi-bold">Projects</h2>
			</div>
      {projects.map(project => (
        <ProjectCard {...project} key={project.title}/>
      ))}
		</section>
	)
}
export default Projects
