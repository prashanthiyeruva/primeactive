var capp=angular.module("app",[]);

capp.controller('AppCtrl_0',['$scope',function($scope){

    $scope.apple="green";

}]);
capp.controller('AppCtrl_1',['$scope',function($scope){

    $scope.apple="red";
    $scope.doAddition=function() {
        $scope.addition = $scope.a + $scope.b;
    }

}]);

capp.controller('AppCtrl_2',['$scope',function($scope){

    $scope.orange="orange";


    $scope.$watch("a",function() {
        add();
    });
    $scope.$watch("b",function() {
        add();
    });
    var add=function() {
        $scope.addition = $scope.a + $scope.b;
    }
}]);