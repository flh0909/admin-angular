/**
 *
 * @author fulh
 * @updated 2015/5/27
 */

var url_poster = 'http://test.admin.memeyule.com/poster/list.json';
angular.module('mmDirective', ['mm.service'])
    .directive('posterList', ['$http','$modal','mm.core',
        function ($http,$modal,Core) {
            return {
                restrict: 'A',
                replace: true,
                //template:'views/website/poster',
                link: function (scope, element, attr) {

                    Core.http({
                        url:url_poster
                    }).success(function (res, status) {
                        scope.res = res;
                    });

                    scope.items=['item1','item2','item3'];
                    scope.edit= function (item) {
                        var modalInstance = $modal.open({
                            //animation: scope.animationsEnabled,
                            templateUrl: 'views/website/poster/input.html',
                            controller: 'posterEditCtrl',
                            //size: size,
                            resolve: {
                                items: function () {
                                    return ['item1','item2','item3'];
                                }
                            }
                        });

                        modalInstance.result.then(function (selectedItem) {
                            scope.selected = selectedItem;
                        }, function () {
                            //$log.info('Modal dismissed at: ' + new Date());
                        });
                    }



                    scope.currentPage=1;
                    
                    scope.pageChanged= function () {
                        /*$http.jsonp(url_poster,{params:{page:scope.currentPage}})
                            .success(function (res, status) {
                                scope.res = res;
                            });*/
                        Core.http({
                            url:url_poster,
                            params:{page:scope.currentPage}
                        }).success(function (res, status) {
                            scope.res = res;
                        });
                    }
                }

            };
        }
    ])
    .controller('posterEditCtrl',['$scope','$modalInstance',
        function ($scope,$modalInstance,items) {
            $scope.items = ['item1','item2','item3'];
            //$scope.selected = {
            //    item: $scope.items[0]
            //};

            $scope.ok = function () {
                $modalInstance.close($scope.selected.item);
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }
    ]);