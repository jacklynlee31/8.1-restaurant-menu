import Ember from 'ember';

export default Ember.Service.extend({
  orderedFood: [],

  makeOrder: function(menuItem) {
    this.orderedFood.pushObject({
      menuItem: item,
    });
  },

});

// function that accepts a menuItem
// pushes to orderedFood array
// Ember.ArrayProxy@pushObject
