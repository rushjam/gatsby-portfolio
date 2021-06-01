import React from "react"
import { Link } from "gatsby"
import phLogo from "../../images/Philosophy.jpg"

const Philosophy = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2" data-scroll-section>
      <div
        className="h-80 lg:h-[36rem] black order-1 md:order-2 bg-cover bg-center"
        style={{ backgroundImage: `url(${phLogo})` }}
      ></div>
      <div className="order-2 md:order-1 bg-[#fff3e3]">
        <h1 className="text-black">Philosophy & values</h1>
        <p className="text-black">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
        <Link className="text-black underline" to="/about">
          more about me
        </Link>
      </div>
    </div>
  )
}

export default Philosophy
