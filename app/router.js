import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('menu');
  this.route('sidebar');
  this.route('create');
  this.route('update');
  this.route('send');
});

export default Router;
