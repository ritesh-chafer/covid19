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
      <container-fluid>
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
          <Col className="tabs" lg="4">
            <h4 className="m-1" style={{fontSize: '15px'}}><b>LOCATION</b></h4>
            <Button className="Button1" size="sm">San Fransisco</Button>
            <Button className="Button1" size="sm">New York</Button>
            <Button className="Button1" size="sm">London</Button>
            <Button className="Button1" size="sm">Bangalore</Button>
            <br />
            <h4 className="m-1" style={{fontSize: '15px'}}><b>TECHNOLOGY</b></h4>
            <Button className="Button1" size="sm">JavaScript</Button>
            <Button className="Button1" size="sm">NodeJS</Button>
            <Button className="Button1" size="sm">React</Button>
            <Button className="Button1" size="sm">Python</Button>
            <br />
            <h4 className="m-1" style={{fontSize: '15px'}}><b>SCALE</b></h4>
            <Button className="Button1" size="sm">1-10 People</Button>
            <Button className="Button1" size="sm">10-25 People</Button>
            <Button className="Button1" size="sm">25-50 People</Button>
            <Button className="Button1" size="sm">50-100 People</Button>
            <br />
            <h4 className="m-1" style={{fontSize: '15px'}}><b>INDUSTRY</b></h4>
            <Button className="Button1" size="sm">Software</Button>
            <Button className="Button1" size="sm">Hardware</Button>
            <Button className="Button1" size="sm">Business</Button>
            <Button className="Button1" size="sm">Health Care</Button>
            <br />
          </Col>

          <Col lg="4">
            <CardDeck className="stats">
              <Card className="stats-card  shadow">
                <CardBody>
                  <Row>
                    <Col sm="2" lg="3">
                      <CardImg className="image" src="/images/scalyr.png" style={{borderRadius: '20%'}} />
                    </Col>
                    <Col sm="3" lg="9">
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
                      <CardImg className="image" src="/images/loom.png" style={{borderRadius: '20%'}} />
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
                      <CardImg className="image" src="/images/dott.png" style={{borderRadius: '20%'}} />
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
                      <CardImg className="image" src="/images/terrazo.png" style={{borderRadius: '20%'}} />
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

          <Col lg="4">
            <CardDeck className="stats">
              <Card className="stats-card shadow">
                <CardBody>
                  <Row>
                    <Col lg="3">
                      <CardImg
                        className="image"
                        src="/images/missionlane.png"
                        style={{borderRadius: '20%'}}
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
                      <CardImg className="image" src="/images/Bridg.png" style={{borderRadius: '20%'}} />
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
                        style={{borderRadius: '20%'}}
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
      </container-fluid>
    </div>
  );
}

export default Company;
