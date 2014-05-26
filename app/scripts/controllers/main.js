'use strict';

angular.module('talkAngularApp')
  .controller('MainCtrl', function ($scope) {

		/*********** PART ONE ******************/
		$scope.svgWidth = 570;
		$scope.svgHeight = 400;
		$scope.svgScale = 1;
		$scope.wheelSize = 30.;
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
		//var count = 0;
		//var interval = setInterval(function() {
			//count++;
			//if (count == 100) {
				//clearInterval(interval);
			//}
			//$scope.$apply(function(){
				//$scope.wheelSize = $scope.wheelSize + 0.2;
			//});
		//}, 10);

		/*********** PART TWO ******************/
		$scope.barHeight = 10;
		$scope.barOffset = 30;
		$scope.barchartWidth = 570;
		$scope.barchartHeight = 500;
		$scope.ascending = true;


		$scope.data = [ { value: 0.586721 , dept:'Hautes-Pyrénées'}
		, { value: 0.341481 , dept:'Tarn-et-Garonne'}
		, { value: 0.327363 , dept:'Paris'}
		, { value: 0.285993 , dept:'Haut-Rhin'}
		, { value: 0.267445 , dept:'Marne'}
		, { value: 0.266246 , dept:'Tarn'}
		, { value: 0.264109 , dept:'Lot-et-Garonne'}
		, { value: 0.246466 , dept:'Vaucluse'}
		, { value: 0.245386 , dept:'Territoire de Belfort'}
		, { value: 0.238322 , dept:'Nièvre'}
		];


		$scope.barWidth = function (value) {
			var MAX_BAR_WIDTH = 300;
			return  value / 0.5868 * MAX_BAR_WIDTH;
		}
		$scope.offsetGroup = function(index) {
			return 'translate(0, '+ (index+1) *( $scope.barHeight + $scope.barOffset)+')';

		};

		/****** PART THREE ******/
		$scope.data2 = [
		{ sexe: 'Femme', age:'15 à 30 ans',   x: 77, y: 61, effectif: 529},
		{ sexe: 'Femme', age:'31 à 45 ans',   x: 78, y: 45, effectif: 52},
		{ sexe: 'Femme', age:'46 à 62 ans',   x: 53, y: 33, effectif: 43},
		{ sexe: 'Femme', age:'plus de 63 ans',x: 49, y: 21, effectif: 50},
		{ sexe: 'Homme', age:'15 à 30 ans',   x: 43, y: 19, effectif: 343},
		{ sexe: 'Homme', age:'31 à 45 ans',   x: 42, y: 8 , effectif: 335},
		{ sexe: 'Homme', age:'46 à 62 ans',   x: 49, y: 15, effectif: 129},
		{ sexe: 'Homme', age:'plus de 63 ans',x: 32, y: 4 , effectif: 89}
		];

		$scope.circleYPosition = function (value) {
			var MAX_HEIGHT = 400;
			return (value - 4) / (61. - 4) * MAX_HEIGHT + 50;

		}
		$scope.circleRadius = function (value) {
			var MAX_RADIUS = 50;
			return value / 529. * MAX_RADIUS;
		}
		$scope.circleXPosition = function (value) {
			var MAX_WIDTH = 400;
			return (value  - 32)/ (77 - 32.) * MAX_WIDTH + 50;
		}

		$scope.setFocus = function(d) {
			$scope.focus = { label: d.sexe + ' ' + d.age
							, x: d.x
							, y: d.y
			};
		}

		$scope.setFocus($scope.data2[0]);


  });
