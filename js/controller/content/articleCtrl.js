blog.controller("articleCtrl",['$scope','$http',function ($scope,$http) {
    $scope.helloText={
        title:'Hello world!',
        content:'FastDFS是一个开源的轻量级分布式文件系统，它对文件进行管理，功能包括：文件存储、文件同步、文件访问（文件上传、文件下载）等，解决了大容量存储和负载均衡的问题。\n特别适合以文件为载体的在线服务，如相册网站、视频网站等等。',
        code:'                /**\n' +
        '                * @author y15079\n' +
        '                * @create 2017-11-03 16:36\n' +
        '                * @desc\n' +
        '                *\n' +
        '                * LineNumberReader比BufferedReader多了个功能，就是可以返回当前行号。\n' +
        '                * 另外setLineNumber能改变行号，却不能改变读的位置。\n' +
        '                *\n' +
        '                **/\n' +
        '                public class StringDemo {\n' +
        '                    public static void main(String args[]) {\n' +
        '                       String site = "www.runoob.com";\n' +
        '                       int len = site.length();\n' +
        '                       System.out.println( "菜鸟教程网址长度 : " + len );\n' +
        '                    }\n' +
        '                }'
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