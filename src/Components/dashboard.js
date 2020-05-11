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

import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

class Home extends Component {
  render() {
    return (
      <div>
        <FaSearch className="search" />
        <FaRegUser className="user" />
        <div className="dashboard">
          <h1 className="h3 mb-2 text-gray-800">Dashboard</h1>
        </div>
        <Card className="content">
          <CardBody>
            <CardTitle className="salutation">Good Job, Aron !</CardTitle>
            <CardText className="update">
              You have finished all you tasks for this week.
              <br />
              Keep it up and imrove your results!
            </CardText>
          </CardBody>
        </Card>
        <CardDeck className="stats">
          <Card className="stats-card">
            <CardBody>
              <CardTitle className="Title">Companies</CardTitle>

              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
            </CardBody>
          </Card>
          <Card className="stats-card">
            <CardBody>
              <CardTitle className="Title">Projects</CardTitle>

              <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText>
            </CardBody>
          </Card>
          <Card className="stats-card">
            <CardBody>
              <CardTitle className="Title">Students</CardTitle>

              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
            </CardBody>
          </Card>
          <Card className="stats-card">
            <CardBody>
              <CardTitle className="Title">Challenges</CardTitle>

              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
            </CardBody>
          </Card>
        </CardDeck>
        <div className="box">
          <h2>Recently updated challenges</h2>
          <CardDeck className="box1">
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
          <CardDeck className="box2">
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
