var myApp=angular.module("myApp",[]);
myApp.controller("myController",function($scope){
    console.log("in my controller");
    $scope.newUser={};
    $scope.clickedUser={};
    $scope.message="";
    $scope.users=[
        {username:"John",fullname:"John Bostan",email:"John@gmail.com"},
        {username:"George",fullname:"George Bush",email:"george@gmail.com"},
        {username:"Frank ",fullname:"Frank Kaul",email:"Frank@gmail.com"}
        ];
    $scope.saveUser=function(){
       $scope.users.push($scope.newUser) ;
        $scope.newUser={};
        $scope.message="New User added successfully!";
    };
    $scope.selectUser=function(user){
        console.log(user);
        $scope.clickedUser=user;
    };
    $scope.updateUser=function(){
        $scope.message="User updated successfully!";
    };
    $scope.deleteUser=function(){
    $scope.users.splice( $scope.users.indexOf($scope.clickedUser),1);
        $scope.message="User deleted successfully!";
    };
    $scope.clearMessage=function(){
        $scope.message="";
    };
});
