var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.ctrlFlavor="百威";
}])
myModule.directive("drink", function() {
    return {
    	restrict:'AE',
        scope:{
            //flavor:'=',
            name:'=flavor'
        },
        template:'<input type="text" ng-model="flavor"/>{{name}}'
    }
});

myModule.directive('hello', function () {
    return {
        restrict:'E',
        replace:true,
        scope:{
            title:'@title'
        },
        template:'<span style="color:#f00">{{title}}</span>'

    };
});

myModule.directive('mylist', function () {
    return {
        restrict:'E',
        replace:true,
        transclude:true,
        scope:{
            title:'@title'
        },
        template:'<dl>\
        <dt>{{title}}</dt>\
        <dd>\
        <ul><ng-transclude></ng-transclude></ul></dd>\
        </dl>',
        link: function (scope,element) {
            //element.style.show
            element.show();
        }
    };
});

myModule.directive('item', function () {
    return {
        restrict:'E',
        require:'mylist',
        replace:true,
        transclude:true,
        scope:{
            title:'@title'
        },
        template:'<li><ng-transclude></ng-transclude></li>'
    };
});