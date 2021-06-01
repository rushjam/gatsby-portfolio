import React from "react"
import { workData } from "./workData"
import WorkExpCard from "./workExpCard"

class Work extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      workdata: workData,
    }
  }
  render() {
    const { workdata } = this.state
    console.log(workData)
    return (
      <div className="w-11/12 mx-auto">
        <h2 className="uppercase">Work Experience</h2>
        <h1 className="">Companies I have worked for in the past</h1>
        <div className="flex flex-col md:flex-row">

        {workdata.map( workdata => (
          <WorkExpCard key={workdata.id} workdata={workdata} />
        ))}
        </div>
      </div>
    )
  }
}

export default Work
