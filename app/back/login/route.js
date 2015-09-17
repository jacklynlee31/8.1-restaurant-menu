import Ember from 'ember';

export default Ember.Route.extend({
  model:function() {
    // Create a new menu item instance
    // that we'll save to the server.
    return this.store.createRecord('user');
  },
  actions: {
    // fired by the save action in the create template
    save: function(item) {
      item.save().then(() => {
        this.transitionTo('back.index');
      });
    }
  }
});
