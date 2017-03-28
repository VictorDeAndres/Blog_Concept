angular.module('TecnicaTM')
  .controller('TecnicaTM_InitController', [
      	'$http', 
        '$location',
        'APIROUTE',
        'TecnicaTM_Factory_Posts',
	function (
		$http,
        $location,
        APIROUTE,
        TecnicaTM_Factory_Posts
	){
        
        // Load post list
        $http({
          method: 'GET',
          url: 'data/testdata.json'
        }).then(function successCallback(response) {
            console.info(response);
            TecnicaTM_Factory_Posts.setData(response.data);
            // Update background
            document.body.style.backgroundImage = "url('./images/struckaxiom.png')";
            // Redirect to posts list
            $location.path('posts');
        }, function errorCallback(errorMessage) {
            console.error('Error carga', errorMessage);
        });
        
	}]
);


