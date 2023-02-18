import React from 'react'

function FormationItem({title, location, description}) {
  return (
    <div className='bg-slate-300 hover:bg-slate-100
    dark:bg-slate-800 dark:hover:bg-slate-700 
    hover:-translate-y-2 transform transition p-5 rounded-md'>
        <h1 className='font-semibold text-lg text-gray-600 dark:text-gray-200 mb-1'>{title}</h1>
        <p className=' text-gray-600 dark:text-gray-300'>{location}</p>
        <p className='text-gray-600 dark:text-gray-400'>{description}</p>
    </div>
  )
}

export default FormationItem