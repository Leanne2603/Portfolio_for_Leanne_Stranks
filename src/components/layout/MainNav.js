import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import LeanneStranksResume from './LeanneStranks-Resume.pdf'

const MainNav = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Leanne Stranks</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link><Link to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link to="/about">About</Link></Nav.Link>
                    <Nav.Link><Link to="/portfolio">Portfolio</Link></Nav.Link>
                    <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
                </Nav>
                <a href={LeanneStranksResume} target="_blank" rel="noopener noreferrer" download>
                <Button variant="outline-info">Download Resume</Button>
                </a>
        </Navbar>
        </>
    )
}

export default MainNav
