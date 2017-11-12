blog.controller("articleCtrl",['$scope','$http','$location','$templateCache',function ($scope,$http,$location,$templateCache) {

    $scope.showLists=true;
    $scope.showArticle=false;
    $scope.hello="";

    var hostname=getUrl($location);

    $http.get(hostname+"/article/article.json").then(function (response) {
        var articleList=response.data;
        $scope.articleList=articleList;
        for (var a in articleList){
            getContent(articleList[a].url,hostname,$templateCache,$http,$scope,a);
        }
    });

    $scope.editorOptions={
        lineNumbers: true,
        readOnly: 'nocursor',
        mode: 'text/x-java',
        theme:'icecoder'
    };

    $scope.clickUrl=function (content) {
        $scope.showLists=false;
        $scope.showArticle=true;
        $scope.hello=content;
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

//获取网页内容
function getContent(url,hostname,$templateCache,$http,$scope,a) {
    $http({
        method:'GET',
        url:hostname+"/"+url,
        cache:$templateCache
    }).then(function (response) {
        // console.log(response.data);
        var content=response.data;
        return content.substring(content.indexOf("<content>")+9,content.indexOf("</content>"));
    }).then(function (data) {
        //截取前154个字符
        // var varArray=trim(data).substr(0,154);
        var varArray=data.split("\n");
        // console.log(varArray);
        $scope.articleList[a].preContent=varArray[1]+varArray[2];
        // console.log($scope.articleList[a].preContent);
    });
}

function trim(str)
{
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g,"");
    result = result.replace(/\s/g,"");
    return result;
}