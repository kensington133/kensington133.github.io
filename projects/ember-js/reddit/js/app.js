App = Ember.Application.create({rootElement: '#app'});

/*App.Router.map(function() {
	this.route("comments", {path: '/comments/:post_id'});
});*/

App.IndexRoute = Ember.Route.extend({
	  model: function() {
		    //return ['red', 'yellow', 'blue'];
		    return App.Item.all();
	  }
});

/*App.CommentsRoute = Ember.Route.extend({
	model: function(params) {
		handleContentHeight();
		return App.Item.comments();
		// return ['red', 'yellow', 'blue'];
	}
})
*/
App.Item = Ember.Object.extend();
App.Item.reopenClass({
	all: function() {
		return $.getJSON("http://www.reddit.com/r/all.json?limit=25&jsonp=?").then(function(response) {

			$('.loading').fadeOut( function(){
				$('#app').fadeIn('slow');
				handleContentHeight();
			});

			//alert(response.data.children[0].data.title);
			var items = [];

			for(var i = 0; i < response.data.children.length; i++) {
				items.push(App.Item.create(response.data.children[i].data));
			}
			//console.log(items);
			return items;

		})
	},
	/*comments: function() {
			//var commentLink = post.get('permalink');

			handleContentHeight();

			return ['yellow', 'red', 'blue'];
			/*return $.getJSON("http://reddit.com"+commentLink+".json?jsonp=?").then(function(response) {

				console.log(response);

				var items = [];
				console.log(response['1']);
				for(var i = 0; i < response['1'].data.children.length; i++)
				{
					items.push(App.Item.create(response['1'].data.children[i].data));
				}
				console.log(items);
				return items;

			});
		}*/
});

App.IndexController = Ember.ObjectController.extend({
	actions: {
		link: function(post) {
			window.open(post.get('url'));
		},
		getComments: function(post) {
			var commentLink = post.get('permalink');

			return $.getJSON("http://reddit.com"+commentLink+".json?jsonp=?").then(function(response) {

				console.log(response);

				var items = [];
				console.log(response['1']);
				for(var i = 0; i < response['1'].data.children.length; i++)
				{
					items.push(App.Item.create(response['1'].data.children[i].data));
				}
				console.log(items);
				return items;
				handleContentHeight();
			});
		}
	}
});

Ember.Handlebars.registerBoundHelper('formatDate', function(post) {
  return moment(post.get('created_utc'), 'X').fromNow();
});

Ember.Handlebars.registerBoundHelper('sortThumbs', function(post) {
	var thumbLink = post.get('thumbnail');

	switch(thumbLink){

	case 'nsfw':
		return new Handlebars.SafeString('<img class="thumb" src="nsfw.png" />');
	break;
	case 'default':
	case 'self':
		return new Handlebars.SafeString('<img class="thumb" src="default.png" />');
	break;
	default:
		return new Handlebars.SafeString('<img class="thumb" src="'+thumbLink+'" />');
	break;
	}
});





