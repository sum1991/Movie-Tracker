/**
 * Created by sumukh on 10/4/16.
 */
angular.module('MyApp').
filter('fromNow', function() {
    return function(date) {
        return moment(date).fromNow();
    }
});