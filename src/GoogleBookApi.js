import React, { Component } from 'react';
import axios from 'axios';
import {Image,FormControl,Row,Col,Form,Card,Button,ListGroup,Modal} from 'react-bootstrap'
import Book from './Book';


class BookEdit extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        bookList: [],
      };
      this.getData= this.getData.bind(this)
      this.changeToEdit=this.changeToEdit.bind(this)
    }
    changeToEdit(book){
      this.props.changeToEdit(book)

    }

    getData(){
        axios.get("http://localhost:8080/books/api/"+this.input.value)
        .then(rsp => {
            // console.log(rsp.data)
            this.setState({bookList:rsp.data[0].items},()=>{
                console.log(this.state.bookList)
            })
        })
    }
  
    render() {
        let bookDiv =this.state.bookList.map(book =>{
            return ( <Col  > <Book book={book.volumeInfo} changeToEdit={this.changeToEdit}  view="AddBook" /> </Col>)
          })

      return (
        <div>
            <Row>    
            <Col  className="bookHeading">  <h1>Add Book </h1> </Col>  
            </Row>

            <Row>
                  <Col >
                    <Form inline style={{margin:'1em'}} >
                    <FormControl  type="text" 
                             ref={(n) => {this.input = n}}
                            placeholder="Search"
                            className="mr-sm-2" />
                 
                      <Button variant="primary"  onClick={this.getData}>
                      search
                      </Button>
                      </Form> 
                    </Col>                         
            </Row>          
            <Row>
            {bookDiv}
            </Row>
           
        </div>
            
      );
    }
  }
  
  export default BookEdit