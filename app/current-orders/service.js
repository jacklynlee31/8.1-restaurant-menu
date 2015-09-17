import Ember from 'ember';

export default Ember.Service.extend({
  orderedFood: [],

  addItem: function(menuItem) {
    this.orderedFood.pushObject(menuItem);
  },

  monies: Ember.computed.mapBy('orderedFood', 'price'),
  price: Ember.computed.sum('monies')

});

// menuItem: Ember.computed.mapBy('price');

  // Ember.computed.mapBy('menuItem.price');
  // Ember.computed.sum('menuItem.price');

// function that accepts a menuItem
// pushes to orderedFood array
// Ember.ArrayProxy@pushObject
