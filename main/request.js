//Request Get Data
const blog = angular.module('blog', []);
blog.controller('myblog', function($scope, $http, $location, $sce) {
    $scope.renderHtml = function(text) {
        return $sce.trustAsHtml(text.replace(/\n/g, '<br>'));
    };
    $scope.$on('$locationChangeSuccess', function() {
         const hash = $location.hash();
         const element = document.getElementById(hash);
    
         if (element) {
              element.scrollIntoView();
         }
    });

    function getJsonFile() {
        $http.get('https://htetkoko.vercel.app/api/post')
            .then(function(response) {
                $scope.data = response.data;
                $scope.data.reverse(); // Reverse the array if needed
            }, function(error) {
                console.error('Error fetching data:', error);
            });
    }
    getJsonFile();
});
