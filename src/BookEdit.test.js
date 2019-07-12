import React from 'react';
import ReactDOM from 'react-dom';
import BookEdit from './BookEdit';

import {expect} from 'chai'
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()});


describe.only('Book Edit', () => {

    const book=  {
        "id": "5d1e2365efb006240d8d7f18",
        "title": "Sapiens",
        "authors": [
            "Yuval Noah Harari"
        ],
        "description": "THE MILLION COPY BESTSELLER Fire gave us power. Farming made us hungry for more. Money gave us purpose. Science made us deadly. This is the thrilling account of our extraordinary history – from insignificant apes to rulers of the world. Earth is 4.5 billion years old. In just a fraction of that time, one species among countless others has conquered it: us. In this bold and provocative book, Yuval Noah Harari explores who we are, how we got here and where we’re going. ‘I would recommend Sapiens to anyone who’s interested in the history and future of our species’ Bill Gates",
        "price": 535,
        "quantity": 100,
        "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=1EiJAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=1EiJAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        }
    }
    
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookEdit book={book}/>, div);
})

it('Should render with out error', () => {  
    const wrapper = shallow(<BookEdit book={book} />)
    expect(wrapper).to.be.ok;
  })

it('Should have heading Edit book', () => {  
    const wrapper = shallow(<BookEdit book={book} />)
    expect(wrapper.find('.bookHeading').text()).to.include('Edit Book');
})


it('Should have heading Add book', () => {  
    book.id=null
    const wrapper = shallow(<BookEdit book={book} />)
    expect(wrapper.find('.bookHeading').text()).to.include('Add Book');
})

})