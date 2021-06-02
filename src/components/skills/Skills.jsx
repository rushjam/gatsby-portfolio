import React from "react"
import SkillCard from "./SkillCard"
import SkillFooter from "./SkillFooter"
import skillsData from "./SkillsData"


class SkillSet extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      skills: skillsData,
    }
  }
  render() {
    const { skills } = this.state

    console.log(skills)
    return (
      <div data-scroll-section>
        <div className="grid grid-cols-1 lg:grid-cols-3  w-11/12 mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-7xl">
          <div>
            <h1>Skillset</h1>
            <p>
              With skills over 4 different fields, I am the prefect person to
              hire when it comes to a full fledged project. Whatever your needs
              are, I can preety much take on any challenge.
            </p>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col">
            {skills
              .filter((data, index) => index < 2)
              .map(({ id, ...otherProps }) => (
                <SkillCard id={id} {...otherProps} />
              ))}
          </div>
          <div className="flex flex-col md:flex-row lg:flex-col">
            {skills
              .filter((data, index) => index >= 2)
              .map(({ id, ...otherProps }) => (
                <SkillCard id={id} {...otherProps} />
              ))}
          </div>
        </div>
        <SkillFooter />
      </div>
    )
  }
}

export default SkillSet
