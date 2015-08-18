import DS from 'ember-data';

export default DS.Model.extend({
  menuItem: DS.attr('string'),
  price: DS.attr('number'),
});
