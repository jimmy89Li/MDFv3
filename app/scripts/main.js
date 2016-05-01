console.log('\'Allo \'Allo!');

angular.module('Shop', [])
	.controller('Tabs', ['$scope', function($scope) {
		$scope.tab = [{
			title: 'Pink Shoes',
			subtitle: 'Now at  $145,99'
		}];

	}

		]);