import Ember from 'ember';

export default Ember.Service.extend({
  orderedFood: [],

  chooseFood: function(item) {
    this.orderedFood.addObject(item);
  },

  markFood: function() {
    // Grab all our checked in items
    var saves = this.get('orderedFood').map((item)=> {
      // Increment the orders property
      item.incrementProperty('orders', 1);

      //  *  Save the current item
      //  *  and return it into the map

      return item.save();
    });

    /**addOrder
     * Wait for all items to finish saving
     */
    return Ember.RSVP.Promise.all(saves).then(() => {
      // Empty out the orderedFood array
      this.set('orderedFood', []);
    });
  }
});
