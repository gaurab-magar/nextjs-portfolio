import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">My Skills</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Here are some of the technologies I'm proficient in.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 md:gap-12 lg:grid-cols-4">
              <div className="flex flex-col items-center justify-center space-y-2">
                <CodepenIcon className="h-12 w-12" />
                <p className="text-gray-500 dark:text-gray-400">React</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <CodepenIcon className="h-12 w-12" />
                <p className="text-gray-500 dark:text-gray-400">Next.js</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <WindIcon className="h-12 w-12" />
                <p className="text-gray-500 dark:text-gray-400">Tailwind CSS</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <TypeIcon className="h-12 w-12" />
                <p className="text-gray-500 dark:text-gray-400">TypeScript</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <EclipseIcon className="h-12 w-12" />
                <p className="text-gray-500 dark:text-gray-400">JavaScript</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <HashIcon className="h-12 w-12" />
                <p className="text-gray-500 dark:text-gray-400">HTML</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <CodepenIcon className="h-12 w-12" />
                <p className="text-gray-500 dark:text-gray-400">CSS</p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
                <GitGraphIcon className="h-12 w-12" />
                <p className="text-gray-500 dark:text-gray-400">Git</p>
              </div>
            </div>
          </div>
        </section>
)
}

export default Skills