const SkillCard = ({reactIcon, name}) => {
  return (
    <span className='flex justify-start gap-5 items-center py-1'>
    {reactIcon} {name}
  </span>
  )
}
export default SkillCard