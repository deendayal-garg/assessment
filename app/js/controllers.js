'use strict';

/* Controllers */

var questionControllers = angular.module('questionControllers', []);

questionControllers.controller('QuestionListCtrl', ['$scope', 'Question', 'Answer',
    function ($scope, Question, Answer) {
        $scope.questions = Question.query();
        $scope.answers = Answer.query();
        $scope.chartConfig = {
            title: 'Products',
            tooltips: true,
            labels: false,
            mouseover: function () {
            },
            mouseout: function () {
            },
            click: function () {
            },
            legend: {
                display: true,
                //could be 'left, right'
                position: 'right'
            }
        };
        $scope.chartData = {
            series: ['Sales', 'Income', 'Expense', 'Laptops', 'Keyboards'],
            data: [{
                x: "Laptops",
                y: [100, 500, 0],
                tooltip: "this is tooltip"
            }, {
                x: "Desktops",
                y: [300, 100, 100]
            }, {
                x: "Mobiles",
                y: [351]
            }, {
                x: "Tablets",
                y: [54, 0, 879]
            }]
        };
        $scope.chartType = "line";
        $scope.answerSubmit = function () {
            for(var i = 0 ; i < $scope.questions.length ; i++){
                console.log($scope.questions[i].selectedOption);
                console.log($scope.questions[i].selectedChart);
            }
        };
    }]);

questionControllers.controller('QuestionDetailCtrl', ['$scope', '$routeParams', 'Question',
    function ($scope, $routeParams, Question) {
        $scope.question = Question.get({questionId: $routeParams.questionId}, function (question) {
            $scope.mainImageUrl = question.images[0];
        });

        $scope.setImage = function (imageUrl) {
            $scope.mainImageUrl = imageUrl;
        };
    }]);
