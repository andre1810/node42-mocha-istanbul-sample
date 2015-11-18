'use strict';

const should = require('should');

const VirtualMachine = require('../libs/virtual_machine');

describe('Virtual Machine', function() {

  let virtualMachine = null;

  beforeEach(function() {
    virtualMachine = new VirtualMachine('server01');
  });

  afterEach(function() {
    virtualMachine = null;
  });

  it('should set hostname on init', function() {
    should(virtualMachine.hostname).be.equal('server01');
  });

  it('should set hostname', function() {
    virtualMachine.hostname = 'server02';
    should(virtualMachine.hostname).be.equal('server02');
  });

  it('should get fqdn', function() {
    should(virtualMachine.fqdnHostname('example.com')).be.equal('server01.example.com');
  });

});
