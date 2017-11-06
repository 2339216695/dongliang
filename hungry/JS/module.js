/**
 * Created by teacher on 2017/8/22.
 */
angular.module("myapp",["ng"]).controller("mycontroller",["$scope","$interval","$timeout",function($scope,$interval,$timeout){
  $scope.test=0;
  $scope.$watch("test",function(to,from){
    console.log("监听的text的值发生变化")
  },true)
  //setInterval(function(){
  //  $scope.test++;
  //  $scope.$digest();
  //},1000)
  //$interval(function(){$scope.test++},1000)
  $timeout(function(){$scope.test++},1000);
}])