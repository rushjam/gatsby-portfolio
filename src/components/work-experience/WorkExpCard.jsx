import React from "react"

const WorkExpCard = ({ workdata }) => {
  console.log({ workdata })
  return (
    <div className="bg-[#161616]">
      <div className="">
        <h1 className="text-7xl">{`0${workdata.id}`}</h1>
      </div>
      <div className="">
        <h1 className="text-2xl">
          <span>{`${workdata.companyname},`}</span>
          <br />
          <span>{workdata.position}</span>
        </h1>
        <p>{workdata.description}</p>
      </div>
    </div>
  )
}

export default WorkExpCard
