'use strict';

/* Services */

var questionService = angular.module('questionService', ['ngResource']);
var answerService = angular.module('answerService', ['ngResource']);

questionService.factory('Question', ['$resource',
  function($resource){
    return $resource('questions/:questionId.json', {}, {
      query: {method:'GET', params:{questionId:'questions'}, isArray:true}
    });
  }]);

answerService.factory('Answer', ['$resource',
  function($resource){
    return $resource('answers/:answerId.json', {}, {
      query: {method:'GET', params:{questionId:'answers'}, isArray:true}
    });
  }]);

