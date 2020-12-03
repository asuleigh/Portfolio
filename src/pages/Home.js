import React from "react";
import Header from "../components/nav/Header";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";

const Home = () => (
<div>   
    <Container fluid style={{ margin: 0, padding: 0 }}>
        <div>
        <Header />
        <Row style={{ backgroundColor: "#264d73", width: "100vw", height: "30vh", margin: 0, padding: 0 }}>
        <Col>Headshot</Col>
        <Col>Welcome</Col>
        </Row>
        </div>
        <Row style={{ backgroundColor: "#264d73", width: "100vw", height: "30vh", margin: 0, padding: 0 }}>
        <Col>About</Col>
        <Col>Contact</Col>
        </Row>
        <Row style={{ backgroundColor: "#264d73", width: "100vw", height: "35vh", margin: 0, padding: 0 }}>
        <h1>
            Highlighted Projects
        </h1>
        <Carousel style={{ backgroundColor: "#264d73", width: "100vw", height: "30vh", margin: 0, padding: 0 }}>
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