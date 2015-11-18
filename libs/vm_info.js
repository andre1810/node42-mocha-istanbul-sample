'use strict';

const VirtualMachine = require('./virtual_machine');
const AmazonVirtualMachine = require('./amazon_virtual_machine');

const BASE_DOMAIN = 'example.com';

let virtualMachine = new VirtualMachine('webserver01');

console.log(virtualMachine.fqdnHostname(BASE_DOMAIN));

let amazonVirtualMachine = new AmazonVirtualMachine('webserver02', 'eu-west');

console.log(`${amazonVirtualMachine.fqdnHostname(BASE_DOMAIN)} @ ${amazonVirtualMachine.location}`);
