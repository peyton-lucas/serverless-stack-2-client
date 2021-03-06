import React, { Component } from "react";
import { Col, Card, Dropdown } from "react-bootstrap";
import BellCurve from "./BellCurve.js";
// Make this a stateless component that receives props from dashboard state
// Background styling is implemented via bg prop (e.g. bg="primary", etc.)
// Text color is implemented via text prop (e.g. text="white")
export default class DashboardCard extends Component {
  render() {
    const cardVal = this.props.content.cardValue;
    return(
      <Col {...this.props}>
        <Card>
          <Card.Body>
            <Card.Title className={this.props.content.cardStyle}>
              {this.props.cardTitle}
            </Card.Title>
            // Check to see how to ensure ternary operato
            // returns right value based on input
            {cardVal ? (
              <BellCurve />
            ) : (
              <Card.Text className={this.props.content.cardText}>
                {cardVal}
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
