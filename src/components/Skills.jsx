import React from 'react';
import SectionTitle from './SectionTitle';
import skills from '../data/skills';
import SkillsItem from './SkillsItem'

function Skills() {
  return (
    <div className='py-12'>
    <SectionTitle>My skills</SectionTitle>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
     gap-5' >
        {skills.map(skills => (
            <SkillsItem 
                key={skills.title}
                title={skills.title}
                icon={skills.icon}
                description={skills.description}
            ></SkillsItem>
        ))}
    </div>
    </div>
  )
}

export default Skills