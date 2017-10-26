'use strict';

/*Controllers*/

blog.controller('BlogCtrl', ['$scope', '$translate', '$localStorage', '$window',
    function ($scope, $translate, $localStorage, $window) {
        // add 'ie' classes to html
        var isIE = !!navigator.userAgent.match(/MSIE/i);
        isIE && angular.element($window.document.body).addClass('ie');
        isSmartDevice($window) && angular.element($window.document.body).addClass('smart')

        // config
        $scope.blog = {
            name: '牧梦者 | Blog',
            version: '1.6.4',
            //for chart colors
            color: {
                primary: '#7266ba',
                info: '#23b7e5',
                success: '#27c24c',
                warning: '#fad733',
                danger: '#f05050',
                light: '#e8eff0',
                dark: '#3a3f51',
                black: '#1c2b36'
            },
            settings: {
                themeID: 1,
                navbarHeaderColor: 'bg-black',
                navbarCollapseColor: 'bg-white-only',
                asideColor: 'bg-black',
                headerFixed: true,
                asideFixed: false,
                asideFolded: false,
                asideDock: false,
                container: false
            }
        };

        //save settings to local storage
        if (angular.isDefined($localStorage.settings)) {
            $scope.blog.settings = $localStorage.settings;
        }else{
            $localStorage.settings=$scope.blog.settings;
        }

        $scope.$watch('blog.settings',function () {
            if ($scope.blog.settings.asideDock && $scope.blog.settings.asideFixed){
                //aside dock and fixed must set the header fixed.
                $scope.blog.settings.headerFixed=true;
            }
            //save to local storage
            $localStorage.settings=$scope.blog.settings;
        },true);

        //angular translate
        $scope.lang={isOpen:false};
        $scope.langs={en:'English',de_DE:'German',it_IT:'Italian'};
        $scope.selectedLang=$scope.langs[$translate.proposedLanguage()] || "English";

        $scope.setLang=function (langKey, $event) {
            //set the current lang
            $scope.selectedLang=$scope.langs[langKey];
            //You can change the language during runtime
            $translate.use(langKey);
            $scope.lang.isOpen=!$scope.lang.isOpen;
        };

        function isSmartDevice($window) {
            // Adapted from http://www.detectmobilebrowsers.com
            var ua = $window['navigator']['userAgent'] || $window['navigator']['vendor'] || $window['opera'];
            //Checks for iOS, Android, Blackberry, Opera Mini, and Windows mobile devices
            return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/).test(ua);
        }
    }]);
