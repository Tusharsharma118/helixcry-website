import React,{useEffect, useRef} from 'react'
import forteData from '../components/data/forteData'
import "../styles/forte.scss"
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import '../fonts/8-bit-heading.ttf'
import '../fonts/8-bit-slim.ttf'
import '../fonts/8-bit-arcade.ttf'

export default function Forte() {

    const item = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo([".forte-head",".forte-item"],{
            autoAlpha: 0,
            x: "-10%"
        }, {
            duration: 1,
            autoAlpha: 1,
            ease: "power3.out",
            x: "0%",
            scrollTrigger: {
                trigger: item.current,
                start: '-1000px',
                toggleActions: 'play none none reverse',
                markers: true
            }
        })
    })

    return (
    <>
        <section id="forte" className="forte-container" ref={item}>
            <div className="forte-head">
                <h2>Have a Look at our Skillsets</h2>
                <p>Baka~~    (U w U) </p>
            </div>
            <div className="forte-content">
                {
                    forteData.map((item) => (
                        <div className="forte-item" key={item.title}>
                            <h3 class="forte-heading " >{item.title}</h3>
                            <p class="forte-text "  >{item.description}</p>
                        </div>
                    ))
                }
            </div>
        </section>
    </>
    )
}