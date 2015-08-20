import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('back', function() {
    this.route('index', {path: '/'});
    this.route('create', {path: '/new'});
    this.route('update');
    this.route('read');
    this.route('login', {path: '/login'});
  });

  this.route('front', {path: '/'}, function() {
    this.route('create', {path: '/add'});
  });
});

export default Router;
