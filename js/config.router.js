'use strict';

/**
 * Config for the router
 */
//config先执行，run后执行。
//config阶段是给了ng上下文一个针对constant与provider修改其内部属性的一个阶段
//而run阶段是在config之后的在运行独立的代码块，通常写法runBlock
//简单的说一下就是ng启动阶段是 config-->run-->compile/link
//注入的服务也有区别:
//config可以注入$stateProvider, $urlRouterProvider, $controllerProvider, $provide, $httpProvider等等provider
//run可以像controlle一样注入service,例如配置公共变量等 run方法初始化全局数据，只对全局作用域起作用
//1.Config代码块--在这一阶段里面，AngularJS会连接并注册好所有数据源。因此，只有数据源和常量可以注入到Config代码块中。
// 那些不确定是否已经初始化好的服务不能注入进来
//2.Run代码块     Run代码块用来启动你的应用，并且在注射器创建完成之后开始执行。为了避免在这一点开始之后再对
// 系统进行配置操作，只有实例和常量可以被注入到Run代码块中。你会发现，在AngularJS中，Run代码块是与main方法最类似的东西。
//run方法用于初始化全局的数据，仅对全局作用域起作用
angular.module('blog')
    .run(['$rootScope','$state','$stateParams',
            function ($rootScope,$state,$stateParams) {
                $rootScope.$state=$state;
                $rootScope.$stateParams=$stateParams;
            }])
    .config(['$stateProvider','$urlRouterProvider',
        function ($stateProvider,$urlRouterProvider) {
            $urlRouterProvider.otherwise('/blog/contentBoard');
            $stateProvider
                .state('blog',{
                  abstract:true,
                  url:'/blog',
                  templateUrl:'tpl/blog.html',
                  resolve:{
                      deps:['$ocLazyLoad',function ($ocLazyLoad) {
                          return $ocLazyLoad.load(['js/controller/header/typeAheadDemoCtrl.js']);
                      }]
                  }
                })
                .state('blog.contentBoard',{
                    url:'/contentBoard',
                    templateUrl:'tpl/contentBoard.html',
                    // resolve:{
                    //     deps:['$ocLazyLoad',function ($ocLazyLoad) {
                    //         return $ocLazyLoad.load(['js/controllers/chart.js'])
                    //     }]
                    // }
                })
        }]);
