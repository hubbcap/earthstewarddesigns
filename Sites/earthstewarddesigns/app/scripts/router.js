Earthstewarddesigns.Router.map(function () {
  // Add your routes here
  this.route('index', {path:''})
  this.route('#', {path: '/home'});
  this.resource('portfolio', { path: '/portfolio' });
  this.resource('about', { path: '/aboutme' });
  this.resource('contact', { path: '/contactme' });
  this.resource('blog', { path: '/blog/:blog_id' });
  this.resource('hereIam', { path: '/hereIam' });
  this.resource('thankyou');
  this.resource('test', { path: '/test' });
  this.resource('watering', { path: '/watering' });
});
