import Ember from 'ember';

export default Ember.Service.extend({
  orderedItems: [],

  makeOrder: function(item) {
    this.orderedItems.addObject(item);
  },

  // makeOrder: function() {
    // Grab all our checked in items
    // var saves = this.get('orderedItems').map((item)=> {
    //   // Increment the visits property
    //   item.incrementProperty('visits', 1);

      /**
       *  Save the current item
       *  and return it into the map
       */
  //     return item.save();
  //   });

  //   /**
  //    * Wait for all items to finish saving
  //    */
  //   return Ember.RSVP.Promise.all(saves).then(() => {
  //     // Empty out the orderedItems array
  //     this.set('orderedItems', []);
  //   });
  // }
});
