/**
 * Created by daviddetena on 11/06/15.
 */
angular
    .module("imdbcutre")
    .service("ApiService",["$http","Settings",function($http,Settings){

        // Sólo lo que cuelga de this será accesible desde fuera
        this.obtenerDatos = function(ruta){

            // Devolvemos la petición al controlador
            return $http.get(Settings.apiUrl + ruta,{
                // Segundo parámetro tipo json que acepta params (parámetros que pasamos por url)
                params:{
                    "api_key":Settings.apiKey,
                    "language":Settings.apiLang
                },
                cache: true     // Pedimos que cachee resultados para no realizar tantas peticiones
            });
        };
    }]);
