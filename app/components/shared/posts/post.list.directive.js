angular.module('TecnicaTM')
    .directive('postsList', function(){
       return {
          restrict:'E',
          scope: {
            id: '@',
            title: '@',
            publishedat: '@',
            publisheby: '@',
            text: '@',
          },
          template:
            `<div class="posts__resume__post">
                <div class="posts__resume__header"></div> 
                <div class="posts__resume__title">{{title}}</div>
                <div>
                    <span class="posts__resume__title__publishedate">Publicado el: </span>
                    <span class="posts__resume__publishedate">{{publishedat}}</span>
                    <span class="posts__resume__title__publisheby"> por </span>
                    <span class="posts__resume__publisheby">{{publisheby}}</span>
                </div>
                <div>
                    <div class="posts__resume__text">{{text}}</div>
                    <a href="/post/{{id}}" class="posts__resume__link">Leer mas</a>                
                </div>
            </div>`

       };

    }
);