var app = angular.module('myApp', ['ui.bootstrap']);
app.controller('myCtrl', function($scope, $http) {

  $scope.customers = [{
    "_id": "Alfreds Futterkiste",
    "product_code": "Berlin",
    "price": "Germany"
  }, {
    "_id": "Ana Trujillo Emparedados y helados",
    "product_code": "México D.F.",
    "price": "Mexico"
  }, {
    "Name": "Antonio Moreno Taquería",
    "City": "México D.F.",
    "Country": "Mexico"
  }, {
    "Name": "Around the Horn",
    "City": "London",
    "Country": "UK"
  }, {
    "Name": "B's Beverages",
    "City": "London",
    "Country": "UK"
  }, {
    "Name": "Berglunds snabbköp",
    "City": "Luleå",
    "Country": "Sweden"
  }, {
    "Name": "Blauer See Delikatessen",
    "City": "Mannheim",
    "Country": "Germany"
  }, {
    "Name": "Blondel père et fils",
    "City": "Strasbourg",
    "Country": "France"
  }, {
    "Name": "Bólido Comidas preparadas",
    "City": "Madrid",
    "Country": "Spain"
  }, {
    "Name": "Bon app'",
    "City": "Marseille",
    "Country": "France"
  }, {
    "Name": "Bottom-Dollar Marketse",
    "City": "Tsawassen",
    "Country": "Canada"
  }, {
    "Name": "Cactus Comidas para llevar",
    "City": "Buenos Aires",
    "Country": "Argentina"
  }, {
    "Name": "Centro comercial Moctezuma",
    "City": "México D.F.",
    "Country": "Mexico"
  }, {
    "Name": "Chop-suey Chinese",
    "City": "Bern",
    "Country": "Switzerland"
  }, {
    "Name": "Comércio Mineiro",
    "City": "São Paulo",
    "Country": "Brazil"
  }],
  $scope.people=[],
  $scope.currentPage = 1,
  $scope.numPerPage = 5,
  $scope.maxSize = 5,
  $scope.products_table_datas=[],
  $scope.json;

  var request = {'searchString' : 'apple'};
  $http.get('/products', request).success(function(response) {

    angular.forEach(response, function(value, key) {


      $scope.products_table_datas [key]= {
        "_id":value._id,
        "product_code":value.product_code,
        "price":value.price};
        //console.log(value.price.toString());
    });
    //console.log(response.length);
    //console.log($scope.products_table_data[0].price);
  });
  
  // console.log($scope.customers);
  // console.log($scope.customers.length);
  // console.log($scope.json);
  // console.log($scope.products_table_datas);
  // console.log($scope.products_table_datas.length);

  $scope.numPages = function () {
    return Math.ceil(($scope.products_table_datas.length-1) / $scope.numPerPage);//$scope.products_table_datas.length
  };
  
  console.log($scope.numPages);

  $scope.$watch('currentPage + numPerPage', function() {
    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
    , end = begin + $scope.numPerPage;
    
    console.log(begin);
    console.log(end);
    $scope.people = $scope.products_table_datas.slice(begin, end);
    console.log($scope.people.toString);
    console.log($scope.people.length);
    console.log($scope.people);
  });
  
  
});