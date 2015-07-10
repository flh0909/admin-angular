/**
 * 主入口
 *
 * @author fulh
 * @updated 2015/5/6
 */



var app = angular.module('memeApp', ['mmRouter', 'ui.bootstrap', 'ui.bootstrap.config', 'mmController', 'mmDirective', 'mmFilter', 'ui.router']);


app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
}]);

app.config(['$provide', '$httpProvider', function ($provide, $httpProvider) {
    //转换请求之前参数  $http =>> data
    $httpProvider.defaults.transformRequest = function (data) {
        if (data) {
            return $.param(data);
        }
        return null;
    };
    //转换响应结果数据 success =>> data
    $httpProvider.defaults.transformResponse = function (data) {
        data._from = 'ANGULAR';
        return data;
    };
    //拦截器
    $provide.factory('myHttpInterceptor', function ($q) {
        return {
            'request': function (config) {
                if (config.method.toUpperCase() == 'JSONP') {
                    config.params = $.extend({}, {
                        callback: 'JSON_CALLBACK',
                        size: GLOBAL_CONFIG.pageSize,
                        page: 1
                    }, config.params);
                }
                return config;
            },
            'requestError': function (rejection) {
                return $q.reject(rejection);
            },
            'response': function (response) {
                console.log("RESPONSE", response);

                return response;
            },
            'responseError': function (rejection) {
                return $q.reject(rejection);
            }
        };

    });

    $httpProvider.interceptors.push('myHttpInterceptor');
}]);

