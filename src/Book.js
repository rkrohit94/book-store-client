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
    console.log(book)
    this.props.changeToEdit(book)
    // this.handleShow(book)
}

deleteBook(id){
    console.log(id)
    axios.delete("http://localhost:8080/books/"+id)
    .then(rsp => {
        // console.log(rsp.data)
        this.setState({bookList:rsp.data})
    })
}

handleClose() {
    this.setState({ show: false });
  }

  handleShow(book) {
    console.log(book)
    this.setState({ show: true });
  }

 saveData(){
     console.log(this.input.value)
 } 

  render() {
    let buttonDiv=""
      console.log("inside book",this.props.view)
      if(this.props.view=="EditBook"){
          buttonDiv=
                <div>
                    <Button onClick={() =>this.changeToEdit(this.props.book)}>Edit</Button>
                <Button onClick={() =>this.deleteBook(this.props.book.id)}>Delete</Button>
                </div>
                
      }else{
        buttonDiv=  <Button onClick={() =>this.changeToEdit(this.props.book)}>Add To Store</Button>
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

            {/* <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{this.props.book.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{this.props.book.description}
                    <Form>
                    <Form.Group >
                        <Form.Label>Update Price</Form.Label>
                        <Form.Control type="number"  
                        defaultValue={this.props.book.price} 
                        inputRef={(ref) => {this.inputPrice = ref}}
                         />
                    </Form.Group>
                   
                    <Form.Group >
                        <Form.Label>Update Quantity</Form.Label>
                        <Form.Control type="number"
                         defaultValue={this.props.book.quantity}
                         inputRef={(ref) => {this.inputQuantity = ref}}
                          />
                    </Form.Group>
                    </Form>
                    </Modal.Body>       
            
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                Close
                </Button>
                <Button variant="primary" type="submit" onClick={()=>{this.saveData()}}>
                Save Changes
                </Button>
            </Modal.Footer>
            </Modal> */}


            
        
      </div>
    );
  }
}

export default Book;