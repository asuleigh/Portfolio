import React from "react";
import Header from "../components/nav/Header";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import headshot from "../../src/headshot.jpg"

const Home = () => (
<div>   
    <Container fluid style={{ margin: 0, padding: 0 }}>
        <div>
        <Header />
        <Row style={{ backgroundColor: "#1a6565", width: "100vw", height: "350px", borderBottomStyle: "ridge", borderColor: "#602040", margin: 0, padding: 0 }}>
        <Col>
        <Image src={headshot} roundedCircle style={{ width: "15vw", margin: "0 auto", paddingTop: "25px" }}/>
        </Col>
        <Col>
        <h2>Welcome</h2>
        </Col>
        </Row>
        </div>
        <Row style={{ backgroundColor: "#fff2e6", width: "100vw", height: "350px", margin: 0, padding: 0 }}>
        <Col>
            <h2>About</h2>
        </Col>
        <Col>
            <h2>Resume and Contact</h2>
            <li>Resume</li>
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>Email</li>
        </Col>
        </Row>
        <Row style={{ backgroundColor: "#fff2e6", width: "100vw", height: "400px", margin: 0, padding: 0 }}>
        <h1>
            Highlighted Projects
        </h1>
        <Carousel style={{ backgroundColor: "#fff2e6", width: "100vw", height: "350px", margin: 0, padding: 0 }}>
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