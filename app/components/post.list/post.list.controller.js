angular.module('TecnicaTM')
    .controller('TecnicaTM_PostListController', [
        '$scope',
        '$window',
        '$location',
        '$routeParams',
        'TecnicaTM_Factory_Posts', 
	function (
        $scope,
        $window,
        $location,
        $routeParams,
        TecnicaTM_Factory_Posts
	){

        // Pos cursor on top
        $window.scrollTo(0, 0);

        $scope.pageNo = !$routeParams.pageNo  ? Number(0) : Number($routeParams.pageNo);
        $scope.postsLength = TecnicaTM_Factory_Posts.getLenght();

        // Check post length
        if ( $scope.postsLength ){

            var posts = TecnicaTM_Factory_Posts.getData();
            var initLimit = $scope.pageNo * 10;
            var topLimit = ( $scope.pageNo * 10 ) + 10;
            $scope.viewPost = [];

            topLimit = topLimit > $scope.postsLength ? $scope.postsLength : topLimit;
            $scope.topLimit = topLimit;
            for ( var idx = initLimit; idx < topLimit; idx ++ ){
                $scope.viewPost.push(posts[idx]);
            }
        } else {
            // redirect to init page
            $location.path('/');    
        }


        $scope.movebackward = function(){
            $location.path('posts/' + ($scope.pageNo -1));
        };

        $scope.moveforward = function(){
            $location.path('posts/' + ($scope.pageNo +1));
        };

        $scope.search = function(){
            if ( $scope.searchPost !== undefined ){
                $location.path('posts/search/' + $scope.searchPost.replace(/\//g, '%2F'));    
            } else {
                $location.path('posts/0');    
            }
        };
   	}]
);

