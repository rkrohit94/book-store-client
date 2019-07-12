import React, { Component } from 'react';
import axios from 'axios';
import {Image,Container,Row,Form,Card,Button,ListGroup,Modal} from 'react-bootstrap'

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: this.props.book,
      show:false
    };

    this.handleClose= this.handleClose.bind(this)
    this.changeToEdit= this.changeToEdit.bind(this)
  }

//   toggleShow = () => {
//     this.setState(state => ({ isShow: !state.isShow }));
//   };

changeToEdit(book){
    this.props.changeToEdit(book)
    // this.handleShow(book)
}

deleteBook(){
    axios.delete("http://localhost:8080/books/"+this.props.book.id)
    .then(rsp => {
        // console.log(rsp.data)
        this.setState({bookList:rsp.data})
        this.handleClose()
    })
}

handleClose() {
    this.setState({ show: false },()=>{
      window.location.reload()
    });
  }

  handleShow() {
    this.setState({ show: true });
  }


  render() {
    let buttonDiv=""
      if(this.props.view=="EditBook"){
          buttonDiv=
                <div>
                    <Button id="editButton" onClick={() =>this.changeToEdit(this.props.book)}>Edit</Button>
                <Button id="deleteButton" onClick={() =>this.handleShow(this.props.book.id)}>Delete</Button>
                </div>
                
      }else{
        buttonDiv=  <Button id="addStoreButton" onClick={() =>this.changeToEdit(this.props.book)}>Add To Store</Button>
      }
    return (
      <div>
            <Card style={{ width: '18rem' ,margin:'1em'}}>
            <Card.Img variant="top" src={this.props.book.imageLinks && this.props.book.imageLinks.thumbnail}  height="220" width="5"/>
            <Card.Body>
                <Card.Title style={{ height: '40px'}}>{this.props.book && this.props.book.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted" style={{ height: '40px'}}>{this.props.book.authors && this.props.book.authors.join(", ")}</Card.Subtitle>
                

                <ListGroup variant="flush">
                    <ListGroup.Item>$ {this.props.book.price} </ListGroup.Item>
                    <ListGroup.Item>Quantity:{this.props.book.quantity}</ListGroup.Item>
                </ListGroup>
                <Card.Footer>
                    {buttonDiv}
                </Card.Footer>
            </Card.Body>
            </Card>

            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Are you sure you want to delete: {this.props.book.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.props.book.description}
                    </Modal.Body>       
            
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                Cancel
                </Button>
                <Button variant="primary" type="submit" onClick={()=>{this.deleteBook()}}>
                Delete
                </Button>
            </Modal.Footer>
            </Modal>
      </div>
    );
  }
}

export default Book;