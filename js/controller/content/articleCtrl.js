blog.controller("articleCtrl",['$scope','$http',function ($scope,$http) {
    $scope.helloText={
        title:'Hello world!',
        content:'GIT不仅仅是个版本控制系统，它也是个内容管理系统(CMS),工作管理系统等。\n' +
        '\n' +
        '如果你是一个具有使用SVN背景的人，你需要做一定的思想转换，来适应GIT提供的一些概念和特征。\n' +
        '\n' +
        'Git 与 SVN 区别点：',
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
/*
theme:
  abcdef
  base16-dark
  icecoder
  material
  seti
*/
