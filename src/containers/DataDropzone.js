import React, { Component } from "react";
import { API } from "aws-amplify";
import { Container, Row, Col, Form } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import { s3Upload } from "../libs/awsLib";
// import config from "../config";
import "./UploadFile.css";

export default class UploadFile extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      isLoading: null,
      content: ""
    };
  }

  createCSV(csv) {
    return API.post("farms", "/farms", {
      body: csv
    });
  }

  validateForm() {
    return this.state.content.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleFileChange = event => {
    this.file = event.target.files[0];
  }

  handleSubmit = async event => {
    event.preventDefault();

    if (this.file && this.file.size > MAX_ATTACHMENT_SIZE) {
      // alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`);
      return;
    }

    this.setState({ isLoading: true });

    try {
      const attachment = this.file
        ? await s3Upload(this.file)
        : null;

      await this.createCSV({
        attachment,
        content: this.state.content
      });
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div className="UploadFile">
        <Container>
          <Row>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="content">
                <Form.Control
                  onChange={this.handleChange}
                  value={this.state.content}
                  componentClass="textarea"
                />
              </Form.Group>
              <Form.Group controlId="file">
                <Form.Label>Attachment</Form.Label>
                <Form.Control onChange={this.handleFileChange} type="file" />
              </Form.Group>
              <LoaderButton
                block
                bsStyle="primary"
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
                isLoading={this.state.isLoading}
                text="Upload Data"
                loadingText="Uploading data…"
              />
            </Form>
          </Row>
        </Container>
      </div>
    );
  }
}
