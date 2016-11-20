import React from 'react';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Survey from './../src/components/Survey/Survey'
import axios from 'axios';
import moxios from 'moxios';
require('es6-promise').polyfill();



describe('Meta Testing', () => {
  it('Should be a functioning test', () => {
    expect(true).to.equal(true);
  });
});



describe('FILL IN', () => {
  beforeEach(function () {
    moxios.install()
  });

  afterEach(function () {
    moxios.uninstall()
  });

  it('Should render Landing', done => {
    mount(<Survey params={ {moveId:'324wfsadfsf'} } />);

    done();
  });

});
    

