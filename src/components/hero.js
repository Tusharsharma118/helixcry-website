import React from 'react'
import Video from "../static/video/helixcry.mp4"
import {Media} from 'react-bootstrap'
import '../styles/Hero.css'
export default function Hero() {
    return (
     <>
        <Media id="hero" className="hero-container">
            <video muted loop autoPlay playsInline>
                <source src={Video} type="video/mp4"/>
                <track kind="caption"/>
            </video>
        </Media>
    </>
    )
}