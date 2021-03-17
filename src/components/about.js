import {React, useEffect, useRef} from 'react'
import aboutData from './data/aboutData'
import aboutProfileData from './data/aboutProfileData'
import {AiFillLinkedin, SiSteam, AiFillGithub, AiFillMediumCircle} from 'react-icons/all'
import {Container, Row, Col, Card} from 'react-bootstrap'
import gsap from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import '../styles/About.css'

function About() {

    const about = useRef(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        gsap.fromTo(".about-head",{
            autoAlpha: 0
        }, {
            duration: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
                trigger: about.current,
                start: '-900vh',
                toggleActions: 'play none none reverse'
            }
        })

        gsap.fromTo(".about-item",{
            autoAlpha: 0
        }, {
            duration: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
                trigger: about.current,
                start: '-800vh',
                toggleActions: 'play none none reverse'
            }
        })

        gsap.fromTo(".about-profile-item",{
            autoAlpha: 0
        }, {
            duration: 1,
            autoAlpha: 1,
            ease: "none",
            scrollTrigger: {
                trigger: about.current,
                start: '-700vh',
                toggleActions: 'play none none reverse'
            }
        })
    })

    return (
    <>
        <section id="about" className="about-container" ref={about}>
            <div className="about-head">
                <h2>Who We Are</h2>
            </div>
            <Container>
                <Row className="about-content">
                {
                    aboutData.map((item) => (
                        <Col className="about-item" key={item.title}>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </Col>
                    ))
                }
                </Row>
                <Row className="about-profile-content">
                    {
                        aboutProfileData.map((item) => (
                            <Col key={item.name}>
                            <Card className="about-profile-item" bg="dark">
                                <Card.Body as="div">
                                    <Card.Title as="h3">{item.name}</Card.Title>
                                    <Card.Text as="p">
                                        <a href={item.linkedIn}><AiFillLinkedin/></a>
                                        <a href={item.steam}><SiSteam/></a>
                                        <a href={item.github}><AiFillGithub/></a>
                                        <a href={item.medium}><AiFillMediumCircle/></a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    </>
    )
}

export default About;