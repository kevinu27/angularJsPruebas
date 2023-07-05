var app = angular.module('yugiohApp', []) // yugioh es el nombre del proyecto

app.controller('yugiohCardsCrtl', ['$scope', '$http', function($scope, $http){

    this.cards = cards
    $scope.cards = cards
    $scope.mostrarBoton2 = false
    $scope.rutaHtml ='parciales/navbar.html'

    $scope.mostrarNombreCard = function(){
        console.log('$scope.cards')
        $scope.mostrarBoton2 = !$scope.mostrarBoton2
    }
    $scope.listaParaBucle = ['a', 'v', 'c']
    $scope.jsonCards = {}
    $scope.jsonCards2 = {}

    $http.get('https://db.ygoprodeck.com/api/v7/cardinfo.php').then(function(data){
        // $scope.jsonCards = data

        // console.log($scope.jsonCards.data.data[100])
        // console.log($scope.jsonCards.data.data)
        // $scope.jsonCardsArrayToIterate = [] 
        // $scope.jsonCards.data.data.forEach(element => {
        //     $scope.jsonCardsArrayToIterate.push(element)
        // });
        // console.log('$scope.jsonCardsArrayToIterate', $scope.jsonCardsArrayToIterate)

    })

    $http.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal Monster').then(function(data2){
        $scope.jsonCards2 = data2

        console.log($scope.jsonCards2)
        console.log($scope.jsonCards2.data.data[100])
        console.log($scope.jsonCards2.data.data)
        $scope.jsonCardsArrayToIterate = [] 
        $scope.jsonCards2.data.data.forEach(element => {
            $scope.jsonCardsArrayToIterate.push(element)
        });
        console.log('$scope.jsonCardsArrayToIterate', $scope.jsonCardsArrayToIterate)


    })

}])

const cards = {
    carta1: 'mago',
    carta2: 'dragon'
}