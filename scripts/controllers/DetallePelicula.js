/**
 * Created by daviddetena on 14/06/15.
 *
 * Controlador para el detalle de una película
 */
angular
    .module("imdbcutre")
    .controller("DetallePelicula",["$scope","Pelicula",function($scope,Pelicula){

        // Con esto ya podemos consumir los datos de la película en su vista
        $scope.pelicula = Pelicula.data;
    }]);
