import React from 'react'

function Footer() {
  return (
    <div className="py-5 dark:bg-slate-800 text-center dark:text-gray-300 
    bg-slate-300 hover:bg-slate-200 rounded-t-lg text-gray-600 ">
    <a href="#hero" className="block text-xl md:text-2xl font-semibold">
        Ammar Syed KETHEESWARAN
    </a>
    <a
        href="mailto:ammarsyedk@gmail.com"
        className="text-sm md:text-md hover:text-indigo-500"
    >
        ammarsyedk@gmail.com
    </a>
    <p className="text-xs mt-2 text-gray-500 ">
        All rights reserved. © Ammar Syed KETHEESWARAN {new Date().getFullYear()}.
    </p>
</div>
  )
}

export default Footer