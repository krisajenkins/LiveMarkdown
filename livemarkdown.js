/*global angular: true, markdown: true*/
"use strict";

angular.module('LiveMarkdownApp', ['ngSanitize'])
	.controller('MarkdownController', function ($scope) {
		$scope.input = "# Markdown\n\n* One\n* Two\n\nA [link](http://github.com/test).";

		$scope.output = function () {
			return markdown.toHTML($scope.input);
		};
	});
