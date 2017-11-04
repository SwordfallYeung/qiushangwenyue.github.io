blog.controller("articleCtrl",['$scope','$http','$location',function ($scope,$http,$location) {
    var absUrl=$location.absUrl();
    var path=$location.path();
    var url=$location.url();
    var hash=$location.hash();
    var host=$location.host();
    var port=$location.port();
    console.log("absUrl: "+absUrl);
    console.log("path: "+path);
    console.log("hash; "+hash);
    console.log("url: " +url);
    console.log(host+port);
    $http.get(host+"/article/article.json").then(function (response) {
        $scope.hello=response.data.helloworld;
    });
    // $scope.hello="article/2017-11-04/2017-11-04.html";
    $scope.editorOptions={
        lineNumbers: true,
        readOnly: 'nocursor',
        mode: 'text/x-java',
        theme:'icecoder'
    };
}]);
/*
theme:
  abcdef
  base16-dark
  icecoder
  material
  seti
*/
