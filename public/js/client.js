angular.module('studentApp', []);

angular.module('studentApp').controller('StudentController', function($scope, $http){

  function handleFailure(response){
    console.log('fail');
  }

  $scope.getStudents = function(){
    $http.get('/students').then(function(response){
      $scope.students = response.data;}, handleFailure);
  }
});
