import React, { Component } from 'react';
import axios from 'axios';
import {Image,Container,Row,Col,Form,Card,Button,Alert,Modal} from 'react-bootstrap'
import Book from './Book';


class BookEdit extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        book:{},
        message:""
      };
      this.saveData= this.saveData.bind(this)
      this.message=""
    }

    saveData(){
        let book  ={}
        book.price=this.inputPrice.value;
        book.quantity = this.inputQuantity.value;
        if(this.props.book.id){
            axios.put("http://localhost:8080/books/"+this.props.book.id, book)
                .then(rsp =>{
                    console.log("update sucessful",rsp.data)
                    this.createAlert("Book sucessfully updated")
                })
        }
        else{
            book.imageLinks = this.props.book.imageLinks
            book.title = this.props.book.title
            book.description = this.props.book.description
            book.authors = this.props.book.authors
            axios.post("http://localhost:8080/books/", book)
            .then(rsp =>{
                console.log("Book sucessfully Add to Store",rsp.data)
                this.createAlert("Book sucessfully added to Store")
            })
        }
        
    }

    createAlert(message){
     let alert =  <Alert  variant="success">
                        {message}
                     </Alert>
        this.setState({message:alert})             
    }


  
    render() {
        var heading= this.props.book.id?"Edit Book":"Add Book"
       this.message
      return (
          <Container>
              <Row>
                  {this.state.message}
              </Row>
              <Row>
                 <Col  className="bookHeading">  <h1>{heading}</h1> </Col>
              </Row>
            <Row>
                <Col sm={6} >
                <Image src={this.props.book.imageLinks && this.props.book.imageLinks.thumbnail} rounded height="500"/>
                </Col>
                <Col sm={6}>
                <Row> 
                    <Col>
                        <h3>{this.props.book.title}</h3>
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