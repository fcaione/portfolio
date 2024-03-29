const ProjectCard = (props) => {
	return (
		<div className="flex flex-col lg:flex-row w-screen  justify-center lg:items-start lg:gap-0 gap-16 px-10">
			<div className="flex flex-col gap-4 w-1/2 lg:w-1/3">
				<h2 className="text-4xl font-semibold">{props.title}</h2>
				<div className="flex gap-1.5 flex-wrap">
					{props.tools.map((tool) => (
						<h4
							className="bg-emerald-500 text-sm text-white font-semibold p-1 border border-black"
							key={tool}
						>
							{tool}
						</h4>
					))}
				</div>
				<div>
					<p>{props.description}</p>
				</div>
				<div className="flex gap-2">
					<a className="group relative inline-block overflow-hidden border border-emerald-500 px-6 py-1 focus:outline-none focus:ring rounded-sm" href={props.deployed} target="_blank">
						<span className="absolute inset-y-0 left-0 w-[2px] bg-emerald-500 transition-all group-hover:w-full group-active:bg-emerald-500"></span>

						<span className="relative text-sm font-medium text-emerald-500 transition-colors group-hover:text-white">
							Live
						</span>
					</a>
					<a className="group relative inline-block overflow-hidden border border-emerald-500 px-6 py-1 focus:outline-none focus:ring rounded-sm" href={props.github} target="_blank">
						<span className="absolute inset-y-0 left-0 w-[2px] bg-emerald-500 transition-all group-hover:w-full group-active:bg-emerald-500"></span>

						<span className="relative text-sm font-medium text-emerald-500 transition-colors group-hover:text-white">
							Github
						</span>
					</a>
				</div>
			</div>
      <div>
        <img className="w-[50rem]" src={props.pc_image} alt="" />
      </div>
		</div>
	)
}
export default ProjectCard
