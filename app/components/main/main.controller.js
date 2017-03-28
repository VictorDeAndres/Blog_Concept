angular.module('TecnicaTM')
    .controller('TecnicaTM_MainController', [
    	'$scope', 
	function (
		$scope
		) {
			console.info('Hi world');
			console.info($scope);
    	}
	]
);


