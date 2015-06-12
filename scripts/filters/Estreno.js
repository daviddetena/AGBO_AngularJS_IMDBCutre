/**
 * Created by daviddetena on 12/06/15.
 */

// Mi filtro no tiene dependencias. Por tanto no incluyo array de dependencias
angular
    .module("imdbcutre")
    .filter("estreno",function(){

        // Los filtros siempre reciben un function, con mínimo un parámetro (al que aplicamos
        // filtro)
        return function(fecha){
            return "Se estrena el " + fecha;
        };
    });
