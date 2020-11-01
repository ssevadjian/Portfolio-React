import { Container } from '@material-ui/core';
import React from 'react';
import {Row, Col} from 'react-bootstrap';
import PortfolioCard1 from '../Viewer/PortfolioCard1';
import PortfolioCard2 from '../Viewer/PortfolioCard2';
import PortfolioCard3 from '../Viewer/PortfolioCard3';
import PortfolioCard4 from '../Viewer/PortfolioCard4';

export default function Portfolio() {
    return (
        <div class="projectImg">
        <Container>
        <Row>
            <Col lg={1}></Col>
            <Col lg={5}>
            <PortfolioCard1/>
            </Col>
            <Col lg={1}></Col>
            <Col lg={5}>
            <PortfolioCard2/>
            </Col>
            <Col lg={1}></Col>
        </Row>
        <div id="#div"><br></br><br></br></div>
        <Row>
            <Col lg={1}></Col>
            <Col lg={5}>
            <PortfolioCard3/>
            </Col>
            <Col lg={1}></Col>
            <Col lg={5}>
            <PortfolioCard4/>
            </Col>
            <Col lg={1}></Col>
        </Row>
        </Container>
        </div>
    )
}