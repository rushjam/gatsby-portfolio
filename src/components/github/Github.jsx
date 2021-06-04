import React from "react"
import { Link } from "gatsby"
import github from "../../images/github.jpg"

const Github = () => {
  return (
    <div data-scroll-section>
      <div className="w-11/12 mx-auto sm:max-w-lg md:max-w-2xl lg:max-w-7xl">
        <div>
          <h1>Github</h1>
          <p>
            Each project is made with love and care. Do check out my work on Github. Comments and support are appreciated.
          </p>
        </div>
        <div
          className="bg-fixed bg-no-repeat bg-cover w-full h-96 bg-center "
          style={{ backgroundImage: `url(${github})` }}
        >
          <div className="w-full h-8 bg-[#1f1f1f] relative">
            <div className="absolute left-4 top-[5px]  ">
              <span className="h-3.5 w-3.5 rounded-full bg-gray-300 inline-block "></span>
              <span className="h-3.5 w-3.5 rounded-full bg-gray-300 inline-block ml-2"></span>
              <span className="h-3.5 w-3.5 rounded-full bg-gray-300 inline-block ml-2"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Github
