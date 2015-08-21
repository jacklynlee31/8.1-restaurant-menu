import Ember from 'ember';

export default Ember.Component.extend({
  item: Ember.inject.service('current-orders'),
  // loading: false,

  // actions: {
  //   makeOrder: function() {
  //     this.set('loading', false);

  //     this.get('item').makeOrder().then(() => {
  //       this.set('loading', false);
      });
//     }
//   }
// });
