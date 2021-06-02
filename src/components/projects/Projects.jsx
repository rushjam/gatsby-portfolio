import React from "react"
import ProjectCard from "./ProjectCard"
import projects from "./projectsData"

class Projects extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      projectData: projects,
    }
  }

  render() {
    const { projectData } = this.state
    return (
      <div data-scroll-section>
        <div className="w-11/12 mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:gap-12">
            <div className="flex flex-col md:justify-around">
              <div>
                <h2 className="uppercase">My Projects</h2>
                <h1 className="lg:w-11/12 ">
                  Work that I've done for the past 2 years
                </h1>
              </div>
              <div>
                {projectData
                  .filter((data, index) => index < 2)
                  .map(({ id, ...otherProps }) => (
                    <ProjectCard key={id} {...otherProps} />
                  ))}
              </div>
            </div>
            <div  className="flex flex-col md:justify-around">
              <div>
                {projectData
                  .filter((data, index) => index >= 2)
                  .map(({ id, ...otherProps }) => (
                    <ProjectCard key={id} {...otherProps} />
                  ))}
              </div>
              <div>
                <button className="uppercase">view all projects</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
{
  /* 
projectData
                  .filter((data, index) => index < 2)
                  .map(({ id, ...otherProps }) => (
                    <ProjectCard key={id} {...otherProps} />
                  )) */
}
