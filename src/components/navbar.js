import React, { useEffect } from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import menuData from "../components/data/menuData"
import "../styles/navbar.scss"
import gsap from 'gsap'

function Navbar() {

  useEffect(() => {
    const navTimeline = gsap.timeline();

    navTimeline.to('.nav-container', {
      duration: 1.5,
      height: 60,
      ease: 'expo.inOut',
    })

    navTimeline.from('.nav-btn',{
      opacity: 0,
      ease: 'power4.in',
    }).from('.nav-menu',{
      opacity: 0,
      ease: 'power4.in',
    })

  },[])

  return(
    <nav className="nav-container">
      <button className="nav-btn" href="/#" title="Menu">
          HelixCry
      </button>
      <div className="nav-menu">
        {menuData.map((value, index) => {
          return (
            <li key={index}>
              <button onClick={() =>
                {
                  scrollTo('#' + value.path)
                }
              }>
                {value.label}
              </button>
            </li>
          )
        })}
      </div>
    </nav>
  )
}

export default Navbar