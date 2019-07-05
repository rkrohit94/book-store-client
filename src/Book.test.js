
import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai'
import Book from './Book'

describe.only('Book', () => {
    it('Should render with out error', () => {  
      const wrapper = shallow(<Book />)
      expect(wrapper).to.be.ok;
    })
})