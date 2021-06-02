import React from "react"

const ProjectCard = ({ projectName,  description, imageUrl}) => {
  return (
    <>
      <div
        className="bg-cover bg-center w-full h-56 lg:h-96"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div>
        <h2>{projectName}</h2>
        <p>{description}</p>
      </div>
    </>
  )
}

export default ProjectCard
