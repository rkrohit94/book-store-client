import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import Book from './Book'
import './App.css';
import {Navbar,FormControl,Form,Row,Col,Button} from 'react-bootstrap'

class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      bookList: []
    };
    this.changeToEdit= this.changeToEdit.bind(this)
    this.changeToAdd = this.changeToAdd.bind(this)
    this.searchBook = this.searchBook.bind(this)
    this.changeToLogs = this.changeToLogs.bind(this)
  }

  searchBook(){
    axios.get("http://localhost:8080/books/search/"+this.inputSearch.value)
    .then(rsp => {
        // console.log(rsp.data)
        this.setState({bookList:rsp.data})
    })
  }

  changeToEdit(book){
    this.props.changeToEdit(book)
  }

  changeToAdd(){
    this.props.changeToAdd();
  }

  changeToLogs(){
    this.props.changeToLogs()
  }

  componentWillMount(){
    axios.get("http://localhost:8080/books/")
    .then(rsp => {
        // console.log(rsp.data)
        this.setState({bookList:rsp.data})
    })
  }
  render() {
    let bookDiv =this.state.bookList.map((book) =>{
      return ( <Col  > <Book  book={book} changeToEdit={this.changeToEdit} view="EditBook"/> </Col>)
    })
    return (
      <div >
          <Row>
            <Col  className="bookHeading">  <h1>Books Inventory</h1> </Col>
            <Col>
              <Button variant="primary" style={{margin:'1em',textAlign:'right'}}  onClick={()=>this.changeToAdd()}>
                Add Book
              </Button>
            </Col>
            <Col>
              <Button variant="primary" style={{margin:'1em',textAlign:'right'}}  onClick={()=>this.changeToLogs()}>
                Audit Logs
              </Button>
            </Col>
            <Col>
            <Form inline style={{margin:'1em'}} >
              <FormControl  type="text" 
                            ref={(n) => {this.inputSearch = n}}
                            placeholder="Search"
                            className="mr-sm-2" />
              <Button variant="outline-success" onClick={()=>this.searchBook()}>Search</Button>
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

export default App;
