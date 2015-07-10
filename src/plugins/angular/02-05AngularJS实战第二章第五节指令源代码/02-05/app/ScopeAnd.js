var myModule = angular.module("MyModule", []);
myModule.controller('MyCtrl', ['$scope', function($scope){
	$scope.sayHello=function(name,age){
		alert("Hello "+name+'__'+age);
	}
}])
myModule.directive("greeting", function() {
    return {
    	restrict:'AE',
        scope:{
        	greet:'&'
        },
        template:'<input type="text" ng-model="userName" /><br/>'+
				 '<input type="text" ng-model="userAge" /><br/>'+
        		 '<button class="btn btn-default" ng-click="greet({age:userAge,name:userName})">Greeting</button><br/>'
    }
});