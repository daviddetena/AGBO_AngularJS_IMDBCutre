/**
 * Created by daviddetena on 10/06/15.
 */
// En controller va el nombre del controlador. Todos los controladores reciben un $scope
// En películas aplicamos filtros en la vista. En las series, aplicamos filtro en el controlador.
// Para ello, incluimos la dependencia $filter
angular
    .module("imdbcutre")
    .controller("SeriesCtrl",["$scope","ApiService","$filter",function($scope,ApiService,$filter){

        // El get del promise ya lo cargamos con el ApiService, pero el then lo necesitamos
        ApiService
            .obtenerDatos("tv/airing_today")
            .then(
            // La cosa ha ido bien
            function(datos){
                // Aplicamos filtro a la colección devuelta => datos.data.results
                // Como segundo parámetro del filtro indicamos que ordene por nombre
                $scope.series = $filter("orderBy")(datos.data.results, "original_name");
                //debugger;
            },
            // Algo ha ido a mal
            function(){
                alert("Algo ha ido mal");
            });
    }]);
