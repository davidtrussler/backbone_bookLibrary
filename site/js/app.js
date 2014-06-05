var app = app || {};

window.addEventListener(
	'DOMContentLoaded', 
// $(function() {
	/*
	var books = [
		{title: 'JavaScript the Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript Programming'}, 
		{title: 'My Life', author: 'Leon Trotsky', releaseDate: '1917', keywords: 'autobiography politics'}
	]; 
	*/

	// new app.LibraryView(books); 
	function() {
		new app.LibraryView(); 
	}, 
	false
// }); 
);