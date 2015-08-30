import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['order-status'],
  order: Ember.inject.service('current-orders'),
  loading: false,

  actions: {
    markFood: function() {
      this.set('loading', true);

      this.get('order').markFood().then(() => {
        this.set('loading', false);
      });
    }
  }
});
