import React from 'react'
import aboutData from './data/aboutData'
import "../styles/about.scss"

export default function About() {
    return (
    <>
        <section id="about" className="about-container">
            <h2>Who We Are</h2>
            <div className="about-content">
            {
                aboutData.map((item) => (
                    <div className="about-item" key={item.title}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))
            }
            </div>
        </section>
    </>
    )
}