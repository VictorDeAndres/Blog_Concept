angular.module('TecnicaTM').factory('TecnicaTM_Factory_Post',[
   function(){

        var factoryPost = {};

        var post = {};

        factoryPost.setData = function( _data){
            post = _data;        
        };

        factoryPost.getData = function(){
            return post;
        };

        return factoryPost;
   }
]);
