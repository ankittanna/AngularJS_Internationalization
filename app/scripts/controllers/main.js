'use strict';

/**
 * @ngdoc function
 * @name angularJsInternationalizationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsInternationalizationApp
 */
angular.module('angularJsInternationalizationApp')
  .controller('MainCtrl', function (SampleService, $translate) {
    
    // allocating this to main model
    var main = this;

    main.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    main.translatedFromService = '';
    SampleService.getTranslation().then(function(data){
    	main.translatedFromService = data;
    });

    main.switchLanguage = function(langKey){
      console.log(langKey);
      $translate.use(langKey);
    };
  });
