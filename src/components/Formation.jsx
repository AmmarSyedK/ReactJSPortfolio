import React from 'react'
import SectionTitle from './SectionTitle'
import FormationItem from './FormationItem'
import formation from '../data/formation'

function Formation() {
  return (
    
    <div>
        <SectionTitle id='formation'>Formation</SectionTitle>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
     gap-5' >
        {formation.map(formation => (
            <FormationItem 
                key={formation.title}
                title={formation.title}
                location={formation.location}
                description={formation.description}
            ></FormationItem>
        ))}
    </div>
        
    </div>
  )
}

export default Formation