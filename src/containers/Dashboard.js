import React, { Component } from 'react';
import { Container, Row, Col, Card, CardDeck } from 'react-bootstrap';
import { NavBar } from "../components/NavBar";
import Bellcurve from './Bellcurve';

export default class Dashboard extends Component {
  // Initiate constructor function
  constructor(props) {
    super(props);

    this.state = {
      sixtyDays: {
        backgroundColor: '#d85f7f'
      },
      ninetyDays: {
        backgroundColor: '#1ACCE0'
      },
      oneTwentyDays: {
        backgroundColor: '#895FD8'
      }
    };
  }

  render() {
    return(
        <Container>
          <Row>
            <Col>
              <Bellcurve color={this.state.sixtyDays.backgroundColor} />
            </Col>
            <Col>
              <Bellcurve color={this.state.ninetyDays.backgroundColor} />
            </Col>
            <Col>
              <Bellcurve color={this.state.oneTwentyDays.backgroundColor} />
            </Col>
          </Row>
        </Container>
    );
  }
}


