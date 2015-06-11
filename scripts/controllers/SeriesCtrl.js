/**
 * Created by daviddetena on 10/06/15.
 */
//en controller va el nombre del controlador. Todo controlador recibe un $scope
angular
    .module("imdbcutre")
    .controller("SeriesCtrl",["$scope","$http","ApiService",function($scope,$http,ApiService){

        // El get del promise ya lo cargamos con el ApiService, pero el then lo necesitamos
        ApiService
            .obtenerDatos("tv/airing_today")
            .then(
            // La cosa ha ido bien
            function(datos){
                $scope.series = datos.data.results;
                //debugger;
            },
            // Algo ha ido a mal
            function(){
                alert("Algo ha ido mal");
            });
    }]);
