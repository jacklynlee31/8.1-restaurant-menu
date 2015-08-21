import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(item, data) {
      item.setProperties(data);

      item.save().then(() => {
        this.transitionTo('back.read');
      });
    }
  }
});




// import Ember from 'ember';

// export default Ember.Route.extend({
//   actions: {
//     save: function(data) {
//       var item = this.modelFor('menu.update');
//       item.setProperties(data);
//       item.save().then(() => {this.transitionTo('menu.update');});
//     }
//   }
// });
