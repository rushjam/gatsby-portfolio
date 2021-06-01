import * as React from "react"
import "./layout.css"
import Hero from "./hero/Hero"
import Work from "./work-experience/Work"
import Philosophy from "./philosophy/Philosophy"
import SkillSet from "./skills/Skills"

const Layout = ({ children }) => {
  return (
    <>
      <Hero />
      <Work />
      <Philosophy />
      <SkillSet />
      <Work />
      <Hero />
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
