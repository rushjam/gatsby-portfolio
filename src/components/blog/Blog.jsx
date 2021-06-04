import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { BlogData } from "./blogData"
import BlogCard from "./BlogCard"

const Blog = props => {
  const [blogData, setBlogData] = useState(BlogData)

  const blogTextRef = useRef(null)

  useEffect(() => {
    const blogSectionHeight = document.querySelector("#blog-data-col")
      .offsetHeight
    gsap.registerPlugin(ScrollTrigger)

    function stopTrigger() {
      const tl = gsap.timeline({
        delay: 0,
        scrollTrigger: {
          trigger: blogTextRef.current,
          start: "top top",
          end: `+=${blogSectionHeight} 210px`,
          markers: false,
          pin: true,
          pinSpacing: false,
          scrub: 1,
        },
      })
      return tl
    }

    const master = gsap.timeline()
    master.add(stopTrigger())
  }, [])

  return (
    <div id="blog-section-pin" data-scroll-section>
      <div className="w-11/12 mx-auto sm:max-w-lg lg:max-w-7xl md:max-w-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="demo" ref={blogTextRef}>
            <h1 className="">This is what I do in freetime</h1>
            <p className="">
              Here are a few blogs featuring the technology like MERN, 3D,
              Three.js, Social Media Marketinf, Etc.
            </p>
            <Link className="underline hidden md:block" to="/blog">
              See all blogs
            </Link>
          </div>
          <div id="blog-data-col">
            {blogData
              .filter((data, index) => index < 3)
              .map(({ id, ...otherProps }) => (
                <BlogCard id={id} {...otherProps} />
              ))}
          </div>
          <Link className="underline md:hidden" to="/blog">
            See all blogs
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Blog
