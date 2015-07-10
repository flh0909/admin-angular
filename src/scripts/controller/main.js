/**
 * mainController
 * @author fulh
 * @updated 2015/5/27
 */

angular.module('mmController', [])
    .controller('mainCtrl', ['$scope', '$location', function ($scope, $location) {
        $scope.title = '测试标题';

        $scope.$watch(function viewPathWatch() {
            return $location.path();
        }, function (path) {
            console.log(path);
            $scope.pageView = 'views' + path + '/list.html';
        })

    }]);