import React from 'react';
import { Container } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";
import './../styles/style.css';

export default function AboutMe() {
    return (
        <div class="aboutBg">
            <Container>
                <Row>
                    <Col lg={4}>
                    <div class="mx-auto">
                    <img class="img-thumbnail img-fluid aboutImg rounded-circle float-right" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/90261217_10158014546514030_4166488760998952960_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=6BzCYXR9tvMAX8I14Pk&_nc_ht=scontent-sjc3-1.xx&oh=9ebd370bdc467b4676ffdc3dffede9ac&oe=5FC48433" alt=""/>
                    </div>
                    </Col>
                    <Col lg={6}>
                        <p class='aboutTxt'>
                            I am a 33 year old front-end and back-end web developer based in San Francisco. I have experience creating interactive applications and working with databases using JavaScript, Express, mySql, node, and React. This site was built in React with Bootstrap and Material-UI.
                        </p>
                        <p class="aboutTxt">
                            My main goal is to create beautiful web applications, mainly focused on the back-end.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}