Todos.TodoController = Ember.ObjectController.extend({
	actions: {
		editTodo: function () {
			this.set('isEditing', true);
		},
		acceptChanges: function () {
			this.set('isEditing', false);
			
			if (Ember.isEmpty(this.get('model.title'))) {
				this.send('removeTodo');
			} else {
				this.get('model').save();
			}
		},
		removeTodo: function () {
			var todo = this.get('model');
			todo.deleteRecord();
			todo.save();
		}
	},
		
	isEditing: false,
	
	isCompleted: function(key, value){
		var model = this.get('model');
		
		if (value === undefined) {
			return model.get('isCompleted');
		} else {
			model.set('isCompleted', value);
			model.save();
			return value;
		}
	}.property('model.isCompleted')
});

Todos.TodosController = Ember.ArrayController.extend({
	actions: {
		createTodo: function() {
			
			var title = this.get('newTitle');
			if(!title.trim()) { return; }
			
			var todo = this.store.createRecord('todo', {
				title: title,
				isCompleted: false
			});
			
			this.set('newTitle', '');
			
			todo.save();
		},
		clearCompleted: function() {
			var completed = this.filterBy('isCompleted', true);
			completed.invoke('deleteRecord');
			completed.invoke('save');
		}
	},
	remaining: function () {
		return this.filterProperty('isCompleted', false).get('length');
	}.property('@each.isCompleted'),
	
	inflection: function () {
		var remaining = this.get('remaining');
		return remaining === 1 ? 'item' : 'items';
	}.property('remaining'),
	
	hasCompleted: function() {
		return this.get('completed') > 0;
	}.property('completed'),
	
	completed: function() {
		return this.filterBy('isCompleted', true).get('length');
	}.property('@each.isCompleted'),
	
	allAreDone: function(key, value) {
		if(value === undefined) {
			return !!this.get('length') && this.everyBy('isCompleted', true);
		} else {
			this.setEach('isCompleted', value);
			this.invoke('save');
			return value;
			
		}
	}.property('@each.isCompleted')
	
});
