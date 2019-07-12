import React from 'react';
import ReactDOM from 'react-dom';
import Logs from './Logs';

import {expect} from 'chai'
import {shallow} from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({adapter: new Adapter()});


describe.only('Book Edit', () => {


it('Should render with out error', () => {  
    const wrapper = shallow(<Logs  />)
    expect(wrapper).to.be.ok;
  })

it('Should get the text from its component', () => {  
    const wrapper = shallow(<Logs />)
    expect(wrapper.find('.bookHeading').text()).to.include('Audit Logs');
})

})