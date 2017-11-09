blog.controller("articleCtrl",['$scope','$http','$location','$templateCache',function ($scope,$http,$location,$templateCache) {

    $scope.showLists=true;
    $scope.showArticle=false;
    $scope.hello="";

    var hostname=getUrl($location);

    $http.get(hostname+"/article/article.json").then(function (response) {
        $scope.articleList=response.data;
        // $scope.hello=response.data.helloworld;
    });

    $scope.editorOptions={
        lineNumbers: true,
        readOnly: 'nocursor',
        mode: 'text/x-java',
        theme:'icecoder'
    };

    $scope.clickUrl=function (content) {
        console.log(content);
        $scope.showLists=false;
        $scope.showArticle=true;
        $scope.hello=content;
    };

    //获取网页内容
    $scope.getContent=function (url) {
        $http({
           method:'GET',
           url:hostname+"/"+url,
           cache:$templateCache
        }).then(function (response) {
            console.log(response.status);
            console.log(response.data);
        },function (response) {
            console.log(response.data || 'Request failed');
            console.log(response.status);
        });
        return "helo";

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