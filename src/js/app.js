const app = angular.module('main',[]);
app.controller('mainCtrl', ['$scope', function(s){
    s.toasters = [
        {
            delay: 10000,
            id: 1234,
            avatar: 'my/image/url.jpg',
            title: 'My first title',
            message: 'My first message with details'
        },
        {
            delay: 10000,
            id: 1234,
            avatar: 'my/image/url.jpg',
            title: 'My second title',
            message: 'My second message with details'
        }
    ];
}]);
