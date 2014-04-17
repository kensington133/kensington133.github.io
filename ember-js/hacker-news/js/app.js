App = Ember.Application.create({rootElement: '#app'});

App.Router.map(function() {
	this.route("post", {path: '/post/:post_id'});
});

App.IndexRoute = Ember.Route.extend({
	  model: function() {
		    //return ['red', 'yellow', 'blue'];
		    return App.Item.all();
	  }
});

App.PostRoute = Ember.Route.extend({
	model: function() {
		return App.Item.single();
		//return ['red', 'yellow', 'blue'];
	}
})

App.Item = Ember.Object.extend();
App.Item.reopenClass({
	all: function() {
		return $.getJSON("http://api.ihackernews.com/page?format=jsonp&callback=?").then(function(response) {

			$('.loading').fadeOut( function(){
				$('#app').fadeIn('slow');
				handleContentHeight();
			});
			var items = [];

			response.items.forEach( function(item) {
				items.push(App.Item.create(item));
			});
			return items;
		});
	}
});

App.IndexController = Ember.ObjectController.extend({
	//not actually used but a good reference as it worked :P
	actions: {
		link: function(post) {
			window.open(post.get('url'));
		}
	}
});