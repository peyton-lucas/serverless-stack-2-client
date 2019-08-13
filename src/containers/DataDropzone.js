import React, { Component } from "react";
import { API } from "aws-amplify";
import { Jumbotron, Spinner } from 'react-bootstrap'
import Dropzone from "react-dropzone";
import { s3Upload } from "..libs/awsLib";
import config from "../config";
import "./UploadCSV.css";

export default class UploadCSV extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      isLoading: null
    }
  }

  postCSV() {
    // Make sure to change API.endpoint.name = "farms" in src/index.js Line 28
    return API.post("farms", "/farms");
    // No need to post body content as none is collected during upload process
  }

  handleOnDrop = async acceptedFiles =>  {
    // Handle any errors in uploading CSV files within this function....
    // console.log(acceptedFiles);
    this.file = acceptedFiles.target.files[0];

    acceptedFiles.preventDefault();

    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`);
    }

    this.setState({ isLoading: true });

    try {
      const attachment = this.file
        ? await s3Upload(this.file)
        : null;

      await this.postCSV({
        attachment,
      });
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    return (
      <div>
        <Jumobtron>
          <img
            alt="dna"
            className="Helix"
            src="baseline-cloud_upload-24px.svg"
          />
          <h1>Click or Drop</h1>
          <Dropzone
            onDrop={this.handleOnDrop}
            minSize={0}
            maxSize={config.MAX_ATTACHMENT_SIZE}
            accept="text/csv"
          >
            {({ getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles }) => (
              const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > config.MAX_ATTACHMENT_SIZE;
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {!isDragActive && "Click here or drag a file to upload!"}
                {isDragActive && !isDragReject && "Drop your data here!"}
                {isDragReject && "Only CSVs are accepted, please use provided template!"}
                {isFileTooLarge && (
                  <div>
                    File is too large
                  </div>
                )}
              </div>
            )}
          </Dropzone>
          <Spinner
            animated="grow"
            variant="light"
          >
            Uploading...
          </Spinner>
        </Jumbotron>
      </div>
    );
  }
}
