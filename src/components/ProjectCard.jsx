const ProjectCard = (props) => {
	return (
		<div className="m-8 flex flex-col gap-2">
			<h2 className="text-2xl font-semibold">{props.title}</h2>
			<div className="flex gap-1">
				{props.tools.map((tool) => (
					<h4 className="bg-emerald-500 text-sm text-white font-semibold p-1 border border-black">{tool}</h4>
				))}
			</div>
      <div>
        <p>{props.description}</p>
      </div>
      <div className="">
          <button>Live</button>
          <button>Github</button>
      </div>
		</div>
	)
}
export default ProjectCard
