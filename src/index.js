import './style.css';

var tomb = [];
var hossz = [];

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mindGomb').addEventListener('click', async() => {
        let response = await fetch('./quotes.json');
        let eredmeny = await response.json();
        let idezetek = eredmeny.quotes;
        idezetek = idezetek.sort((a, b) => {
            if (a.author < b.author) {
              return -1;
            }
          });
        adatMegjelenites(idezetek);
        
    });

    document.getElementById('theGomb').addEventListener('click', async() => {
        let response = await fetch('./quotes.json');
        let eredmeny = await response.json();
        let idezetek = eredmeny.quotes;
        theMegjelenites(idezetek);
        
    });  
    
    document.getElementById('hosszGomb').addEventListener('click', async() => {
        let response = await fetch('./quotes.json');
        let eredmeny = await response.json();
        let idezetek = eredmeny.quotes;
        hosszMegjelenites(idezetek);
        
    });  

    document.getElementById('dbGomb').addEventListener('click', async() => {
        let response = await fetch('./quotes.json');
        let eredmeny = await response.json();
        let idezetek = eredmeny.quotes;
        darabMegjelenites(idezetek);
        
    });  
})



function adatMegjelenites(idezetek) {
    let lista = document.getElementById('szerzok');
    lista.innerHTML = "";
    for (let p of idezetek) {
        let li = document.createElement('li');
        li.textContent = p.author;
        lista.appendChild(li);
    }
}

function theMegjelenites(idezetek){
    tomb = [];
    let lista = document.getElementById('theLista');
    lista.innerHTML = "";
    var regexThe = /(?:^|\W)the(?:$|\W)/;
    var regexNagyThe = /(?:^|\W)The(?:$|\W)/;

    for (let p of idezetek) {
        let adat = p.quote;
        tomb.push(adat);
    }

    for (let i = 0; i<tomb.length;i++) {
        let li = document.createElement('li');
        li.innerHTML = tomb[i].replace(regexThe, '<b> the </b>').replace(regexNagyThe, '<b> The </b>');
        lista.appendChild(li);
    }
}

function hosszMegjelenites(idezetek){
    hossz = [];
    let lista = document.getElementById('hosszEredmeny');
    lista.innerHTML = "";

    for (let p of idezetek) {
        let adat = p.quote.length;
        hossz.push(adat);
    }

    let szoveg = hossz.join(", ")
    lista.innerHTML=szoveg
}

function darabMegjelenites(idezetek){
    let szerzo = document.getElementById('szerzoText').value;
    
    let darabSzam = 0;

    let idezet = idezetek.filter(function(idezetek){
        return idezetek.author == szerzo;
    })

    for (let p of idezet) {
        darabSzam++;
    }

    document.getElementById('dbSzam').value = darabSzam;
    
}