import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {expect} from 'chai'
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()});


describe.only('Book Edit', () => {


it('Should render with out error', () => {  
    const wrapper = shallow(<App  />)
    expect(wrapper).to.be.ok;
  })

it('Should get the text from its component', () => {  
    const wrapper = shallow(<App />)
    expect(wrapper.find('.bookHeading').text()).to.include('Books Inventory');
})

})