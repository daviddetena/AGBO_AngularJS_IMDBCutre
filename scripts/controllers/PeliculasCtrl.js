/**
 * Created by daviddetena on 10/06/15.
 */
//en controller va el nombre del controlador. Todo controlador recibe un $scope
angular
    .module("imdbcutre")
    .controller("PeliculasCtrl",["$scope","$http",function($scope,$http){

        // URL API (siguientes peliculas de estreno)
        var url = "https://api.themoviedb.org/3/movie/upcoming";

        // API key
        url+= "?api_key=826b523c417cbb888744b13031d846c2";

        // Idioma info
        url+= "&language=es";

        // Solicitamos un servicio a la API rest
        $http
            .get(url)
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
