/* global cuid */

'use strict';

const Item = (function() {
  function validateName(name) {
    if(name === null || name === '') {
      throw new TypeError('`name` does not exists.');
    }

  }
  
  function create(name) {
    return {
      id: cuid(),
      name: name,
      checked: false,
    };
  }

  return {
    validateName, create
  };

}());