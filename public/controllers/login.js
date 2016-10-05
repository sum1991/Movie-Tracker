/**
 * Created by sumukh on 10/4/16.
 */
angular.module('MyApp')
    .controller('LoginCtrl', ['$scope', 'Auth', function($scope, Auth) {
        $scope.login = function() {
            Auth.login({
                email: $scope.email,
                password: $scope.password
            });
        };
    }]);