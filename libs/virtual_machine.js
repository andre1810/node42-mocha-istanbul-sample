'use strict';

/**
 *	Represents a model of a virtual machine.
 *
 * @class VirtualMachine
 */
class VirtualMachine {

  /**
   * Initializes a new instance of {VirtualMachine}.
   *
   * @constructor
   * @class VirtualMachine
   * @method constructor
   * @param  {String}    hostname The hostname of the VM.
   */
  constructor(hostname) {
    this.hostname = hostname;
  }

  /**
   * Returns the hostname.
   *
   * @method hostname
   * @return {String}
   */
  get hostname() {
    return this._hostname;
  }

  /**
   * Sets the hostname.
   *
   * @method hostname
   * @param  {String} hostname
   */
  set hostname(hostname) {
    this._hostname = hostname;
  }

  /**
   * Returns the full qualified domain name of the VM.
   *
   * @method getFqdnHostname
   * @param  {String}        baseDomain The base domain of the VM.
   * @return {String}
   */
  fqdnHostname(baseDomain) {
    let _fqdnHostname = `${this.hostname}.${baseDomain}`;
    return _fqdnHostname;
  }
}

module.exports = VirtualMachine;
