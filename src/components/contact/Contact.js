import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Contact = () => {
    return (
        <>
            <Card className="text-center">
                <Card.Header>Contact Me</Card.Header>
                    <Card.Body>
                        <Card.Title>Get in touch with me via one of the options below and I will get back to you shortly...</Card.Title>
                        <Card.Text>
                            <a href="https://linkedin.com/leannestranks" target="_blank" rel="noreferrer" className="fab fa-linkedin fa-3x"> </a>
                            <a href="https://github.com/Leanne2603" target="_blank" rel="noreferrer" className="fab fa-github fa-3x" style={{color: "black"}}> </a>
                            <a href="https://m.me/leanne.stranks" target="_blank" rel="noreferrer" className="fab fa-facebook-messenger fa-3x"> </a>
                        </Card.Text>
                        <a href="mailto:leannestranks@gmail.com?subject=Hello">
                        <Button variant="primary">Email me!</Button>
                        </a>
                    </Card.Body>
                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
            </Card>  
        </>
    )
}

export default Contact

