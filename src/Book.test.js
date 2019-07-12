
import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai'
import Book from './Book'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()});

describe.only('Book', () => {
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

    it('Should render with out error', () => {  
      const wrapper = shallow(<Book book={book} view="EditBook"/>)
      expect(wrapper).to.be.ok;
    })

    it('Should get the text from its component', () => {  
      const wrapper = shallow(<Book book={book} view="EditBook"/>)
      expect(wrapper.text()).to.include('Yuval Noah Harari');
    })

    it('Should render edit View', () => {  
      const wrapper = shallow(<Book book={book} view="EditBook"/>)
      expect(wrapper.find('#editButton').length).to.equal(1);
      expect(wrapper.find('#deleteButton').length).to.equal(1);
      expect(wrapper.find('#addStoreButton').length).to.equal(0);
    })

    it('Should render edit View', () => {  
      const wrapper = shallow(<Book book={book} view="AddStore"/>)
      expect(wrapper.find('#editButton').length).to.equal(0);
      expect(wrapper.find('#deleteButton').length).to.equal(0);
      expect(wrapper.find('#addStoreButton').length).to.equal(1);
    })
})