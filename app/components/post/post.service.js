angular.module('TecnicaTM').service('TecnicaTM_Service_Post',[
        '$q', 
        '$http', 
        'TecnicaTM_Factory_Posts',
    function(
        $q, 
        $http, 
        TecnicaTM_Factory_Posts
    ){
        this.getPost = function(_id){

            var defered = $q.defer();
            var promise = defered.promise;

            /*
            $http({
                method: 'GET',
                url: APIROUTE + 'posts/' + _id
            }).then(function successCallback(response) {
                defered.resolve(response.data);
            }, function errorCallback(response) {
               defered.reject(response);
            });
            */
           
            // Simulate api call
            var posts = TecnicaTM_Factory_Posts.getData();
            for ( var idx = 0; idx < posts.length; idx ++ ){
                if ( posts[idx].index === Number(_id) ) {
                    defered.resolve(posts[idx]);
                }
            }

            return promise;
        };
    }
]);

