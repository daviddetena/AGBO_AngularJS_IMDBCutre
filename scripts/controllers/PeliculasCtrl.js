/**
 * Created by daviddetena on 10/06/15.
 */
//en controller va el nombre del controlador. Todos los controladores recibe un $scope
angular
.module("imdbcutre")
    .controller("PeliculasCtrl",["$scope","$http","ApiService",function($scope,$http,ApiService){

        // Obtenemos datos del servicio que hemos creado ApiService
        // El get del promise ya lo cargamos con el ApiService, pero el then lo necesitamos
        ApiService
            .obtenerDatos("movie/upcoming")
            .then(
            // La cosa ha ido bien
            function(datos){
                $scope.peliculas = datos.data.results;
                //debugger;
            },
            // Algo ha ido a mal
            function(){
                alert("Algo ha ido mal");
            });
    }]);
