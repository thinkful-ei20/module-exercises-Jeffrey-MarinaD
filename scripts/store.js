/* global store, Item cuid*/
'use strict';


const store = (function () {
  let items =  [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];

  let hideCheckedItems = false;
  let searchTerm = '';

  function findById(id) {
    return items.find(item => item.id = id);
  }

  function addItem(name) {
    try {
      Item.validateName(name);
      this.items.push(Item.create(name));
    }
    catch (e){
      console.log('Cannot add item: ' + e.message);
    }
  }

  return {
    items, hideCheckedItems, searchTerm, addItem
  };
}());