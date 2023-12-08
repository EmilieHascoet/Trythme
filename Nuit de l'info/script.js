let tapis = document.getElementById('tapis');
let x=0;
let j=0

// Tapis roulant

// elements déchets images
const verre = document.createElement('img');
verre.setAttribute("src", "Images/dechets/verre.png");
const bouteille = document.createElement('img');
bouteille.setAttribute("src", "Images/dechets/bouteille.png");
const sac = document.createElement('img');
sac.setAttribute("src", "Images/dechets/sac_poubelle.png");

//map déchet temps
const mapDechet = new Map([]);
let listDechet = [];

const listBeat = [6, 8, 9, 12, 14, 16, 20, 21, 22, 27, 28, 30, 31, 33];
let listBeat2 = [];
for(let i=0; i<listBeat.length; i++) {
    const randomIndex = Math.floor(Math.random() * 3);
    console.log(randomIndex);
    if(randomIndex == 0) {
        mapDechet.set(listBeat[i] - 3, verre);
        listBeat2.push(listBeat[i] - 3);
    }
    if(randomIndex == 1) {
        mapDechet.set(listBeat[i] - 5, bouteille);
        listBeat2.push(listBeat[i] - 5);
    }
    if(randomIndex == 2) {
        mapDechet.set(listBeat[i] - 7, sac);
        listBeat2.push(listBeat[i] - 7);
    }
}

console.log(mapDechet);

function deplacer() {
  for(let i=0; i<listDechet.length; i++) {
    const dechet = listDechet[i];
    const styleObjet = window.getComputedStyle(dechet);
    const leftValeur = styleObjet.getPropertyValue("left");
    const leftValeurEnNombre = parseInt(leftValeur, 10) + 1;
    dechet.style.left = leftValeurEnNombre + "px";
    if (leftValeurEnNombre > 1435) {
        listDechet.shift();
    }
  }

  if(listBeat2.includes(x/200)) {
    j++;
    let dechet = mapDechet.get(x/200);
    dechet.style.left = 0 + "px"
    tapis.appendChild(dechet);
    const id = "dechet "+j;
    dechet.setAttribute("id", id); 
    listDechet.push(dechet);
  }
  x=x+1;
}

let bouge = setInterval(deplacer, 5);

document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
        console.log("La touche 'A' a été pressée");
    }
});

