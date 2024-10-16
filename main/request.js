//Request Get Data
const blog = angular.module('blog', []);
blog.controller('myblog', function($scope, $http, $location, $sce) {
    $scope.renderHtml = function(text) {
    // newline ကို <br> သို့ပြောင်းပါ
    text = text.replace(/\n/g, '<br>');
    // URL ကို <a> tag အဖြစ် ပြောင်းပါ
    text = text.replace(/(https?:\/\/[^\s]+)/g, '<a href="$1" class="underline text-blue-500" target="_blank">$1</a>');
    return $sce.trustAsHtml(text);
};

    $scope.$on('$locationChangeSuccess', function() {
         const hash = $location.hash();
         const element = document.getElementById(hash);
         if (element) {
              element.scrollIntoView();
         }
    });

    function getJsonFile() {
        $http.get('https://htetkoko.vercel.app/api/posts.ts')
            .then(function(response) {
                $scope.data = response.data;
                $scope.data.reverse(); // Reverse the array if needed
            }, function(error) {
                console.error('Error fetching data:', error);
            });
        getJsonFile()
    }
});
