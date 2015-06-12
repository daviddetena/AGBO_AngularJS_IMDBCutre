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
    .config(["$routeSegmentProvider", "$routeProvider" , function($routeSegmentProvider,$routeProvider){

        // Configuramos el routing (asociamos un path a un controlador y una vista) mediante inyección de dependencias
        $routeSegmentProvider.when("/peliculas","peliculas");   // cuando el link vaya a /peliculas cargo en div dinamico peliculas
        $routeSegmentProvider.when("/series","series");         // cuando el link vaya a /series cargo en div dinamico series

        // Segment => vista dinámica. Asignamos a esta vista de películas su controlador y su vista
        $routeSegmentProvider.segment("peliculas",{
            controller: "PeliculasCtrl",
            templateUrl: "views/Peliculas.html",
            resolve:{
                // Lo que se incluye en resolve, previo a llevarte a esta vista, te lo resuelte
                // y lo inyecta como dependencia
                // En este caso, la vista de películas no tiene sentido si no hay una colección de
                // películas
                // Todos los resolve resuelven promesas
                // En este caso, primero resolvemos la promesa (pedimos los datos) y luego navegamos
                // en vez de navegar y pedir los datos, que provoca un leve lag
                Peliculas:["ApiService",function(ApiService){
                    return ApiService.obtenerDatos("movie/upcoming");
                }]
            }
        });

        // Segment => vista dinámica. Asignamos a esta vista de series su controlador y su vista
        $routeSegmentProvider.segment("series",{
            controller: "SeriesCtrl",
            templateUrl: "views/Series.html",
            resolve:{
                Series:["ApiService",function(ApiService){
                    return ApiService.obtenerDatos("tv/airing_today");
                }]
            }
        });

        // Indicamos donde tiene que ir cuando le pasemos una ruta que no hemos definido arriba
        $routeProvider.otherwise({
            redirectTo: "/peliculas"
        });
    }]);


/*
    Getter
 */
//angular.module("imdbcutre");
