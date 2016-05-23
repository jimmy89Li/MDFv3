(function(){
  'use strict';
var app = angular.module('store', []);

app.controller('StoreController', function(){
	var tabs = [{
		title: 'Pink Shoes',
		subtitle: 'Now at $145.99'
	}, {
		title: 'Anna Field',
		subtitle: 'Limited Edition'
	}, {
		title: 'Prada',
		subtitle: 'Summer is coming'
	}, {
		title: 'Casadei',
		subtitle: 'All collors available'
	}, {
		title: 'Mellow Yellow',
		subtitle: 'Free delivery'
	}];
	this.products = tabs;
});

app.controller('NewItemsListController', function(){
	var newShoes = [
		{
			name: 'Item 1',
			image: 'images/item1.png'
		}, {
			name: 'Item 2',
			image: 'images/item2.png'
		}, {
			name: 'Item 3',
			image: 'images/item3.png'
		}
	];
	this.items = newShoes;
});

app.controller('BestItemsController', function(){
	var bestShoes = [
		{
			name: 'Item 4',
			image: 'images/item4.png'
		}, {
			name: 'Item 5',
			image: 'images/item5.png'
		}, {
			name: 'Item 6',
			image: 'images/item6.png'
		}
	];
	this.items = bestShoes;
	});
})();
