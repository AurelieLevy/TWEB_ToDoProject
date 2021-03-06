(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular
		.module('home')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {
		return {
			getMyPhotos: getMyPhotos,
		};

		function getMyPhotos(urlString) {
			return new Promise((resolve) => {
				console.log(`Fetching ${urlString}...`);

				// Simple GET request example:
				$http({
					method: 'GET',
					url: urlString
				}).then(function successCallback(response) {
						// this callback will be called asynchronously
						// when the response is available
						resolve({
							status: 1, 
							response,
						});
					}, function errorCallback(response) {
						// called asynchronously if an error occurs
						// or server returns response with an error status.
						resolve({
							status: 0, 
							response,
						});
					});
			});
		}
	}
})();