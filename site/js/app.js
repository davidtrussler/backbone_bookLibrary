var app = app || {}; 

$(function() {
	var books = [
		{title: 'JavaScript the Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript Programming'}
	]; 

	new app.LibraryView(books); 
}); 