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

var app = angular.module('MyApp',[]);
app.controller('control1',function($scope){
    $scope.fName="prashanthi";
    $scope.lName="Yeruva";
});

app.controller('control2',function($scope){
    $scope.fName="Prashanthi";
    $scope.lName="Yeruva";
    $scope.fullName=function(){
        return $scope.fName+" "+ $scope.lName;
    };
});
app.controller('control3', function($scope){
    $scope.country=[{country:'India',capital:'NewDelhi'},
        {country:'USA',capital:'washington DC'},
        {country:'England',capital:'London'}];
});


