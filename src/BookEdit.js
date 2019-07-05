import React, { Component } from 'react';
import axios from 'axios';
import {Image,Container,Row,Col,Form,Card,Button,ListGroup,Modal} from 'react-bootstrap'
import Book from './Book';


class BookEdit extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        book:{}
      };
      this.saveData= this.saveData.bind(this)
    }

    saveData(){
        let book  ={}
        console.log("price", this.inputPrice.value)
        book.price=this.inputPrice.value;
        book.quantity = this.inputQuantity.value;
        if(this.props.book.id){
            axios.put("http://localhost:8080/books/"+this.props.book.id, book)
                .then(rsp =>{
                    console.log("update sucessful",rsp.data)
                })
        }
        else{
            book.imageLinks = this.props.book.imageLinks
            book.title = this.props.book.title
            book.description = this.props.book.description
            book.authors = this.props.book.authors
            axios.post("http://localhost:8080/books/", book)
            .then(rsp =>{
                console.log("save sucessful",rsp.data)
            })
        }
        
    }
  
    render() {
        console.log(this.props.book)
      const { open } = this.state;
      return (
          <Container>
            <Row>
                <Col sm={6} >
                <Image src={this.props.book.imageLinks && this.props.book.imageLinks.thumbnail} rounded height="500"/>
                </Col>
                <Col sm={6}>
                <Row> 
                    <Col>
                        {this.props.book.title}
                    </Col>
                {this.props.book.description}
                <Form>
                    <Form.Group >
                        <Form.Label>Update Price</Form.Label>
                        <Form.Control type="number"  
                        defaultValue={this.props.book.price} 
                        ref={(n) => {this.inputPrice = n}}
                         />
                    </Form.Group>
                   
                    <Form.Group >
                        <Form.Label>Update Quantity</Form.Label>
                        <Form.Control type="number"
                         defaultValue={this.props.book.quantity}
                         ref={(n) => {this.inputQuantity = n}}
                          />
                    </Form.Group>
                    <Button variant="primary"  onClick={()=>{this.saveData()}}>
                    Save Changes
                    </Button>
                    </Form>
                    </Row>
                </Col>
            </Row>
            </Container>
      );
    }
  }
  
  export default BookEdit