const indikatoren = document.getElementsByClassName("indikator");
indikatoren[0].classList.add("aktiv");

const slides = document.getElementsByClassName("slide");
slides[0].classList.add("aktiv");

let aktuellerIndex = 0;

function umschalten(anzahl) {
    let neuerIndex = aktuellerIndex + anzahl;

    if(neuerIndex < 0) {
        neuerIndex = slides.length -1;
    }

    if(neuerIndex > slides.length -1) {
        neuerIndex = 0;
    }

    springeZuEintrag(neuerIndex);
}

function springeZuEintrag(neuerIndex) {
    indikatoren[aktuellerIndex].classList.remove("aktiv");
    slides[aktuellerIndex].classList.remove("aktiv");

    indikatoren[neuerIndex].classList.add("aktiv");
    slides[neuerIndex].classList.add("aktiv");

    aktuellerIndex = neuerIndex;
}

setInterval(() => {
    umschalten(1);
}, 5500);