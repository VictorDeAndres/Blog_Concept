angular.module('TecnicaTM').factory('TecnicaTM_Factory_Posts',[
   function(){

        var factoryPosts = {};

        var posts = {};

        factoryPosts.setData = function( _data){
            // Order post by date
            _data.sort(function(a,b){
                return new Date(b.posted) - new Date(a.posted);
            });
            posts = _data;        
        };

        factoryPosts.getData = function(){
            return posts;
        };

        factoryPosts.getLenght = function(){
            return Object.keys(posts).length;
        };

        return factoryPosts;
   }
]);
