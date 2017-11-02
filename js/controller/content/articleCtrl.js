blog.controller("articleCtrl",['$scope','$http',function ($scope,$http) {
    $scope.helloText={
        title:'Hello world!',
        content:'FastDFS是一个开源的轻量级分布式文件系统，它对文件进行管理，功能包括：文件存储、文件同步、文件访问（文件上传、文件下载）等，解决了大容量存储和负载均衡的问题。\n特别适合以文件为载体的在线服务，如相册网站、视频网站等等。',
        code:'public void static main(){}'
    };
    $scope.editorOptions={
        lineNumbers: true,
        readOnly: 'nocursor',
        mode: 'text/x-java',
        theme:'icecoder'
    };
}]);
// abcdef
// base16-dark
// icecoder
//material
//seti