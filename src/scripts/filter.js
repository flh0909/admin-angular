/**
 *
 * @author fulh
 * @updated 2015/5/27
 */

angular.module('mmFilter', ['ngSanitize'])
    .filter('fullDate', ['$filter',
        function ($filter) {
            return function (input) {
                return $filter('date')(input, 'yyyy-MM-dd HH:mm:ss');
            };
        }
    ])
    .filter('link', ['$sce',
        function ($sce) {
            return function (input, title) {
                return $sce.trustAsHtml('<a href="' +input+ '" title='+(title||'')+'>' + input + '</a>');
            }
        }
    ]);