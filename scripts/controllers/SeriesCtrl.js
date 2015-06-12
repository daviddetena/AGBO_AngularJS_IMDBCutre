/**
 * Created by daviddetena on 10/06/15.
 */
// En controller va el nombre del controlador. Todos los controladores reciben un $scope
// En películas aplicamos filtros en la vista. En las series, aplicamos filtro en el controlador.
// Para ello, incluimos la dependencia $filter
angular
    .module("imdbcutre")
    .controller("SeriesCtrl",["$scope","Series","$filter",function($scope,Series,$filter){

        // En vez de hacer que el controlador llame al servicio para que este haga la petición a la API
        // hacemos que antes de llevar a la vista series me resuelva la promesa y la asigne a Series
        $scope.series = $filter("orderBy")(Series.data.results, "original_name");
    }]);
