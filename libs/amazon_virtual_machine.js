'use strict';

const VirtualMachine = require('./virtual_machine');

/**
 *	Represents a model of a amazon virtual machine.
 *
 * @class AmazonVirtualMachine
 * @extends VirtualMachine
 */
class AmazonVirtualMachine extends VirtualMachine {

  /**
   * Initializes a new instance of {VirtualMachine}.
   *
   * @constructor
   * @class AmazonVirtualMachine
   * @method constructor
   * @param  {String}    hostname The hostname of the VM.
   */
  constructor(hostname, location) {
    super(hostname);
    this.location = location;
  }

  /**
   * Returns the location.
   *
   * @method location
   * @return {String}
   */
  get location() {
    return this._location;
  }

  /**
   * Sets the location.
   *
   * @method location
   * @param  {String} location
   */
  set location(location) {
    this._location = location;
  }
}

module.exports = AmazonVirtualMachine;
