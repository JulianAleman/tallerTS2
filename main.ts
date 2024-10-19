import {series} from './data.js'
import { Serie } from './Serie.js';


   
let seriestable: HTMLElement = document.getElementById("series")!;
console.log(series)
mostrarseries(series);

function mostrarseries(seriesList: Serie[]): void {
    let seriesTbody: HTMLElement = document.createElement('tbody')
    let totaltemporadas = 0;
    for (let serie of seriesList){
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `
                <td>${serie.id}</td>
                <td>${serie.titulo}</td>
                <td>${serie.plataforma}</td>
                <td>${serie.temporadas}</td>`;
        trElement.addEventListener('click', () => mostrarDetalles(serie));
        seriesTbody.appendChild(trElement);
        totaltemporadas += serie.temporadas;
    }
    let promedio = totaltemporadas/seriesList.length;

    let promedioT: HTMLElement = document.createElement("tr");
    promedioT.innerHTML = `
                <td>#</td>
                <td><strong>promedio Temporadas:</strong></td>
                <td>${promedio}</td>`;
    seriesTbody.appendChild(promedioT);
    seriestable.appendChild(seriesTbody);
}

function mostrarDetalles(serie: Serie): void {
    
    const serieDetail = document.getElementById("serie-detail")!;
    serieDetail.style.display = "block";
    (document.getElementById("serie-imagen") as HTMLImageElement).src = serie.imagen;
    (document.getElementById("serie-titulo") as HTMLElement).innerText = serie.titulo;
    (document.getElementById("serie-plataforma") as HTMLElement).innerText = serie.plataforma;
    (document.getElementById("serie-descripcion") as HTMLElement).innerText = serie.descripcion;
    (document.getElementById("serie-enlace") as HTMLAnchorElement).href = serie.enlace; 

    }