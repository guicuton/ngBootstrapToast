angular.module('main',[]).controller('mainCtrl', ['$scope', function(s){
    s.toasters = [
        {
            delay: 10000,
            avatar: 'my/image/url.jpg',
            title: 'Isso e um teste',
            message: 'Aqui o texto legalzao'
        },
        {
            delay: 10000,
            avatar: 'my/image/url.jpg',
            title: 'Isso e um teste 2',
            message: 'Aqui o texto legalzao 2'
        }
    ];
}]);
