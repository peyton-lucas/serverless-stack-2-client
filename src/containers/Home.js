import React, { Component } from "react";
import { API } from "aws-amplify";
import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import "./Home.css";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: []
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      // const farms = await this.data();
      this.setState({ data });
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }
  // Refactor for dashboard
  // data() {
  //   return API.get("farms", "/farms");
  // }

  renderLander() {
    return (
      <div className="lander">
        <h1>Studistics</h1>
        <p>A livestock breeding app</p>
        <div>
          <Link to="/login" className="btn btn-info btn-lg">
            Login
          </Link>
          <Link to="/signup" className="btn btn-success btn-lg">
            Signup
          </Link>
        </div>
      </div>
    );
  }
  // Refactor for the dashboard
  renderDashboard() {
    return (
      <div className="dashboard">
        {!this.state.isLoading && this.renderNotesList(this.state.data)}
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {/*{this.props.isAuthenticated ? this.renderDashboard() : this.renderLander()}*/}
        {this.renderLander()}
      </div>
    );
  }
}
