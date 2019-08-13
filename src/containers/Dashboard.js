import React, { Componet } from "react";
import { Container, Row } from "react-bootstrap";
// import LoaderButton from "../components/LoaderButton";
import "./Dashboard.css";

export default class Visualization extends Component {
  // Initiate constructor function
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      userID: null
    };
  }

  componentDidMount() {
    // Fetch data from AWS RDS here to deliver to
    this.setState(data: rows);
  }

  render() {
    return(
      <div className="Vizualization">
        <Container>
          // KPI Metrics
          <Row>
            Make a Component for cards.....
            Pass this.state.whatever.... --> props
            <Col lg={3} sm={6}>
              <Card>
                <Card.Body>
                  <Card.Title className="text-muted">
                    {this.props.text}
                  </Card.Title>
                  <Card.Text className="pt-4 text-x-large">
                    {this.state.value}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Card
              size={this.props.whatever}
              somethingElse={}
              somethingElseElse={}
            />

            <Col lg={3} sm={6}>
              <Card>
                <Card.Body>
                  <Card.Title className="text-muted">
                    Revenue per Breeding Female
                  </Card.Title>
                  <Card.Text className="pt-4 text-x-large">
                    {this.state.revPerFemale}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} sm={6}>
              <Card>
                <Card.Body>
                  <Card.Title className="text-muted">
                    Cost per Cwt. of Weaned Calf
                  </Card.Title>
                  <Card.Text className="pt-4 text-x-large">
                    {this.state.costWeanedCalf}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

          </Row>
          // KPI + Mini Chart(s)
          <Row>

            <Col md={4} lg={3}>
            </Col>

            // Create Card Component for vizualization
            <Col md={8} lg={9}>
              <Card>
                <Row>
                  <Col sm={4}>
                  // ChartJS Component
                  </Col>
                  <Col sm={4}>
                  // ChartJS Component
                  </Col>
                  <Col sm={4}>
                  // ChartJS Component
                  </Col>
                </Row>
              </Card>
            </Col>

          </Row>
          // Chart(s)
          <Row>

            <Col md={6} md={4}>
              <Card>
                <Line
                data={this.state.lineData}
                 />
              </Card>
            </Col>

            <Col md={6} md={4}>
              <Card>
              </Card>
            </Col>

          </Row>

        </Container>
      </div>
    );
  }
}
