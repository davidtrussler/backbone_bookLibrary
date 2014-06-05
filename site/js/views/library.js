var app = app || {}; 

app.LibraryView = Backbone.View.extend({
	el: '#books', 

	initialize: function(initialBooks) {
		this.collection = new app.Library(initialBooks); 
		this.render(); 
	}, 

	render: function() {
		this.collection.each(function(item) {
			this.renderBook(item); 
		}, this); 
	}, 

	renderBook: function(item) {
		var bookView = new app.BookView({
			model: item
		}); 

		this.$el.append(bookView.render().el); 
	}, 

	events: {
		'click #add': 'addBook'
	}, 

	addBook: function(e) {
		e.preventDefault(); 

		var formData = {}; 
		var inputs = document.getElementById('addBook').getElementsByTagName('input'); 

		for (var i = 0; i < inputs.length; i++) {
			var el = inputs[i]; 

			if (el.value != '') {
				formData[el.id] = el.value; 
			}
		}

		this.collection.add(new app.Book(formData)); 
		this.listenTo(this.collection, 'add', this.renderBook); 
	}
});