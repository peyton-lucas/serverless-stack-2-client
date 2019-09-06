import React, { Component } from "react";
import { API } from "aws-amplify";
import { s3Upload } from "../libs/awsLib";
import Dropzone from "react-dropzone";
// import config from "../config";
import styles from "./styles.scss";
import styled from 'styled-components';

export default class UploadFile extends Component {
  constructor(props) {
    super(props);

    this.file = null;

    this.state = {
      isLoading: null
    };
  }

  createCSV(csv) {
    return API.post("farms", "/farms", {
      body: csv
    });
  }

  handleOnDrop = async acceptedFiles => {
    this.file = acceptedFiles.target.files[0];

    acceptedFiles.preventDefault();

    if (this.file && this.file.size > MAX_ATTACHMENT_SIZE) {
      alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`);
      return;
    }

    this.setState({ isLoading: true });

    try {
      const attachment = this.file
        ? await s3Upload(this.file)
        : null;

      this.createCSV({
        attachment
      });
      this.props.history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    const getColor = (props) => {
      if (props.isDragAccept) {
        return '#00e676';
      }
      if (props.isDragReject) {
        return '#ff1744';
      }
      if (props.isDragActive) {
        return '#2196f3';
      }
      return '#eeeeee';
    }

    const Container = styled.div`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 100px;
          border-width: 2px;
          border-radius: 2px;
          border-color: ${props => getColor(props)};
          border-style: dashed;
          background-color: #fafafa;
          color: #bdbdbd;
          outline: none;
          transition: border .24s ease-in-out;
          img: width 150px;
        `;

    const maxSize = MAX_ATTACHMENT_SIZE;
    return (
      <div className="container">

        <Dropzone
          onDrop={this.handleOnDrop}
          accept="text/csv"
          minSize={0}
          maxSize={maxSize}
        >
          {({getRootProps, getInputProps, isDragActive, isDragReject, rejectedFiles}) => {
            const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;
            return (

              <div className="container">
                <Container {...getRootProps()}>
                  <img src="../public/dna-solid.svg" />
                  <input {...getInputProps()} />
                  {!isDragActive && 'Click here or drop a file to upload!'}
                  {isDragActive && !isDragReject && "Drop your data here"}
                  {isDragReject && "File type not accepted, sorry!"}
                  {isFileTooLarge && (
                    <div className="text-danger mt-2">
                      File is too large.
                    </div>
                  )}
                </Container>
              </div>
            )}
          }
        </Dropzone>
      </div>
    );
  }
}