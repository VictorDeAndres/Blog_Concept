
angular.module('TecnicaTM')
    .directive('postComments', function(){
       return {
          restrict:'E',
          scope: {
              commentby: '@',
              commentdate: '@',
              text: '@',
          },
          template:
            `<div class="post__comment_container">
                <div class="post__comment__author">{{commentby}}</div>
                <div class="post__comment__date">{{commentdate}}</div>
                <div class="post__comment__text">{{text}}</div>
            </div>`
       };

    }
);