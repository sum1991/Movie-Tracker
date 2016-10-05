/**
 * Created by sumukh on 10/4/16.
 */
angular.module('MyApp')
    .controller('NavbarCtrl', ['$scope', 'Auth', function($scope, Auth) {
        $scope.logout = function() {
            Auth.logout();
        };
    }]);