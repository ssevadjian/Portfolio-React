import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Image, Col, Row } from "react-bootstrap";
import './../styles/style.css';
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
      <div class="homeTxt coverPage container-fluid">
        <Container>
        <Container>
          <Row>
            <Col></Col>
            <Col lg={4}>
              <h1>
                Hello, my name is Stephanie Sevadjian, and I'm a
              </h1>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col lg={8}>
            </Col>
            <Col>
            <h1>Web Developer.</h1>
            </Col>
          </Row>
        </Container>
        </Container>
      </div>
  );
}
