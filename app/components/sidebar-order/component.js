import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['order-status'],
  order: Ember.inject.service('current-orders'),
  loading: false,

  actions: {
    chooseFood: function() {
      this.set('loading', true);

      this.get('order').chooseFood().then(() => {
        this.set('loading', false);
      });
    }
  }
});
