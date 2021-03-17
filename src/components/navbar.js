import {React,useEffect} from "react"
import menuData from "../components/data/menuData"
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-scroll'
import gsap from 'gsap'
import '../styles/Navbar.css'

function Navbars() {

  useEffect(() => {
    const navTimeline = gsap.timeline();

    navTimeline.to('.nav-container', {
      duration: 1.5,
      height: 50,
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
    <Navbar variant="dark" className="nav-container">
      <Navbar.Brand className="nav-btn">
         HelixCry
      </Navbar.Brand>
      <Nav className="nav-menu">
        { menuData.map((value, index) => (
            <Nav.Item key={index}>
              <Nav.Link>
                <Link to={value.path} spy={true} smooth={true}>{value.label}</Link>
              </Nav.Link>
            </Nav.Item>
          )
        )}
      </Nav>
    </Navbar>
  )
}
export default Navbars