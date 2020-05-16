import React from "react";
import { Container, Row, Col, Badge } from "reactstrap";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
  Button,
} from "reactstrap";
import "./Company.css";

function Company() {
  return (
    <div className="Main">
     
        <div className="col lg-4">
          <center>
            <h2 className="heading">
              <b>Engineering teams that fit your preferences.</b>
            </h2>
            <h3 className="heading">
              Search by culture, tech stack, values or perks. Sort by
              science-based match score.
            </h3>
          </center>
        </div>

        <Row className="content">
         
          <Col className="tabs" lg="3">
            <h4 className="m-2">LOCATION</h4>
            <Button color="primary" size="sm" className="m-2">
              San Fransisco
            </Button>
            <Button color="primary" size="sm" className="m-2">
              New York
            </Button>
            <Button color="primary" size="sm" className="m-2">
              London
            </Button>
            <Button color="primary" size="sm" className="m-2">
              Bangalore
            </Button>
            <br />
            <h4 className="m-2">TECHNOLOGY</h4>
            <Button color="primary" size="sm" className="m-2">
              JavaScript
            </Button>
            <Button color="primary" size="sm" className="m-2">
              Python
            </Button>
            <Button color="primary" size="sm" className="m-2">
              NodeJS
            </Button>
            <Button color="primary" size="sm" className="m-2">
              Django
            </Button>
            <br />
            <h4 className="m-2">SCALE</h4>
            <Button color="primary" size="sm" className="m-2">
              1-20 People
            </Button>
            <Button color="primary" size="sm" className="m-2">
              10-30 People
            </Button>
            <Button color="primary" size="sm" className="m-2">
              20-50 People
            </Button>
            <Button color="primary" size="sm" className="m-2">
              50-100 People
            </Button>
            <br />
            <h4 className="m-2">INDUSTRY</h4>
            <Button color="primary" size="sm" className="m-2">
              Software
            </Button>
            <Button color="primary" size="sm" className="m-2">
              Internet
            </Button>
            <Button color="primary" size="sm"className="m-2">
              HealthCare
            </Button>
            <br />
          </Col>

          <Col lg="ml-auto">
            <CardDeck className="stats">
              <Card className="stats-card  shadow">
                <CardBody>
                  <Row>
                    <Col lg="2">
                      <CardImg className="image" src="/images/scalyr.png" />
                    </Col>
                    <Col lg="2">
                      <CardText className="address">
                        <h2>Scalyr</h2>
                        <h3>
                          California <br />
                        </h3>
                        <h3>1-50 people </h3>
                        <h5>5 openings</h5>
                      </CardText>
                    </Col>
                  </Row>
                  <div className="Button">
                    <Button className="Button1" size="sm">
                      Server Monitoring
                    </Button>
                    <Button className="Button1" size="sm">
                      Log Search
                    </Button>
                    <Button className="Button1" size="sm">
                      Alerting
                    </Button>
                    <Button className="Button1" size="sm">
                      Server Metrics
                    </Button>
                    <Button className="Button1" size="sm">
                      Log Aggregation
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </CardDeck>

            <CardDeck className="stats">
              <Card className="stats-card shadow">
                <CardBody>
                  <Row>
                    <Col lg="3">
                      <CardImg className="image" src="/images/loom.png" />
                    </Col>
                    <Col lg="9">
                      <CardText>
                        <h2>Loom</h2>
                        <h3>
                          San Frasisco <br />
                        </h3>
                        <h3>1-1000 people </h3>
                        <h5>10 openings</h5>
                      </CardText>
                    </Col>
                  </Row>
                  <div className="Button">
                    <Button className="Button1" size="sm">
                      Micro-mobility
                    </Button>
                    <br />
                    <Button className="Button1" size="sm">
                      Bike sharing
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </CardDeck>

            <CardDeck className="stats">
              <Card className="stats-card shadow">
                <CardBody>
                  <Row>
                    <Col lg="3">
                      <CardImg className="image" src="/images/dott.png" />
                    </Col>
                    <Col lg="9">
                      <CardText>
                        <h2>Dott</h2>
                        <h3>
                          Amsterdam <br />
                        </h3>
                        <h3>100-150 people </h3>
                        <h5>10 openings</h5>
                      </CardText>
                    </Col>
                  </Row>
                  <div className="Button">
                    <Button className="Button1" size="sm">
                      Integration solutions
                    </Button>
                    <Button className="Button1" size="sm">
                      Auomation
                    </Button>
                    <Button className="Button1" size="sm">
                      Stategic consulting
                    </Button>
                    <Button className="Button1" size="sm">
                      Software Development
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </CardDeck>

            <CardDeck className="stats">
              <Card className="stats-card shadow">
                <CardBody>
                  <Row>
                    <Col lg="3">
                      <CardImg className="image" src="/images/terrazo.png" />
                    </Col>
                    <Col lg="9">
                      <CardText>
                        <h2>Terazo</h2>
                        <h3>
                          Virginia <br />
                        </h3>
                        <h3>1-100 people </h3>
                        <h5>3 openings</h5>
                      </CardText>
                    </Col>
                  </Row>
                  <div className="Button">
                    <Button className="Button1" size="sm">
                      Finacial services
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </CardDeck>
          </Col>

          <Col lg="auto">
            <CardDeck className="stats">
              <Card className="stats-card shadow">
                <CardBody>
                  <Row>
                    <Col lg="3">
                      <CardImg
                        className="image"
                        src="/images/missionlane.png"
                      />
                    </Col>
                    <Col lg="9">
                      <CardText>
                        <h2>Mission Lane</h2>
                        <h3>
                          San Fransisco <br />
                        </h3>
                        <h3>100-150 people </h3>
                        <h5>5 openings</h5>
                      </CardText>
                    </Col>
                  </Row>
                  <div className="Button">
                    <Button className="Button1" size="sm">
                      Predictive Technology
                    </Button>
                    <Button className="Button1" size="sm">
                      Markeying Automation
                    </Button>
                    <Button className="Button1" size="sm">
                      Business Intelligence
                    </Button>
                    <Button className="Button1" size="sm">
                      Customer Retention
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </CardDeck>

            <CardDeck className="stats">
              <Card className="stats-card shadow">
                <CardBody>
                  <Row>
                    <Col lg="3" sm="3">
                      <CardImg className="image" src="/images/Bridg.png" />
                    </Col>
                    <Col lg="9">
                      <CardText>
                        <h2>Bridg</h2>
                        <h3>
                          Los Angeles <br />
                        </h3>
                        <h3>1-50 people </h3>
                        <h5>5 openings</h5>
                      </CardText>
                    </Col>
                  </Row>
                  <div className="Button">
                    <Button className="Button1" size="sm">
                      Venture capital Firm
                    </Button>
                    <br />
                    <Button className="Button1" size="sm">
                      Private equity
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </CardDeck>

            <CardDeck className="stats">
              <Card className="stats-card shadow">
                <CardBody>
                  <Row>
                    <Col lg="3">
                      <CardImg
                        className="image"
                        src="/images/goodwatercapital.png"
                      />
                    </Col>
                    <Col lg="9">
                      <CardText>
                        <h2>Goodwater Capital</h2>
                        <h3>California</h3>
                        <h3>1-30 people </h3>
                        <h5>5 openings</h5>
                      </CardText>
                    </Col>
                  </Row>
                  <div className="Button">
                    <Button className="Button1" size="sm">
                      Predictive Technology}
                    </Button>
                    <Button className="Button1" size="sm">
                      Marketing Automation
                    </Button>
                    <Button className="Button1" size="sm">
                      Business Intelligence
                    </Button>
                    <Button className="Button1" size="sm">
                      Customer Retention
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </CardDeck>
          </Col>
        </Row>
  
    </div>
  );
}

export default Company;
