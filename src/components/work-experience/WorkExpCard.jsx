import React from "react"

const WorkExpCard = ({ workdata }) => {
  console.log({ workdata })
  return (
    <div className="bg-gray-800">
      <div className="">
        <h1 className="text-4xl">{`0${workdata.id}`}</h1>
      </div>
      <div className="">
          <h1><span>{`${workdata.companyname},`}</span><span>{workdata.position}</span></h1>
          <p>{workdata.description}</p>
      </div>
    </div>
  )
}

export default WorkExpCard
