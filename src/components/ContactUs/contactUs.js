import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ReactDOM from "react-dom";

const ContactUs = () => {
  const containerStyle = {
    margin: "50px auto",
  };

  const colstyle = {
    // margin: "10px",
    padding: "20px",
  };

  const inputcolstyle = {
    // margin: "10px auto",
    margin: "2.5% 12.5% 2.5% 2%",
  };

  const rowstyle = {
    margin: "10px auto",
    // padding: "20px",
  };

  const mapstyle = {
    // height: "80%",
    // border: "1px solid e1f1ec",
    borderRadius: "10px",
  };

  const inputboxstyle = {
    border: "none",
    // borderBottom: "3px solid ",
    backgroundColor: "#e1f1ec",
  };

  return (
    <div className="">
      <Container style={containerStyle}>
        <Row>
          <Col style={colstyle}>
            <br />
            <li>
              #Room no. 311, Breag Hostle, IIT Jammu, Nagrota, Jammu
            </li>
            <br />
            <li>
              <b>Phone: </b> +91-7658835605
            </li>
            <br />
            <li>
              <b>Email: </b>agrawal.333.shreyansh@gmail.com
            </li>
            <br />
            <li>
              <b>LinkedIn: </b>https://www.linkedin.com/in/shreyansh-agrawal-3b7417205/
            </li>
            <br />
            <li>
              <b>Timings: </b>Anytime
            </li>
          </Col>
          {/* <Col style={colstyle}>
            <header className="">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <h3 style={inputcolstyle}> Send me a Message </h3>
                
                <Row style={rowstyle}>
                  <Col>
                    <label> Name:</label>
                    <br />
                    <input
                      style={inputboxstyle}
                      type="name"
                      value={name}
                      required
                      onChange={(e) => {
                        handleNameChange(e);
                      }}
                    />
                  </Col>
                  <Col>
                    <label> Age:</label>
                    <br />
                    <input
                      style={inputboxstyle}
                      type="number"
                      value={age}
                      required
                      onChange={(e) => {
                        handleAgeChange(e);
                      }}
                    />
                  </Col>
                </Row>
                <Row style={rowstyle}>
                  <Col>
                    <label> Phone No.:</label>
                    <br />
                    <input
                      style={inputboxstyle}
                      type="number"
                      value={phone}
                      required
                      onChange={(e) => {
                        handlePhoneChange(e);
                      }}
                    />
                  </Col>
                  
                </Row>

                <Row style={inputcolstyle}>
                  <label>Subject:</label>
                  <br />
                  <input
                    style={inputboxstyle}
                    type="text"
                    value={subject}
                    required
                    onChange={(e) => {
                      handleSubjectChange(e);
                    }}
                  />
                </Row>
                <Row style={inputcolstyle}>
                  <label>Write here:</label>
                  <textarea
                    style={inputboxstyle}
                    value={content}
                    cols="30"
                    rows="8"
                    required
                    onChange={(e) => {
                      handleContentChange(e);
                    }}
                  ></textarea>
                </Row>

                <Row style={inputcolstyle}>
                  <br/>
                  <Button type="submit" variant="success" value="Submit">
                    Submit
                  </Button>
                </Row>
              </form>
            </header>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
