'use strict';

/* App Module */


var questionApp = angular.module('questionApp', [
    'ngRoute',
    'questionAnimations',
    'angularCharts',
    'questionControllers',
    'phonecatFilters',
    'questionService',
    'answerService'
]);


questionApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
        when('/questions', {
            templateUrl: 'partials/question_list.html',
            controller: 'QuestionListCtrl'
        }).
        when('/questions/:questionId', {
            templateUrl: 'partials/question-detail.html',
            controller: 'QuestionDetailCtrl'
        }).
        otherwise({
            redirectTo: '/questions'
        });
    }]);
