import React, { Component, Fragment } from "react";
import { Auth } from "aws-amplify";
import { Link, withRouter } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Nav, Navbar, Container } from "react-bootstrap";
import Routes from "./Routes";
import { connect } from "react-redux";
import { logout } from "./src/store/actions";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  async componentDidMount() {
    try {
      await Auth.currentSession();
      this.userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = async event => {
    // Why is this unresolved var? Imported line 7
    this.props.logout();

    this.userHasAuthenticated(false);

    this.props.history.push("/login");
  }

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating &&
      <div className="App container">
        <Navbar className="bg-light justify-content-between">
          <Container>
            <Navbar.Brand>
              <Link to="/">Studistics</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="justify-content">
                {this.state.isAuthenticated
                  ? <Nav.Item onClick={this.handleLogout}>Logout</Nav.Item>
                  : <Fragment>
                    {/*<Nav.Item>*/}
                    {/*    <Link to="/signup">Signup</Link>*/}
                    {/*</Nav.Item>*/}
                    <LinkContainer to="/signup">
                      <Nav.Link>Signup</Nav.Link>
                    </LinkContainer>
                    {/*<Nav.Item>*/}
                    {/*    <Link to="/login">Login</Link>*/}
                    {/*</Nav.Item>*/}
                    <LinkContainer to="/login">
                      <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                  </Fragment>
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes childProps={childProps} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default withRouter(connect(mapStateToProps,{logout})(App));