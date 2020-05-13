import React from "react";
import { Container, Row, Col } from "reactstrap";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";

function Company() {
  return (
    <div className="Main">
      <div className="col lg-4">
        <center>
          <h4>
            Search by culture, tech-stack,values or perks. Sort by science-based
            match score.
          </h4>
        </center>
      </div>
      <Container>
        <Row>
          <Col xs="12" sm="3">
            <h4>
              1.Search by culture, tech-stack,values or perks. Sort by
              science-based match score.
            </h4>
          </Col>
          <Col xs="12" sm="4">
            <CardDeck className="stats">
              <Card className="stats-card">
                <CardBody>
                  <CardTitle className="Title">Companies</CardTitle>

                  <CardText style={{ fontSize: "60px" }}>400</CardText>
                </CardBody>
              </Card>
            </CardDeck>
            <CardDeck className="stats">
              <Card className="stats-card">
                <CardBody>
                  <CardTitle className="Title">Companies</CardTitle>

                  <CardText style={{ fontSize: "60px" }}>400</CardText>
                </CardBody>
              </Card>
            </CardDeck>
            <CardDeck className="stats">
              <Card className="stats-card">
                <CardBody>
                  <CardTitle className="Title">Companies</CardTitle>

                  <CardText style={{ fontSize: "60px" }}>400</CardText>
                </CardBody>
              </Card>
            </CardDeck>
            <CardDeck className="stats">
              <Card className="stats-card">
                <CardBody>
                  <CardTitle className="Title">Companies</CardTitle>

                  <CardText style={{ fontSize: "60px" }}>400</CardText>
                </CardBody>
              </Card>
            </CardDeck>
          </Col>
          <Col sm="4">
            <CardDeck className="stats">
              <Card className="stats-card">
                <CardBody>
                  <CardTitle className="Title">Students</CardTitle>

                  <CardText style={{ fontSize: "60px" }}>20</CardText>
                </CardBody>
              </Card>
            </CardDeck>
            <CardDeck className="stats">
              <Card className="stats-card">
                <CardBody>
                  <CardTitle className="Title">Students</CardTitle>

                  <CardText style={{ fontSize: "60px" }}>20</CardText>
                </CardBody>
              </Card>
            </CardDeck>
            <CardDeck className="stats">
              <Card className="stats-card">
                <CardBody>
                  <CardTitle className="Title">Students</CardTitle>

                  <CardText style={{ fontSize: "60px" }}>20</CardText>
                </CardBody>
              </Card>
            </CardDeck>
            <CardDeck className="stats">
              <Card className="stats-card">
                <CardBody>
                  <CardTitle className="Title">Students</CardTitle>

                  <CardText style={{ fontSize: "60px" }}>20</CardText>
                </CardBody>
              </Card>
            </CardDeck>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Company;
