'use strict';

/**
 * @ngdoc overview
 * @name angularJsInternationalizationApp
 * @description
 * # angularJsInternationalizationApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsInternationalizationApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate'
  ])
  .run(function($rootScope){
    console.log('Hello 1');
      $rootScope.$on('$translateChangeSuccess', function(){
        console.log('Translation change success!');
      });

      $rootScope.$on('$translateChangeError', function(err){
        console.log('Translation change error!');
      });

      $rootScope.$on('$translateLoadingStart', function(err){
        console.log('Translation loading Start! Show Spinner!');
      });

      $rootScope.$on('$translateLoadingEnd', function(err){
        console.log('Translation loading End! Hide Spinner!');
      });
  })
  .config(function($translateProvider){
    console.log('Hello 2');
   /* var english = {
      "Title": "Internationalization",
      "Language": "Language",
      "Languages": {
          "English": "English",
          "Spanish": "Spanish",
          "French": "French"
      },
      "Created_By": "Created by John Papa",
      "First_Name": "First Name",
      "Last_Name": "Last Name",
      "Age": "Age",
      "Location": "Location",
      "Messages": "Messages",
      "People": "People",
      "Splash_Msg": "Loading . . .",
      "Message_Count": "{messageCount, plural, =0{No Messages} one{1 Message} other{# Messages}}",
      "Conference_Date": "May 18 - 19, 2015",
      "Dashboard": "Dashboard",
      "Admin": "Admin",
      "Greeting": "{{name}} is logged in",
      "Admin_Message": "The quick brown fox jumped over the lazy dog",
      "Activation_Dash": "Activated Dashboard View",
      "Activation_Admin": "Activated Admin View"
    };

    var spanish = {
      "Title": "Internacionalización",
      "Language": "Idioma",
      "Languages": {
          "English": "Inglés",
          "Spanish": "Español",
          "French": "Francés"
      },
      "Created_By": "Creado por Juan Padre",
      "First_Name": "Nombre De Pila",
      "Last_Name": "Apellido",
      "Age": "Edad",
      "Location": "Ubicación",
      "Messages": "Mensajes",
      "People": "Gente",
      "Splash_Msg": "Cargando . . .",
      "Message_Count": "{messageCount, plural, =0{No Hay Mensajes} one{1 Mensaje} other{# Mensajes}}",
      "Conference_Date": "18 a 19 mayo, 2015",
      "Dashboard": "Tablero",
      "Admin": "Administración",
      "Greeting": "{{name}} se registra en",
      "Admin_Message": "El zorro marrón rápido saltó sobre el perro perezoso",
      "Activation_Dash": "Activado Tablero Ver",
      "Activation_Admin": "Activado Administración Ver"
    }; 

    $translateProvider.translations('en', english);
    $translateProvider.translations('es', spanish);   */ 
    
    console.log("--------> This is my preferred language "+navigator.language);
    
    /*$translateProvider.registerAvailableLanguageKeys(['en', 'es'], {
      'en-US': 'en',
      'es-US': 'es'
    });
    $translateProvider.determinePreferredLanguage();*/
    
    $translateProvider.preferredLanguage('en-US');
    // $translateProvider.fallbackLanguage('en-US');
    $translateProvider.useStaticFilesLoader({
      prefix:'locale/',
      suffix:'.json'
    });
    
    // not allow special characters
    // $translateProvider.useSanitizeValueStrategy('sanitize');
    
    // allow special characters
     $translateProvider.useSanitizeValueStrategy('escaped');

    $translateProvider.usePostCompiling(true);
    // $translateProvider.preferredLanguage('en');
    // $translateProvider.preferredLanguage('es');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
