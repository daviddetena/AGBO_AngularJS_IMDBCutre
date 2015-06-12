/**
 * Created by daviddetena on 12/06/15.
 */
// Inyectamos en el json las properties que necesito
angular
    .module("imdbcutre")
    .value("Settings",{
        "apiUrl":"https://api.themoviedb.org/3/",
        "apiKey":"826b523c417cbb888744b13031d846c2",
        "apiLang":"es"
    });
