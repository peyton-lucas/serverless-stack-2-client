import React, { Componet } from "react";
import { Col, Card, Dropdown } from "react-bootstrap";

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
    const carVal = this.state.cardValue;
    return(
      <Col breakpoint1={breakpointVal1} breakpoint2={breakpointVal2}>
        <Card>
          <Card.Body>
            <Card.Title className={this.state.cardStyle}>
              {this.state.cardTitle}
            </Card.Title>
            // Check to see how to ensure ternary operato
            // returns right value based on input
            {cardVal ? (
              <normalDistribution />
            ) : (
              <Card.Text className={this.state.cardText}>
                {this.state.cardValue}
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
