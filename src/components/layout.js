import * as React from "react"
import "./layout.css"
import Hero from "./hero/Hero"
import Work from "./work-experience/Work"
import Philosophy from "./philosophy/Philosophy"
import SkillSet from "./skills/Skills"
import Projects from "./projects/Projects"
import Github from "./github/Github"
import Blog from "./blog/Blog"

const Layout = ({ children }) => {
  return (
    <>
      <Hero />
      <Work />
      <Philosophy />
      <SkillSet />
      <Projects />
      <Github />
      <Blog />
      <Projects />
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
