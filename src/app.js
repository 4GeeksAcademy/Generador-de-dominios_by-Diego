window.onload = () => {

let pronoun = ['the', 'our', 'this', 'my', 'every'];
let adj = ['great', 'big', 'fast', 'brave', 'lucky'];
let noun = ['jogger', 'racoon', 'planet', 'rocket', 'ninja'];
let ext = ['.com', '.net', '.eu', '.us', '.pe']

const btnGenerater = document.querySelector('.btn_generador');

btnGenerater.addEventListener("click", ()=>{

function getNumb(arr) {
  return Math.floor(Math.random() * arr.length)
}

let getPronoun = pronoun[getNumb(pronoun)];
let getAdj = adj[getNumb(adj)];
let getNoun = noun[getNumb(noun)];
let getExt = ext[getNumb(ext)];

let domGenerated = getPronoun + getAdj + getNoun + getExt;
console.log("Este es el Dominio: " + domGenerated)
document.querySelector('.domain').innerHTML=domGenerated;


let nounCut = getNoun.slice(0, -2)
let nounExt = getNoun.slice(-2)

let domHack = getPronoun + getAdj + nounCut + "." + nounExt;
console.log("Este es el Domain Hack: " + domHack)
document.querySelector('.hackDomain').innerHTML=domHack;



})

}