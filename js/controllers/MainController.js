app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'Best Sellers'; 
  $scope.promo = 'Following are best seller books on Amazon. Vote you opinion!';
  $scope.products = [ 
  { 
    name: 'Go Set a Watchman: A Novel', 
    price: 19, 
    pubdate: new Date('2015', '03', '08'), 
    cover: 'img/go_set.jpg' ,
	author : 'Harper Lee',
    likes : 177,
    dislikes : 4,
  }, 
  { 
    name: 'The Life-Changing Magic of Tidying Up', 
    price: 8, 
    pubdate: new Date('2014', '11', '01'), 
    cover: 'img/life_change.jpg' ,
	author : ' Marie Kondo',
    likes : 160,
    dislikes : 3,
  },
  { 
    name: 'StrengthsFinder 2.0', 
    price: 23, 
    pubdate: new Date('2015', '09', '18'), 
    cover: 'img/strength.jpg' ,
	author : 'Tom Rath',
    likes : 95,
    dislikes : 2,
  }, 
  { 
    name: 'First 100 Words', 
    price: 12, 
    pubdate: new Date('2015', '01', '23'), 
    cover: 'img/words.jpg' ,
	author : 'Roger Priddy',
    likes : 47,
    dislikes : 1,
  }, 
];
  $scope.plusOne = function (index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function (index) {
    $scope.products[index].dislikes += 1;
  };
  
  
}]);
