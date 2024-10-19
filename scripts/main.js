import { series } from './data.js';
var seriestable = document.getElementById("series");
console.log(series);
mostrarseries(series);
function mostrarseries(seriesList) {
    var seriesTbody = document.createElement('tbody');
    var totaltemporadas = 0;
    var _loop_1 = function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n                <td>".concat(serie.id, "</td>\n                <td>").concat(serie.titulo, "</td>\n                <td>").concat(serie.plataforma, "</td>\n                <td>").concat(serie.temporadas, "</td>");
        trElement.addEventListener('click', function () { return mostrarDetalles(serie); });
        seriesTbody.appendChild(trElement);
        totaltemporadas += serie.temporadas;
    };
    for (var _i = 0, seriesList_1 = seriesList; _i < seriesList_1.length; _i++) {
        var serie = seriesList_1[_i];
        _loop_1(serie);
    }
    var promedio = totaltemporadas / seriesList.length;
    var promedioT = document.createElement("tr");
    promedioT.innerHTML = "\n                <td>#</td>\n                <td><strong>promedio Temporadas:</strong></td>\n                <td>".concat(promedio, "</td>");
    seriesTbody.appendChild(promedioT);
    seriestable.appendChild(seriesTbody);
}
function mostrarDetalles(serie) {
    var serieDetail = document.getElementById("serie-detail");
    serieDetail.style.display = "block";
    document.getElementById("serie-imagen").src = serie.imagen;
    document.getElementById("serie-titulo").innerText = serie.titulo;
    document.getElementById("serie-plataforma").innerText = serie.plataforma;
    document.getElementById("serie-descripcion").innerText = serie.descripcion;
    document.getElementById("serie-enlace").href = serie.enlace;
}
