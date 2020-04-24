.directive('ngBootstrapToast', function(){
  return {
    restrict: 'E',
    scope: {
      title: '@',
      avatar: '@',
      message: '@',
      tid: '@',
      delay: '@'
    },
    template:
    "<div class='toast fade mb-4' id='{{tid}}' role='alert' aria-live='assertive' aria-atomic='true'>"+
    "<div class='toast-header'>"+
    "<img ng-src='{{avatar}}' class='mr-2 img-fluid rounded-circle'>"+
    "<strong class='mr-auto'>{{title}}</strong>"+
    "<button type='button' class='ml-2 mb-1 close' data-dismiss='toast' aria-label='Close'>"+
    "<span aria-hidden='true'>&times;</span>"+
    "</button>"+
    "</div>"+
    "<div class='toast-body'>{{message}}</div>"+
     "</div>",
    link: function(scope, element, attr){
      angular.forEach(element, function(el){
        $('.toast').toast({delay:parseInt(attr.delay)})
        $('.toast').toast('show');
      })
    }
  }
});
