import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['order-status'],
  order: Ember.inject.service('current-orders'),
  loading: false,

  actions: {
    addItem: function() {
      this.set('loading', true);

      this.get('order').addItem().then(() => {
        this.set('loading', false);
      });
    }
  }
});
