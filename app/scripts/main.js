console.log('\'Allo \'Allo!');

(function(){
var app = angular.module('store',[]);
app.controller('StoreController', function(){
	this.products = tabs;
});

var tabs = [{
		title: 'Pink Shoes',
		subtitle: 'Now at $145.99',
	},{
		title: 'Anna Field',
		subtitle: 'Limited Edition',
	},{
		title: 'Prada',
		subtitle: 'Summer is coming',
	},{
		title: 'Casadei',
		subtitle: 'All collors available',
	},{
		title: 'Mellow Yellow',
		subtitle: 'Free delivery',
	}];
})();