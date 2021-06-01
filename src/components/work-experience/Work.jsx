import React from "react"
import { workData } from "./workData"
import WorkExpCard from "./WorkExpCard"

class Work extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      workdata: workData,
    }
  }
  render() {
    const { workdata } = this.state
    return (
      <div className="w-11/12 mx-auto sm:max-w-lg lg:max-w-7xl md:max-w-2xl">
        <h2 className="uppercase">Work Experience</h2>
        <h1 className="md:w-2/3 lg:w-1/2 ">
          Companies I have worked for in the past
        </h1>
        <div className="flex flex-col  lg:flex-row">
          {workdata.map(workdata => (
            <WorkExpCard key={workdata.id} workdata={workdata} />
          ))}
        </div>
      </div>
    )
  }
}

export default Work
