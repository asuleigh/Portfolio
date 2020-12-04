import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
// import headshot from "../../src/headshot.jpg"
import background2 from "../../src/background2.jpg"
import pic from "../../src/pic.jpg"


const Home = () => (
<div>   
    <Container fluid style={{ margin: 0, padding: 0 }}>
        <div>
        {/* <Card> */}
        <Row style={{ backgroundImage: `url(${background2})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", width: "100vw", height: "100vh", borderBottomStyle: "ridge", borderColor: "#1d4d9a", margin: 0, padding: 0, overflow: "hidden" }}>
        <Col sm={12} md={12} lg={6} style={{ justifyContent: "center", alignItems: "center",}}>
        <Image fluid className="responsive" src={pic} roundedCircle style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto", width: "auto", margin: "0 auto", marginTop: "80px" }}/>
        </Col>
        <Col sm={12} md={12} lg={6} style={{ justifyContent: "center", alignItems: "center",}}>
        <p style={{ paddingTop:"250px", textAlign: "center", color: "#eeeeee", fontFamily: "Lucida Handwriting", textShadow: "2px 2px 5px #1d4d9a", fontSize: "48px" }}>Welcome to my creative world!</p>
        <Nav style={{ paddingTop:"50px", display: "block", justifyContent: "center", alignItems: "center", textAlign: "center"}}>
        <Nav.Item>
        <Button variant="primary" size="lg" href="#about">
        About, Links, and Contact
        </Button>
        </Nav.Item>
        <br />
        <Nav.Item>
        <Button variant="primary" size="lg" href="#highlight">
        Highlighted Work
        </Button>
        </Nav.Item>
        </Nav>
        </Col>
        </Row>
        {/* </Card> */}
        </div>
        <Row id="about" style={{ backgroundColor: "#ffffcc", width: "100vw", height: "80vh", margin: 0, padding: 0 }}>
        <Col>
        <p style={{ paddingTop:"50px", textAlign: "center", color: "#1d4d9a", fontFamily: "Lucida Handwriting", textShadow: "2px 2px 5px #1d4d9a", fontSize: "48px" }}>
            About
            </p>
            <p>Originally from Southwestern Virginia, I hold a bachelor's degree from East Tennessee State University in Music Education with a background in teaching English, test scoring, content support, and supervising.
            I recently earned a certificate from the Coding: Full-Stack program at the University of North Carolina at Charlotte. I enjoy being creative and meticulous with my work. Coding has allowed me to learn new skills and put to use many of the skills and discipline that I gained from being an educator and studying education.
            Studying to be a web developer has put me on a path to a new career, as well as given me new confidence and a sense of accomplishment. I look forward to creating and collaborating in this new field. To contact me, set up a meeting, or request work on a project, please check the links in the Resume and Contact section.
            Check out highlights of my coding portfolio below! 
            </p>
        </Col>
        <Col>
            <p style={{ paddingTop:"50px", textAlign: "center", color: "#1d4d9a", fontFamily: "Lucida Handwriting", textShadow: "2px 2px 5px #1d4d9a", fontSize: "48px" }}>
            Resume and Contact
            </p>
            <li>Resume</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Email</li>
        </Col>
        </Row>
        <Row id="highlight" style={{ backgroundColor: "#ffffcc", width: "100vw", height: "80vh", margin: 0, padding: 0 }}>
        <p style={{ textAlign: "center", color: "#1d4d9a", fontFamily: "Lucida Handwriting", textShadow: "2px 2px 5px #1d4d9a", fontSize: "48px" }}>
            Highlighted Projects
            </p>
        <Carousel style={{ backgroundColor: "#ffffcc", width: "100vw", height: "70vh", margin: 0, padding: 0 }}>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="holder.js/800x400?text=First slide&bg=373940"
            alt="First slide"
        />
        <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
        />

        <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </Row>
    </Container>
</div>
);

export default Home;