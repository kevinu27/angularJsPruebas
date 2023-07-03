var app = angular.module('yugiohApp', []) // yugioh es el nombre del proyecto

app.controller('yugiohCardsCrtl', function($scope){

    this.cards = cards
    $scope.cards = cards
    $scope.mostrarBoton2 = false

    $scope.mostrarNombreCard = function(){
        console.log('$scope.cards')
        $scope.mostrarBoton2 = !$scope.mostrarBoton2
    }
    $scope.listaParaBucle = ['a', 'v', 'c']


})

const cards = {
    carta1: 'mago',
    carta2: 'dragon'
}