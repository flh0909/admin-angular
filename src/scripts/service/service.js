/**
 * service
 *
 * @author fulh
 * @updated 2015/5/29
 */

/**
 * Service 都是单例的
 * Service 由$injector负责实例化
 * Service 在整个应用的生命周期中存在，可以用来共享数据
 * 在需要使用的地方利用依赖注入机制注入Service
 * 自定义的Service需要写在内置Service后面
 * 内置Service的命名以$符号开头，自定义Service应该避免
 *
 *
 * Service 、Provider 、Factory 本质都是 Provider （调用形式不同）
 *
 * function provider(name, provider_) {
 *      if (isFunction(provider_) || isArray(provider_)) {
 *          provider_ = providerInjector.instantiate(provider_);
 *      }
 *      if (!provider_.$get) {
 *          throw $injectorMinErr('pget', "Provider '{0}' must define $get factory method.", name);
 *      }
 *      return providerCache[name + providerSuffix] = provider_;
 *  }
 *
 * function factory(name, factoryFn) { return provider(name, { $get: factoryFn }); }
 *
 * function service(name, constructor) {
 *      return factory(name, ['$injector', function($injector) {
 *          return $injector.instantiate(constructor);
 *      }]);
 *  }
 *
 */

    // provider factory service

angular.module('mm.module.test', [])
    .factory('myFactory', function () {
        return {
            name: 'defaultName',
            say: function (name) {
                return 'hello ' + name || this.name;
            }
        };
    })
    .service('myService', function () {
        this.name = 'defaultName';
        this.say = function (name) {
            return 'hello ' + name || this.name;
        }
    })
    .provider('myProvider', function () {
        return {
            $get: function () {
                return {
                    name: 'defaultName',
                    say: function (name) {
                        return 'hello ' + name || this.name;
                    }
                };
            }
        };
    });


angular.module('mm.service', [])
    .factory('mm.core', ['$http',
        function ($http) {
            var http = function (opt) {
                opt = $.extend({
                    method: 'GET',
                    params: {},
                    url: '',
                    cache: false,
                    responseType: 'json'
                }, opt);

                opt.url = (/^http/i.test(opt.url) ?
                    opt.url : 'http://' + GLOBAL_CONFIG.domain.api + '/' + opt.url.replace((/^\//), '') + '.json'
                );

                if (GLOBAL_CONFIG.domain.api !== GLOBAL_CONFIG.domain.site) {
                    opt.method = 'jsonp'
                }


                return $http(opt);
            }

            return {
                http: http
            }
        }
    ])





