/**
 * Created by daviddetena on 10/06/15.
 */
//en controller va el nombre del controlador. Todo controlador recibe un $scope
angular
    .module("imdbcutre")
    .controller("PeliculasCtrl",["$scope",function($scope){

        // Colgamos en $scope para que la vista lo tenga disponible
        $scope.elementos = [{
            nombre: "The Matrix"
        },
        {
            nombre: "The Matrix Mala"
        },
        {
            nombre: "The Matrix Mala 2"
        }];
    }]);
