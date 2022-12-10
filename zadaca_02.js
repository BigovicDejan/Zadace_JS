const uiObjekti = {
  imeVozilo01: document.getElementById("nadimak01"),
  bojaVozilo01: document.getElementById("boja01"),
  brzinaVozilo01: document.getElementById("brzina01"),

  imeVozilo02: document.getElementById("nadimak02"),
  bojaVozilo02: document.getElementById("boja02"),
  brzinaVozilo02: document.getElementById("brzina02"),

  duljinaUtrke01: document.getElementById("duljina01"),
  duljinaUtrke02: document.getElementById("duljina02"),
};

let vozilo01 = {};
let vozilo02 = {};
let duljina = {};
let brzina = {};
let vrijemeVozila01 = {};
let vrijemeVozila02 = {};

function stvoriVozilo(){
  vozilo01.imeVozilo01 = uiObjekti.imeVozilo01.value;
  vozilo01.bojaVozilo01 = uiObjekti.bojaVozilo01.value;
  vozilo01.brzinaVozilo01 = uiObjekti.brzinaVozilo01.value;

  vozilo02.imeVozilo02 = uiObjekti.imeVozilo02.value;
  vozilo02.bojaVozilo02 = uiObjekti.bojaVozilo02.value;
  vozilo02.brzinaVozilo02 = uiObjekti.brzinaVozilo02.value;

  duljina.utrka = uiObjekti.duljinaUtrke01.checked ? "duljina01" : (uiObjekti.duljinaUtrke02.checked ? "duljina02" : "");

  /*brzina.tkoJeBrzi = function(){return (vozilo01.brzinaVozilo01 > vozilo02.brzinaVozilo02 && (vozilo01.brzinaVozilo01 != vozilo02.brzinaVozilo02))};*/

  first.innerHTML = `<p>${vozilo01.imeVozilo01}</p>`;
  second.innerHTML = `<p>${vozilo02.imeVozilo02}</p>`;
}

function definirajVozila(event){
  event.preventDefault();

  stvoriVozilo();

  if(vozilo01.brzinaVozilo01 > vozilo02.brzinaVozilo02){
    rezultat.innerHTML = `<p>Vozilo s nadimkom ${vozilo01.imeVozilo01} je brže</p>`;
  } else if(vozilo01.brzinaVozilo01 < vozilo02.brzinaVozilo02){
    rezultat.innerHTML = `<p>Vozilo s nadimkom ${vozilo02.imeVozilo02} je brže</p>`;
  } else{
    rezultat.innerHTML = `<p>Vozila su podjednako brza!</p>`;
  }

  
  if(duljina.utrka == ""){
    rezultat.innerHTML += `<p>Niste odabrali duljinu utrke</p>`;
  } else if(duljina.utrka == "duljina01" ){
    let duljina = 50;
    vrijemeVozila01 = duljina / vozilo01.brzinaVozilo01;
    vrijemeVozila02 = duljina / vozilo02.brzinaVozilo02;
    rezultat.innerHTML += `<p>Odabrali ste utrku na 50 km</p>`;
    rezultat.innerHTML += `<p>Vozilo s nadimkom ${vozilo01.imeVozilo01} utrku će završiti za ${vrijemeVozila01}h!</p>`;
    rezultat.innerHTML += `<p>Vozilo s nadimkom ${vozilo02.imeVozilo02} utrku će završiti za ${vrijemeVozila02}h!</p>`;
  } else{
    rezultat.innerHTML += `<p>Odabrali ste utrku na 100 km</p>`;
    let duljina = 100;
    vrijemeVozila01 = duljina / vozilo01.brzinaVozilo01;
    vrijemeVozila02 = duljina / vozilo02.brzinaVozilo02;
    rezultat.innerHTML += `<p>Vozilo s nadimkom ${vozilo01.imeVozilo01} utrku će završiti za ${vrijemeVozila01}h!</p>`;
    rezultat.innerHTML += `<p>Vozilo s nadimkom ${vozilo02.imeVozilo02} utrku će završiti za ${vrijemeVozila02}h!</p>`;
  }
}

function promijeniBoju(){
  stvoriVozilo();
let color1 = vozilo01.bojaVozilo01;
let color2 = vozilo02.bojaVozilo02;

  document.getElementById("first").style.backgroundColor = color1;
  document.getElementById("second").style.backgroundColor = color2;

}

function delayRun() {
  document.getElementById ("first").style.animationDelay = "2s";
  document.getElementById("second").style.animationDelay = "2s";
  document.getElementById("first").style.animationPlayState = "running";
  document.getElementById("second").style.animationPlayState = "running";
}

let time1 ={};
let time2 ={};
function race() {
  let time1 = vrijemeVozila01;
  let time2 = vrijemeVozila02;
  
  document.getElementById("first").style.animationDuration = time1+'s';
  document.getElementById("second").style.animationDuration = time2+'s';
}