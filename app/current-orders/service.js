import Ember from 'ember';

export default Ember.Service.extend({
  orderedFood: [],

  addItem: function(menuItem) {
    this.orderedFood.pushObject({
      menuItem: menuItem,
    });
  },

});

// function that accepts a menuItem
// pushes to orderedFood array
// Ember.ArrayProxy@pushObject
