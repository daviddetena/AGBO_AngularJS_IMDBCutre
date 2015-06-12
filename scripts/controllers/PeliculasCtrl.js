/**
 * Created by daviddetena on 10/06/15.
 */
//en controller va el nombre del controlador. Todos los controladores reciben un $scope
// Sustuimos ApiService por la resolución de promesa del routeSegmentProvider llamada Peliculas
angular
    .module("imdbcutre")
    .controller("PeliculasCtrl",["$scope","Peliculas",function($scope,Peliculas){

        // En vez de hacer que el controlador llame al servicio para que este haga la petición a la API
        // hacemos que antes de llevar a la vista películas me resuelva la promesa y la asigne a Peliculas
        $scope.peliculas = Peliculas.data.results;
    }]);
