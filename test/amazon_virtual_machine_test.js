'use strict';

const should = require('should');

const AmazonVirtualMachine = require('../libs/amazon_virtual_machine');

describe('Amazon Virtual Machine', function() {

  let virtualMachine = null;

  beforeEach(function() {
    virtualMachine = new AmazonVirtualMachine('server01', 'eu-west');
  });

  afterEach(function() {
    virtualMachine = null;
  });

  it('should set hostname on init', function() {
    should(virtualMachine.hostname).be.equal('server01');
  });

  it('should set location on init', function() {
    should(virtualMachine.location).be.equal('eu-west');
  });

  it('should set location', function() {
    virtualMachine.location = 'eu-east';
    should(virtualMachine.location).be.equal('eu-east');
  });

});
