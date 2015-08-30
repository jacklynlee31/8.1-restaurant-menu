import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['item-status'],
  item: Ember.inject.service('current-orders'),
  loading: false,

  actions: {
    addOrder: function() {
      this.set('loading', true);

      this.get('item').addOrder().then(() => {
        this.set('loading', false);
      });
    }
  }
});
