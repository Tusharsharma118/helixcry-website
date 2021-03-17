import React,{useEffect, useRef} from 'react'
import forteData from '../components/data/forteData'
import {Card,Row,Col} from 'react-bootstrap'
import '../styles/Forte.css'
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"

export default function Forte() {

    const item = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo(".forte-head",{
            autoAlpha: 0
        }, {
            duration: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
                trigger: item.current,
                start: '-900vh',
                toggleActions: 'play none none reverse'
            }
        })

        gsap.fromTo(".forte-item",{
            autoAlpha: 0
        }, {
            duration: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
                trigger: item.current,
                start: '-800vh',
                toggleActions: 'play none none reverse'
            }
        })
    })

    return (
    <>
        <section id="forte" className="forte-container" ref={item}>
            <div className="forte-head">
                <h2>Our Skillset</h2>
            </div>
            <Row className="forte-content">
                {
                forteData.map((item) => (
                    <Col sm={6} className="forte-item-content">
                        <Card className="forte-item" key={item.title} bg="dark">
                            <Card.Body as="div">
                                <Card.Title as="h3">{item.title}</Card.Title>
                                <Card.Text as="p">
                                    {item.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    </>
    )
}