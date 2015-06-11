/**
 * Created by daviddetena on 10/06/15.
 */
// en controller va el nombre del controlador. Cualquier controlador recibe un $scope
// nombre controlador: NavegacionCtrl
angular
    .module("imdbcutre")
    .controller("NavegacionCtrl",["$scope","$routeSegment",function($scope,$routeSegment){
        // En este controlador hacemos que se seleccione la pestaña adecuada en función de la vista

        // Si incluimos en el $scope, estará accesible a la vista
        $scope.rutaEsPeliculas = function(){
            // Devuelve si la ruta por la que se navega empieza por "peliculas"
            return $routeSegment.startsWith("peliculas");
        };

        $scope.rutaEsSeries = function(){
            // Devuelve si la ruta por la que se navega empieza por "series"
            return $routeSegment.startsWith("series");
        };

    }]);