//Request Get Data

blog.controller('myblog', function($scope, $http) {
    async function getJsonFile() {
        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': `token ${token}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const fileData = await response.json();
            const content = atob(fileData.content); // base64_decode
            const decoded = decodeURIComponent(escape(content));
            $scope.data = JSON.parse(decoded);// Set data to scope
            $scope.data.reverse(); // Reverse the array if needed
            $scope.$apply(); // Notify AngularJS about the changes
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    getJsonFile();
});
