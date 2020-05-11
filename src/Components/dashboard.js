import React, { Component } from "react";
import { Jumbotron, Button } from "reactstrap";
import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";
import "./dashboard.css";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="Dashboard">
          <h1 className="h3 mb-2 text-gray-800">Dashboard</h1>
        </div>
        <div className="content">
          <h2>Good Job, Aron</h2>
          <p>
            You have finished all you tasks for this week.
            <br />
            Keep it up and imrove your results!
          </p>
        </div>
        <CardDeck className="stats">
          <Card className="stats-card">
            <CardBody>
              <CardTitle>Card title</CardTitle>

              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
            </CardBody>
          </Card>
          <Card className="stats-card">
            <CardBody>
              <CardTitle>Card title</CardTitle>

              <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText>
            </CardBody>
          </Card>
          <Card className="stats-card">
            <CardBody>
              <CardTitle>Card title</CardTitle>

              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
            </CardBody>
          </Card>
          <Card className="stats-card">
            <CardBody>
              <CardTitle>Card title</CardTitle>

              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
            </CardBody>
          </Card>
        </CardDeck>
        <div>
          <CardDeck>
            <Card className="box1-1">
              <CardBody>
                <CardTitle>Card title</CardTitle>

                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
              </CardBody>
            </Card>
            <Card className="box1-2">
              <CardBody>
                <CardTitle>Card title</CardTitle>

                <CardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </CardText>
              </CardBody>
            </Card>
            <Card className="box1-3">
              <CardBody>
                <CardTitle>Card title</CardTitle>

                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </CardText>
              </CardBody>
            </Card>
          </CardDeck>
          <CardDeck>
            <Card className="box2-1">
              <CardBody>
                <CardTitle>Card title</CardTitle>

                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
              </CardBody>
            </Card>
            <Card className="box2-2">
              <CardBody>
                <CardTitle>Card title</CardTitle>

                <CardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </CardText>
              </CardBody>
            </Card>
            <Card className="box2-3">
              <CardBody>
                <CardTitle>Card title</CardTitle>

                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </CardText>
              </CardBody>
            </Card>
          </CardDeck>
        </div>
      </div>
    );
  }
}
export default Home;
