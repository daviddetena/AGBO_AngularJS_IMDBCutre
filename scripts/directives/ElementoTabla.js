/**
 * Created by daviddetena on 14/06/15.
 *
 * Esta directiva la utilizaremos para pintar cada una de las filas de las
 * tablas, tanto de película como de serie, que serán pasadas por parámetro
 */

angular
    .module("imdbcutre")
    .directive("elementoTabla",function(){

        // Devolvemos distintas cosas en un objeto JSON
        return{
            // Restringimos la directiva a A (atributos de elementos existentes) o E (elementos nuevos nuestros)
            // Template es el código html que se sustituirá en la vista, en este caso, usamos un templateUrl
            // Replace:false tiene sentido si se van a distribuir y quieres permitir que se mantenga el nombre de
            // la directiva.
            // Scope: lo que vamos a sustituir en la templateUrl. Usamos = para que se sincronice con el binding
            // bidireccional. (@ para inmutables y & para suscripción a eventos). Model es uno de los atributos de entrada.
            // Es como una interfaz de comunicación con la parte de fuera de la directiva
            // Link es una función cuyo objetivo es manipular el DOM y establecer los eventos en él. Otras opciones
            // distintas al link son: compile (permite actualizar al DOM, pero no puedo establecer funcionalidad al
            // scope) y controller (que permite acceder al scope, pero no permite manipular al DOM).
            // Link puede manipular el dom => link:function (scope, element, attributes), element es el "template"
            // definido como parámetro de la directiva. Es donde SE ESTABLACE TODA LA LÓGICA DE LA DIRECTIVA y SE
            // MANIPULA EL DOM. Se ejecuta justo antes de renderizar la aplicación
            restrict: "AE",
            templateUrl: "views/ElementoTabla.html",
            replace: true,
            scope: {
                model: "="
            },
            link: function(scope){

            }
        }
    });