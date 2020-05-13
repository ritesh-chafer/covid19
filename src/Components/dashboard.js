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
      <div className="main">
        <div className="row">
          <div className="col xs={12} sm={3} md ={2} lg={1}">
            <h1>Dashboard</h1>
          </div>
          <div className="col xsOffset={11} xs={1}">
            <FaRegUser
              style={{
                color: "#1F4DE4",
                fontSize: 40,
                height: 43,
                width: 43,
                float: "right",
                padding: "4px",
              }}
            />
            <FaSearch
              style={{
                color: "#1F4DE4",
                fontSize: 40,
                height: 43,
                width: 43,

                float: "right",
                padding: "4px",
              }}
            />
          </div>
        </div>

        <CardDeck className="introduction">
          <Card className="content">
            <CardBody>
              <img
                className="image"
                src="./images/Developer.svg"
                style={{
                  width: "340px",
                  height: "200px",
                  float: "right",
                  paddingRight: "50px",
                }}
              />
              <CardTitle className="salutation">Good Job, Aron ! </CardTitle>
              <CardText className="update">
                You have finished all you tasks for this week.
                <br />
                Keep it up and imrove your results!
              </CardText>
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
          <Card className="stats-card">
            <CardBody>
              <CardTitle className="Title">Projects</CardTitle>

              <CardText style={{ fontSize: "60px" }}>20</CardText>
            </CardBody>
          </Card>
          <Card className="stats-card">
            <CardBody>
              <CardTitle className="Title">Students</CardTitle>

              <CardText style={{ fontSize: "60px" }}>97</CardText>
            </CardBody>
          </Card>
          <Card className="stats-card">
            <CardBody>
              <CardTitle className="Title">Challenges</CardTitle>

              <CardText style={{ fontSize: "60px" }}>100</CardText>
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
          </div>
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
