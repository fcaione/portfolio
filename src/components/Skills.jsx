import SkillCard from './SkillCard'
import { languages, libraries, tools } from '../data/Skills'

const Skills = () => {
	return (
		<section>
			<div className="text-center">
				<h2 className="text-5xl py-2 text-emerald-500 font-normal">Skills</h2>
			</div>
			<div className="flex justify-center gap-5 py-16">
				<div className="text-center shadow-lg rounded-xl min-w-[30%] flex flex-col px-6 py-3">
					<h3 className='text-2xl font-light text-slate-500'>Languages</h3>
          {languages.map(language => (
            <SkillCard reactIcon={language.reactIcon} name={language.name} />
          ))}
				</div>

				<div className="text-center shadow-lg rounded-xl min-w-[30%] flex flex-col px-6 py-3">
					<h3 className='text-2xl font-light text-slate-500'>Libraries/Frameworks</h3>
          {libraries.map(language => (
            <SkillCard reactIcon={language.reactIcon} name={language.name} />
          ))}
				</div>
        
				<div className="text-center shadow-lg rounded-xl min-w-[30%] flex flex-col px-6 py-3">
					<h3 className='text-2xl font-light text-slate-500'>Tools</h3>
					{tools.map(language => (
            <SkillCard reactIcon={language.reactIcon} name={language.name} />
          ))}
				</div>
			</div>
		</section>
	)
}
export default Skills
