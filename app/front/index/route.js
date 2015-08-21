import Ember from 'ember';

// does this need to be renamed?

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('item');
  },

  actions: {
    save: function(data) {
      var item = this.modelFor('back.read');
      item.setProperties(data);

      item.save().then(() => {
        this.transitionTo('back.read');
      });
    }
  }
});
