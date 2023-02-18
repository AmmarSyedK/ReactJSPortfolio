import React from 'react'
import SectionTitle from './SectionTitle'
import logo from '../assets/logo.png'

function About() {
	return (
		<div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
			<div className="w-full md:w-6/12">
				<SectionTitle>About Me</SectionTitle>
				<p className="text-md text-gray-600 dark:text-gray-300">
				I am someone who loves to try new things and experiment with new technologies, 
				software, and programming languages. I enjoy exploring different fields and have 
				a natural curiosity that drives me to seek out new experiences. 
				</p>
				<a
					href="mailto:ammarsyedk@gmail.com"
					className="block mt-3 text-md md:text-lg text-gray-700 dark:text-gray-300 underline decoration-1 hover:text-indigo-500 dark:hover:text-indigo-500"
				>
					ammarsyedk@gmail.com
				</a>
			</div>

			<img
				src={logo}
				alt="AmmarSyedK"
				className="w-full md:w-6/12 rounded-lg object-cover"
			/>
		</div>
	);
}

export default About