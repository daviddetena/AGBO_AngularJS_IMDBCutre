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
        $routeSegmentProvider.when("/peliculas","peliculas");           // cuando el link vaya a /peliculas cargo en div dinamico peliculas
        $routeSegmentProvider.when("/series","series");                 // cuando el link vaya a /series cargo en div dinamico series
        $routeSegmentProvider.when("/peliculas/:id/detalles","detalle_pelicula");       // : es para indicar que es dinámico

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
                }]/*
                Paises: [],
                Ciudades: []
                */
            },
            resolveFailed:{
                // Falla alguna de las promesas
                // No se navega al controlador si hay algún fallo en el resolve, aunque sólo falle en una
                // AngularJS no te dice en qué ha fallado
                // Aquí se podría, por ejemplo, poner un controlador y una vista, a una página de error
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

        // Segment para la vista en detalle de la película. $routeParams nos sirve para acceder
        // a los parámetros de la url definida en el $routeSegmentProvider con :id
        $routeSegmentProvider.segment("detalle_pelicula",{
            controller: "DetallePelicula",
            templateUrl: "views/DetallePelicula.html",
            resolve:{
                Pelicula: ["ApiService", "$routeParams", function(ApiService,$routeParams){
                    return ApiService.obtenerDatos("movie/" + $routeParams.id);
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
