import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import Book from './Book'
import './App.css';
import {Navbar,Nav,Container,Row,Col} from 'react-bootstrap'

class MyNav extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
    //   bookList: []
    };
  }
//   componentWillMount(){
//     axios.get("http://localhost:8080/books/")
//     .then(rsp => {
//         // console.log(rsp.data)
//         this.setState({bookList:rsp.data})
//     })
//   }
  render() {
    return (
      <div >
              <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">More deets</Nav.Link>
                  <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
    
      </div>
    );
  }
}

export default MyNav;
