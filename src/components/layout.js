import * as React from "react"
import "./layout.css"
import Hero from "./Hero/Hero"
import Work from "./work-experience/Work"

const Layout = ({ children }) => {
  return (
    <>
      <Hero />
      <Work />
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
