(function(){
  var app = angular.module('starter', ['ionic','cliente.controller']);
  app.config( function( $stateProvider, $urlRouterProvider )
  {
    $urlRouterProvider.otherwise('/list');
  });

  app.run(function($ionicPlatform) 
  {
    $ionicPlatform.ready(function() 
    {
      if(window.cordova && window.cordova.plugins.Keyboard) 
      {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) 
        StatusBar.styleDefault();
    });
  })
}());