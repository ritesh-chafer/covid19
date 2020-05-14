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
import "./Company.css";

function Company() {
  return (
    <div className="Main">
      <div className="col lg-4">
        <center>
          <h2>Engineering teams that fit your preferences.</h2>
          <h3>
            Search by culture, tech stack, values or perks. Sort by
            science-based match score.
          </h3>
        </center>
      </div>
     
        <Row className="content">
          <Col className="tabs" lg="3">
            <h4>
              1.Search by culture, tech-stack,values or perks. Sort by
              science-based match score.
            </h4>
          </Col>
          <Col lg="4">
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

                  <CardText style={{ fontSize: "60px" }}>400xzbg</CardText>
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
          <Col lg="4">
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
      
    </div>
  );
}

export default Company;
