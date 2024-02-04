let elem = document.getElementById("three").innerText="Tres"
//EJ2
let sect=document.getElementsByTagName("section")[0]
let sect2=document.createElement("section")
sect2.innerHTML=sect.innerHTML
let h2 = sect2.getElementsByTagName("h2")[0];

let h4 = document.createElement("h4");
h4.innerText = h2.innerText.replace("h2","h4"); 

sect2.replaceChild(h4, h2);
document.getElementsByTagName("article")[0].appendChild(sect2)
//EJ3
document.getElementsByTagName("footer")[1].innerText="Este es el nuevo footer"
//document.getElementsByClassName("footer-container").getElementsByTagName("footer").innerText="Este es el nuevo footer"


//Ej4
document.getElementsByClassName("wrapper")[document.getElementsByClassName("wrapper").length-1].innerHTML+=" Nueva act"

//Ej5

let ej5=document.getElementsByTagName("aside")[0];
ej5.style["color"]="white"
ej5.style["backgroundColor"]="Black"

//Ej 6
imagen=document.createElement("img");
imagen.src="https://cdn.memes.com/up/91833581679784331/i/1679850164931.jpg"
imagen.width="400"

document.getElementsByTagName("article")[0].appendChild(imagen)

//Ej7
let html='<img src="https://cdn.memes.com/up/91833581679784331/i/1679850164931.jpg" width="240">'

document.getElementsByClassName("footer-container")[0].insertAdjacentHTML('beforeend',html)
//EJ8
let numeros = ""; // Inicializa una cadena vacía para almacenar los números

for (let i = 1; i <= 99; i++) {
  numeros += i; // Agrega el número actual a la cadena
  if (i < 99) {
    numeros += ","; // Si no es el último número, agrega una coma
  }
}

console.log(numeros); // Imprime la cadena resultante