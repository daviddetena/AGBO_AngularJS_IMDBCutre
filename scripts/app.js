/**
 * Created by daviddetena on 09/06/15.
 */

/*
    Setter del módulo
    Primer parámetro: nombre de mi módulo
    Segundo parámetro: array con inyecciones de dependencias que extiendo separado por comas
 */
// Inyectamos el módulo ng-route en mi módulo
// Bajamos de angular-route-segment.com el route-segment, necesitamos tb la dependencia view-segment
angular.module("imdbcutre",["ngRoute","route-segment","view-segment"]);
angular
    .module("imdbcutre")
    .config(["$routeSegmentProvider", function($routeSegmentProvider){
        // Configuramos el routing (asociamos un path a un controlador y una vista) mediante inyección de dependencias
        $routeSegmentProvider.when("/peliculas","peliculas");   // cuando el link vaya a /peliculas cargo en div dinamico peliculas
        $routeSegmentProvider.when("/series","series");         // cuando el link vaya a /series cargo en div dinamico series

        // Segment => vista dinámica. Asignamos a esta vista su controlador y su vista
        $routeSegmentProvider.segment("peliculas",{
            controller: "PeliculasCtrl",
            templateUrl: "views/Peliculas.html"
        })
    }]);


/*
    Getter
 */
//angular.module("imdbcutre");
