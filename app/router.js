import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('menu', {path: '/'}, function() {
    this.route('index', {path: '/'});
    this.route('create', {path: '/new'});
    this.route('read', {path: '/:id'});
    this.route('update', {path: '/:id/update'});
  });
});

export default Router;
