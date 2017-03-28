angular.module('TecnicaTM')
    .controller('TecnicaTM_PostController', [
        '$scope',
        '$location',
        '$routeParams',
        'TecnicaTM_Service_Post', 
    function (
        $scope,
        $location,
        $routeParams,
        TecnicaTM_Service_Post 
    ){
        $scope.post = null;
        $scope.showComments = false;
        TecnicaTM_Service_Post.getPost($routeParams.postNo)
            .then( function(responseGetPost){
                $scope.post = responseGetPost;
                $scope.comments = $scope.post.comments.length;
            }, function (errorMessage){
                console.error('Error carga', errorMessage);
            }
        );
    }]
);


