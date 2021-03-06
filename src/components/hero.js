import React from 'react'
import Video from "../static/video/helixcry.mp4"
import "../styles/hero.scss"
export default function Hero() {
    return (
     <>   
    <div class="hero-mask" >
    <section id="hero" className="hero-container">
        <video muted loop autoPlay playsInline>
            <source src={Video} type="video/mp4"/>
            <track kind="caption"/>
        </video>
    </section>
    </div>
    </>
    )
}