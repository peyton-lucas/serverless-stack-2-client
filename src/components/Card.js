import React, { Componet } from "react";
import { Col, Card, Dropdown } from "react-bootstrap";
import HistogramBellCurve from "./HistogramBellCurve.js";

export default class Card extends Component {
  constructor() {
    super(props);
    // Use spread operator to apply all children props
    // to component instance when rendered on dashboard
    this.state = {
      breakpoints: {
        bp1: null,
        bp2: null,
        bpVal1: null,
        bpVal2: null,
      },
      content: {
        cardTitle: null,
        cardText: null,
        cardValue: null,
        titleStyle: null,
        textStyle: null
      }
    };
  }

  render() {
    const cardVal = this.state.content.cardValue;
    return(
      <Col breakpoint1={this.state.breakpoints.bpVal1} breakpoint2={this.state.breakpoints.bpVal2}>
        <Card>
          <Card.Body>
            <Card.Title className={this.state.content.cardStyle}>
              {this.state.cardTitle}
            </Card.Title>
            // Check to see how to ensure ternary operato
            // returns right value based on input
            {cardVal ? (
              <HistogramBellCurve />
            ) : (
              <Card.Text className={this.state.content.cardText}>
                {cardVal}
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
