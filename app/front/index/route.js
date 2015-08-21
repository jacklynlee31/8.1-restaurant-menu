import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('item');
  },

  item: Ember.inject.service('current-orders'),

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
