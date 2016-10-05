/**
 * Created by sumukh on 10/4/16.
 */
angular.module('MyApp')
    .controller('SignupCtrl', ['$scope', 'Auth', function($scope, Auth) {
        $scope.signup = function() {
           alert("hello s");
            Auth.signup({

                email: $scope.email,
                password: $scope.password
            });
        };
    }]);