'use client'

import { useEffect, useState } from "react"
import Link from "next/link"
import { ProjectCard } from "@/lib/types"
import ProjectItem from "./ProjectItem"
import { ProjectLib } from "@/lib/projectPreview"

const Projects = () => {
  const [projectList, setProjectList] = useState<ProjectCard[]>(ProjectLib)
  useEffect(() => {
    setProjectList(ProjectLib)
  }, []);
  //setProjectList([...projectList, ClockProject])
  return (
    <div className="mb-1">
      <p className="text-4xl font-bold text-center mt-2 font-sans">My projects</p>
      <div className="h-max min-w-fit w-2/3 md:w-4/5 m-auto border-zinc-700 border-2 rounded-xl border-solid mt-4 p-6 grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-x-4 gap-y-14 justify-items-center py-14">
        {projectList.map(project => 
          <Link key={project.id} href={`/projects/${project.page}`}>
            <ProjectItem key={project.id} imageSrc={project.preview} title={project.title} description={project.description}/>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Projects