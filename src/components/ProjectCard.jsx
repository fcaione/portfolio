const ProjectCard = (props) => {
	return (
		<div className="m-20 ml-24 flex flex-col lg:flex-row gap-20">
			<div className="flex flex-col gap-4 w-[30rem]">
				<h2 className="text-4xl font-semibold">{props.title}</h2>
				<div className="flex gap-1 flex-wrap">
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
					<button className="group relative inline-block overflow-hidden border border-emerald-500 px-6 py-1 focus:outline-none focus:ring rounded-sm">
						<span className="absolute inset-y-0 left-0 w-[2px] bg-emerald-500 transition-all group-hover:w-full group-active:bg-emerald-500"></span>

						<span className="relative text-sm font-medium text-emerald-500 transition-colors group-hover:text-white">
							Live
						</span>
					</button>
					<button className="group relative inline-block overflow-hidden border border-emerald-500 px-6 py-1 focus:outline-none focus:ring rounded-sm">
						<span className="absolute inset-y-0 left-0 w-[2px] bg-emerald-500 transition-all group-hover:w-full group-active:bg-emerald-500"></span>

						<span className="relative text-sm font-medium text-emerald-500 transition-colors group-hover:text-white">
							Github
						</span>
					</button>
				</div>
			</div>
      <div>
        <img className="w-[32rem]" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
      </div>
		</div>
	)
}
export default ProjectCard
