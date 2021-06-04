import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import useLocoScroll from "../components/hooks/useLocoScroll"
import Layout from "../components/layout"

const IndexPage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  const [preloader, setPreloader] = useState(true)
  const [timer, setTimer] = useState(1)
  useLocoScroll(!preloader)

  const id = useRef(null)

  const clear = () => {
    window.clearInterval(id.current)
    setPreloader(false)
  }

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(timer => timer - 1)
    }, 1000)
  }, [])

  useEffect(() => {
    if (timer === 0) {
      clear()
    }
  }, [timer])

  return preloader ? (
    <div className="fixed top-0 left-0 bottom-0 right-0 z-50  flex items-center justify-center bg-[#191919]">
      <h1 className="uppercase ">Rushik Ramani</h1>
    </div>
  ) : (
    <div className="main-container" id="main-container" data-scroll-container>
      <Layout />
    </div>
  )
}

export default IndexPage
