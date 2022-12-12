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


function stvoriVozilo(){
  vozilo01.ime = uiObjekti.imeVozilo01.value;
  vozilo01.boja = uiObjekti.bojaVozilo01.value;
  vozilo01.brzina = uiObjekti.brzinaVozilo01.value;

  vozilo02.ime = uiObjekti.imeVozilo02.value;
  vozilo02.boja = uiObjekti.bojaVozilo02.value;
  vozilo02.brzina = uiObjekti.brzinaVozilo02.value;

  duljina.utrka = uiObjekti.duljinaUtrke01.checked ? 50 : (uiObjekti.duljinaUtrke02.checked ? 100 : 0);

  first.innerHTML = `<p>${vozilo01.ime}</p>`;
  second.innerHTML = `<p>${vozilo02.ime}</p>`;
  document.getElementById("first").style.visibility = "visible";
  document.getElementById("second").style.visibility = "visible";
}

function definirajVozila(event){
  event.preventDefault();

  stvoriVozilo();

  if(vozilo01.brzina < vozilo02.brzina){
    rezultat.innerHTML = `<p>Vozilo s nadimkom ${vozilo01.ime} je brže</p>`;
  } else if(vozilo01.brzina > vozilo02.brzina){
    rezultat.innerHTML = `<p>Vozilo s nadimkom ${vozilo02.ime} je brže</p>`;
  } else{
    rezultat.innerHTML = `<p>Vozila su podjednako brza!</p>`;
  }

  
  if(duljina.utrka == 0){
    rezultat.innerHTML += `<p>Niste odabrali duljinu utrke</p>`;
  } else if(duljina.utrka == 50 ){
    
    vrijemeVozila01 = duljina.utrka / vozilo01.brzina;
    vrijemeVozila02 = duljina.utrka / vozilo02.brzina;
    rezultat.innerHTML += `<p>Odabrali ste utrku na 50 km</p>`;
    rezultat.innerHTML += `<p>Vozilo s nadimkom ${vozilo01.ime} utrku će završiti za ${vrijemeVozila01}h!</p>`;
    rezultat.innerHTML += `<p>Vozilo s nadimkom ${vozilo02.ime} utrku će završiti za ${vrijemeVozila02}h!</p>`;
  } else{
    rezultat.innerHTML += `<p>Odabrali ste utrku na 100 km</p>`;
    
    vrijemeVozila01 = duljina.utrka / vozilo01.brzina;
    vrijemeVozila02 = duljina.utrka / vozilo02.brzina;
    rezultat.innerHTML += `<p>Vozilo s nadimkom ${vozilo01.ime} utrku će završiti za ${vrijemeVozila01}h!</p>`;
    rezultat.innerHTML += `<p>Vozilo s nadimkom ${vozilo02.ime} utrku će završiti za ${vrijemeVozila02}h!</p>`;
  }

  document.getElementById("first").style.backgroundColor = vozilo01.boja;
  document.getElementById("second").style.backgroundColor = vozilo02.boja;

  document.getElementById ("first").style.animationDelay = "2s";
  document.getElementById("second").style.animationDelay = "2s";
  document.getElementById("first").style.animationPlayState = "running";
  document.getElementById("second").style.animationPlayState = "running";

  document.getElementById("first").style.animationDuration = vrijemeVozila01+'s';
  document.getElementById("second").style.animationDuration = vrijemeVozila02+'s';

}
