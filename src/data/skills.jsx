import { FaMobileAlt,FaReact } from 'react-icons/fa';
import { MdComputer } from 'react-icons/md'
import { VscCode } from 'react-icons/vsc';
import { SiHtml5,SiCss3, SiJavascript, SiTailwindcss,SiReact,
    SiDjango,SiBlazor,SiPython,SiC,SiCplusplus, SiQt, SiAndroid,
    SiFlutter, SiDart, SiJava, SiSymfony, SiExpress } from 'react-icons/si'

export default [
    {
        
        title: 'Web development',
        icon: <VscCode className='w-full h-full' />,
        description: <u1 className="w-full flex flex-wrap gap-2 flex-row items-center justify-start">

                        <a href="https://reactjs.org/docs/getting-started.html" target="_blank">
                            <div className='hover:bg-slate-300 dark:hover:bg-slate-800 flex items-center px-2 py-2 bg-slate-200 dark:bg-slate-900 rounded-md inline-flex flex-row'>
                                <SiReact className=' text-blue-300 mr-2' /> React JS
                            </div>
                        </a>

                        <a href="https://www.djangoproject.com/" target="_blank">
                            <div className='hover:bg-slate-300 dark:hover:bg-slate-800 flex items-center px-2 py-2 bg-slate-200 dark:bg-slate-900 rounded-md inline-flex flex-row'>
                                <SiDjango className='text-green-800 mr-2' /> Django
                            </div>
                        </a>

                        <a href="https://tailwindcss.com/" target="_blank">
                        <div className='hover:bg-slate-300 dark:hover:bg-slate-800 flex items-center px-2 py-2 bg-slate-200 dark:bg-slate-900 rounded-md inline-flex flex-row'>
                        <SiTailwindcss className='text-blue-400 mr-2' /> TailwindCSS
                        </div>
                        </a>

                        <a href="https://symfony.com/" target="_blank">
                        <div className='hover:bg-slate-300 dark:hover:bg-slate-800 flex items-center px-2 py-2 bg-slate-200 dark:bg-slate-900 rounded-md inline-flex flex-row'>
                        <SiSymfony className='dark:text-white mr-2' /> Symfony
                        </div>
                        </a>

                        <a href="https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor" target="_blank">
                        <div className='hover:bg-slate-300 dark:hover:bg-slate-800 flex items-center px-2 py-2 bg-slate-200 dark:bg-slate-900 rounded-md inline-flex flex-row'>
                        <SiBlazor className='text-violet-800 mr-2' /> Blazor
                        </div>
                        </a>

                        <a href="https://expressjs.com/" target="_blank">
                        <div className='hover:bg-slate-300 dark:hover:bg-slate-800 flex items-center px-2 py-2 bg-slate-200 dark:bg-slate-900 rounded-md inline-flex flex-row'>
                        <SiExpress className='dark:text-white mr-2' /> Node Express
                        </div>
                        </a>

                    </u1>,
    },
    {

        
        title: 'Software development',
        icon: <MdComputer className='w-full h-full' />,
        description: <u1 className="w-full flex flex-wrap gap-2 flex-row items-center justify-start">
                        
                        <a href="https://www.java.com/fr/" target="_blank">
                        <div className='hover:bg-slate-300 dark:hover:bg-slate-800 flex items-center px-2 py-2 bg-slate-200 dark:bg-slate-900 rounded-md inline-flex flex-row'>
                            <SiJava className='text-cyan-600 mr-2' />  Java
                        </div>
                        </a>

                        <a href="https://cplusplus.com/" target="_blank">
                        <div className='hover:bg-slate-300 dark:hover:bg-slate-800 flex items-center px-2 py-2 bg-slate-200 dark:bg-slate-900 rounded-md inline-flex flex-row'>                            
                        <SiCplusplus className='text-blue-800 mr-2' />
                            <p>C++</p>
                        </div>
                        </a>

                        <a href="https://www.python.org/" target="_blank">
                        <div className='hover:bg-slate-300 dark:hover:bg-slate-800 flex items-center px-2 py-2 bg-slate-200 dark:bg-slate-900 rounded-md inline-flex flex-row'>
                            <SiPython className='text-cyan-600 mr-2' />  Python
                        </div>
                        </a>

                        <a href="https://www.w3schools.com/c/c_intro.php" target="_blank">
                        <div className='hover:bg-slate-300 dark:hover:bg-slate-800 flex items-center px-2 py-2 bg-slate-200 dark:bg-slate-900 rounded-md inline-flex flex-row'>                            
                        <SiC className='dark:text-neutral-300 mr-2' /> 
                            <p>C</p>
                        </div>
                        </a>

                        <a href="https://www.qt.io/" target="_blank">
                        <div className='hover:bg-slate-300 dark:hover:bg-slate-800 flex items-center px-2 py-2 bg-slate-200 dark:bg-slate-900 rounded-md inline-flex flex-row'>
                            <SiQt className='text-lime-600 mr-2' />
                            <p>Qt</p>
                            
                        </div>
                        </a>

                    </u1>,
    },
    {
        
        title: 'App development',
        icon: <FaMobileAlt className='w-full h-full' />,
        description: <u1 className="w-full flex flex-wrap gap-2 flex-row items-center justify-start">
                          
                          <a href="https://flutter.dev/" target="_blank">
                          <div className='hover:bg-slate-300 dark:hover:bg-slate-800 flex items-center px-2 py-2 bg-slate-200 dark:bg-slate-900 rounded-md inline-flex flex-row'>
                              <SiFlutter className='text-cyan-400 mr-2' />
                              <p>Flutter</p>
                          </div>
                          </a>

                          <a href="https://developer.android.com/studio" target="_blank">
                          <div className='hover:bg-slate-300 dark:hover:bg-slate-800 flex items-center px-2 py-2 bg-slate-200 dark:bg-slate-900 rounded-md inline-flex flex-row'>
                              <SiAndroid className='text-green-500 mr-2' />
                              <p>Android</p>
                          </div>
                          </a>

                          <a href="https://dart.dev/" target="_blank">
                          <div className='hover:bg-slate-300 dark:hover:bg-slate-800 flex items-center px-2 py-2 bg-slate-200 dark:bg-slate-900 rounded-md inline-flex flex-row'>
                              <SiDart className='text-cyan-500 mr-2' />
                              <p>Dart</p>
                          </div>
                          </a>
                      </u1>,
    },
]