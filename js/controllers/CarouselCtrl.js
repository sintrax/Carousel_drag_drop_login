angular.module('stangaOne1', ['ui.bootstrap']);
function CarouselDemoCtrl($scope){
  $scope.myInterval = 4000;
  $scope.slides = [
    {
      title: 'Developer',
      image: 'img/item-1.jpg',
      text: 'SPA Applications with AngularJS.'
    },
    {
      title: 'Turtle with Snail',
      image: 'img/item-2.jpg',
      text: 'Turtle with snail afternoon stroll.'
    },
    {
      title: 'Super-carton',
      image: 'img/item-3.jpg',
      text: "Тoday's superheroes."
    },
    {
      title: 'Turtle',
      image: 'img/item-4.jpg',
      text: 'Тurtle explores grenade!'
    },
    {
      title: 'Hand-Face',
      image: 'img/item-5.jpg',
      text: 'Funny personification.'
    },
    {
      title: 'Pokemon',
      image: 'img/item-6.jpg',
      text: 'Yellow pokemon-cat.'
    }
  ];
}