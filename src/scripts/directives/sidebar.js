/**
 * 左侧菜单
 * @author fulh
 * @create 15/7/12.
 */
angular.module('mm.sidebar', [])
    .directive('sidebarMenu', function () {
        return {
            restrict: 'EA',
            templateUrl: 'views/component/sidebar.html',
            replace: true,
            //transclude:true,
            controller: ['$scope', function ($scope) {
                var menus = $scope.menus = [
                    {name: 'Dashboard',key: 'yibiaoban',icon:'fa fa-dashboard',  subitems: []},
                    {
                        name: '日常运营', key: 'website',icon:'glyphicon glyphicon-book', subitems: [
                        {name: '海报管理', key: 'poster'},
                        {name: '公告管理', key: 'notice'}]
                    },{
                        name: '财务数据', key: 'finance',icon:'glyphicon glyphicon-yen', subitems: [
                        {name: '财务一', key: 'poster'},
                        {name: '财务二', key: 'notice'}]
                    }

                ];

                $scope.select = function (menu) {
                    angular.forEach(menus, function (item) {
                        if(item.key==menu.key){
                            menu.actived=!menu.actived;
                        }else{
                            item.actived = false;
                        }
                    });
                }
            }]
        }
    })
    .directive('submenu', function () {
        return {
            restrict:'EA',
            require:'^sidebarMenu',
            templateUrl:'views/component/sidebar-submenu.html',
            scope:{},
            controller: ['$scope', function ($scope) {

            }]
        };
    })
;