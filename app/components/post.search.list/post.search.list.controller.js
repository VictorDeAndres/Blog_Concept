angular.module('TecnicaTM')
    .controller('TecnicaTM_PostSearchListController', [
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

        $scope.pageNo = 0;  // Hide footer
        var search = !$routeParams.post  ? "" : $routeParams.post.replace(/%2F/g, '\/');
        var postsLength = TecnicaTM_Factory_Posts.getLenght();

        // Check if is date or string
        var searchByDate = moment(search, 'DD/MM/YYYY', true).isValid() ||
                            moment(search, 'DD/MM/YY', true).isValid() || 
                            moment(search, 'DD/M/YYYY', true).isValid() ||
                            moment(search, 'DD/M/YY', true).isValid() ||
                            moment(search, 'D/MM/YY', true).isValid() ||
                            moment(search, 'D/M/YY', true).isValid() ||
                            moment(search, 'D/MM/YYYY', true).isValid() ||
                            moment(search, 'D/M/YYYY', true).isValid();


        // Check post length
        if ( postsLength ){

            var posts = TecnicaTM_Factory_Posts.getData();
            $scope.viewPost = [];

            for ( var idx = 0; idx < postsLength; idx ++ ){
                if ( searchByDate ) {
                    if ( moment(posts[idx].publishedAt).format('DD/MM/YYYY') === search || 
                            moment(posts[idx].publishedAt).format('DD/MM/YY') === search ||
                            moment(posts[idx].publishedAt).format('DD/M/YYYY') === search ||
                            moment(posts[idx].publishedAt).format('DD/M/YY') === search ||
                            moment(posts[idx].publishedAt).format('D/MM/YYYY') === search ||
                            moment(posts[idx].publishedAt).format('D/M/YYYY') === search || 
                            moment(posts[idx].publishedAt).format('D/MM/YY') === search ||
                            moment(posts[idx].publishedAt).format('D/M/YY') === search ) {
                        $scope.viewPost.push(posts[idx]);
                    }
                } else {
                    if ( posts[idx].title.toUpperCase() === search.toUpperCase() ) {
                        $scope.viewPost.push(posts[idx]);
                    }
                }
            }
        } else {
            // redirect to init page
            $location.path('/');    
        }

        $scope.search = function(){
            if ( $scope.searchPost !== undefined ){
                $location.path('posts/search/' + $scope.searchPost.replace(/\//g, '%2F'));    
            } else {
                $location.path('posts/0');    
            }
        };
    }]
);


