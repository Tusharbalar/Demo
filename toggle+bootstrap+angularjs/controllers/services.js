(function() {

    var app = angular.module("app.service", []);

    app.service("surveyService", function($http) {

      this.getData = function (callbackFunc) {
        $http({
            method: "GET",
            data: {something: true},
            contentType: 'application/json',
            dataType: 'jsonp',
            url: "http://localhost:8080/TheSanshaWorld/sfcms/fetch-survey-details"
          }).success(function(data){
            callbackFunc(data);
        }).error(function(){
           alert("error");
        });
      };

      this.setData = function(value) {
        if (confirm('Do you wanna to submit?')) {
          $http.post("http://localhost:8080/TheSanshaWorld/sfcms/save-survey-result-data", value).success(function(data, status) {
            window.open("../index.html","_self");
          });
         } else {
           return false;
         }
      };

    });

      app.factory('Data', function () {

        var data = {
            Index: ''
        };
        
        return {
            getIndex: function () {
                return data.Index;
            },
            setIndex: function (index) {
                data.Index = index;
                console.log("service", data.Index)
            }
         };
      });
    
})();
