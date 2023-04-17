import { projects } from "../data/Projects"
import ProjectCard from "./ProjectCard"

const Projects = () => {
	return (
		<section>
			<div className="text-center">
				<h2 className="text-5xl py-2 text-emerald-500 font-normal">Projects</h2>
			</div>
      {projects.map(project => (
        <ProjectCard {...project}/>
      ))}
		</section>
	)
}
export default Projects
