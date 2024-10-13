//Request Get Data
const blog = angular.module('blog', []);
blog.controller('myblog', function($scope, $http) {
    function getJsonFile() {
        $http.get('https://htetkoko-blog.vercel.app/main/postdata.json')
            .then(function(response) {
                $scope.data = response.data;
                $scope.data.reverse(); // Reverse the array if needed
            }, function(error) {
                console.error('Error fetching data:', error);
            });
    }
    getJsonFile();
});
