	function sampleService($translate) {
	    'use strict';
	    this.getTranslation = function(userData){
	    	return $translate('People').then(function(translation){
	    		return translation;
	    	});
	    };

	    return {
	        getTranslation: this.getTranslation
	    };
	}

	angular.module('angularJsInternationalizationApp')
	    .factory('SampleService', sampleService);

	sampleService.$inject = ['$translate'];