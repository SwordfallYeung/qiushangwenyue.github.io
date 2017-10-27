blog.controller('TypeAheadDemoCtrl',['$scope','$http',function ($scope,$http) {
    $scope.selected=undefined;
    $scope.states=['Alabama','Alaska','Arizona','Arkansas','Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
        'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
        'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
        'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
        'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    // Any function returning a promise object can be used to load values asynchronously 这方法没用到
    $scope.getLocation = function (val) {
        return $http.get('http://maps.googleapis.com/maps/api/geocode/json',{
            params:{
                address:val,
                sensor:false
            }
        }).then(function (result) {//正确请求成功时处理
            var address = [];
            angular.forEach(result.data.results,function (item) {
                address.push(item.formatted_address);
            });
            return address;
            alert("成功");
        }).catch(function (result) {//捕捉错误处理
            alert("错误");
        });
    };
}]);