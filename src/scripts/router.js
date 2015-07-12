/**
 * 路由模块
 *
 * @author fulh
 * @updated 2015/5/28
 */

angular.module('mmRouter',['ui.router'])
    .config(function ($stateProvider,  $urlRouterProvider) {
        $urlRouterProvider.otherwise('/index');
        $stateProvider
            .state('index',{
                url:'/index',
                views:{
                    '':{
                        templateUrl:'views/index.html'
                    },
                    'nav@index':{
                        templateUrl:'views/nav/website.html'
                    }
                }//,
                //controller:''
            })

            .state('website',{
                url:'/website',
                templateUrl:'views/website/index.html'
            })
            .state('website.poster',{
                url:'/poster',
                templateUrl:'views/website/poster/list.html'
            })
            .state('website.notice',{
                url:'/notice',
                templateUrl:'views/website/notice/list.html'
            })



            .state('user',{
                url:'/user',
                templateUrl:'views/user/index.html'
            })
            .state('user.user',{
                url:'/user',
                templateUrl:'views/user/user/list.html'
            })
            .state('user.star',{
                url:'/star',
                templateUrl:'views/user/star/list.html'
            })

    });
