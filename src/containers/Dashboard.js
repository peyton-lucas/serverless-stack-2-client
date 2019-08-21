import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import { DashboardCard } from '../components/DashboardCard.js';

// New KPIs:
// Growth rate: percentage-based for current term v. birthrate flock
// Percentage of contemporary groups that grew at or above target

export default class Visualization extends Component {
  // Initiate constructor function
  constructor(props) {
    super(props);
    // Use spread operator to apply all children props
    // to component instance when rendered on dashboard
    this.state = {
      // Assume value is an object (e.g. {md: "3", lg: "6"})
      // reactjs.org/docs/jsx-in-depth.html#spread-attributes
      data: [],
      userId: null,
      breakpoints: null,
      content: {
        cardTitle: null,
        cardText: null,
        cardValue: null
      }
    };
  }

  render() {
    console.log("Hello testing testing 123!");
    return(
      <div className="Vizualization">
        <Container>
          Hello world!
        </Container>
      </div>
    );
  }
}
