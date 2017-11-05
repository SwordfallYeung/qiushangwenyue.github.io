blog.controller("articleCtrl",['$scope','$http','$location',function ($scope,$http,$location) {
    var hostname=getUrl($location);

    $http.get(hostname+"/article/article.json").then(function (response) {
        $scope.hello=response.data.helloworld;
    });

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

function getUrl($location) {
    var hostname;
    var protocol=$location.protocol();
    var absUrl=$location.absUrl();
    var host=$location.host();
    var port=$location.port();
    if (port===null){
        //本地访问
        hostname=absUrl.substring(0,absUrl.indexOf("index.html"));
    }else {
        //git 访问
        hostname=protocol+"://"+host;
    }
    return hostname;
}