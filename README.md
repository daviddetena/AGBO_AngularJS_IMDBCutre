##IMBD Cutre
#####KeepCoding Master Bootcamp I. Módulo de AngularJS, HTML5 y CSS3
######Projecto que se implementa a lo largo de la semana del curso

Este proyecto consiste en una especie de IMDB de películas y series. Nos moveremos entre ellas a través de los enlaces de navegación.
Al pulsar sobre Películas o Series, Angular se encarga de realizar el enrutamiento y mostrar el contenido correspondiente en una vista dinámica contenida debajo de la navegación principal.

Día 3:

Añadida la navegación principal.
Añadido el contenido que se muestra dinámicamente en función del elemento de navegación seleccionado. Para ello, disponemos de dos controladores: 

* Controlador para películas. Con su correspondiente vista para películas.
* Controlador para series. Con su vista para series.

Estos controladores nos ponen a nuestra disposición los datos recogidos del servidor a través del $scope, que es el pegamento entre controlador y vista. Incluimos estos datos mediante data-binding con {{}}.
