/**
 * ui.bootstrap.config
 * ui-bootstrap 全局配置
 *
 * @author fulh
 * @updated 2015/5/27
 */
angular.module('ui.bootstrap.config', [])
    .config(['paginationConfig', function (paginationConfig) {
        paginationConfig['itemsPerPage'] = GLOBAL_CONFIG.pageSize;
        paginationConfig['previousText'] = '上一页';
        paginationConfig['nextText'] = '下一页';

    }])
    .config(['pagerConfig', function (pagerConfig) {
        pagerConfig['previousText'] = '上一页';
        pagerConfig['nextText'] = '下一页';
        pagerConfig['ngModel'] = 'page';
    }])