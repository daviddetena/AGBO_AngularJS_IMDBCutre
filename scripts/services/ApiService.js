/**
 * Created by daviddetena on 11/06/15.
 */
angular
    .module("imdbcutre")
    .service("ApiService",["$http",function($http){

        // Sólo lo que cuelga de this será accesible desde fuera
        this.obtenerDatos = function(ruta){

            // Devolvemos la petición al controlador
            return $http.get("https://api.themoviedb.org/3/" + ruta,{
                // Segundo parámetro tipo json que acepta params (parámetros que pasamos por url)
                params:{
                    "api_key":"826b523c417cbb888744b13031d846c2",
                    "language":"es"
                },
                cache: true     // Pedimos que cachee resultados para no realizar tantas peticiones
            });
        };
    }]);
