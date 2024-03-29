import React, { Component } from 'react';
import axios from 'axios';
import MyNav from './MyNav'
import App from './App'
import Logs from './Logs'
// import {Image,Container,Row,Form,Card,Button,ListGroup,Modal} from 'react-bootstrap'
import BookEdit from './BookEdit';
import GoogleBookApi from './GoogleBookApi';

class Route extends Component {
  constructor(props) {
    super(props);

    this.state = {
     toggle:'home',
     selectedBook:{}
    };

    this.changeToEdit= this.changeToEdit.bind(this)
    this.changeToAdd= this.changeToAdd.bind(this)
    this.changeToLogs = this.changeToLogs.bind(this)
  }

  changeToEdit(book){
    this.setState({selectedBook:book, toggle:'edit'})
  }

  changeToAdd(){
    this.setState({toggle:'add'})
  }

  changeToLogs(){
    this.setState({toggle:'logs'})
  }

  render(){

    switch (this.state.toggle) {
        case 'home':
          return (
            <div>
              <MyNav />
              <App changeToEdit={this.changeToEdit}
               changeToAdd ={this.changeToAdd} changeToLogs={this.changeToLogs}/>
            </div>
          )
          break;

        case 'edit':
        return (
            <div>
            <MyNav />
            <BookEdit  book={this.state.selectedBook}/>
            </div>
        )
        break;  

        case 'add':
            return (
                <div>
                <MyNav />
                <GoogleBookApi changeToEdit={this.changeToEdit} />
                </div>
            )
            break;  
      
        case 'logs':
          return (
              <div>
              <MyNav />
              <Logs />
              </div>
          )
          break;  
      }  
  }
}

export default Route