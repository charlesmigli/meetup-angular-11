'use strict';

angular.module('talkAngularApp')
  .controller('MainCtrl', function ($scope) {
		$scope.svgWidth = 570;
		$scope.svgHeight = 700;
		$scope.svgScale = 1;


		$scope.wheelSize = 30;
		$scope.carLength = 250;
		$scope.carTopHeight = 20;
		$scope.carHeight = 60;
		$scope.carBrand = 'Jaguar';
		$scope.carTopXPosition = function() {
			return 0.25* $scope.carLength;
		}
		$scope.wheelYPosition = function() {
			return $scope.carTopHeight+ $scope.carHeight;
		};
		$scope.wheelXPosition = function() {
			return {rear: 0.2*$scope.carLength, top:0.8*$scope.carLength}
		};

  });
