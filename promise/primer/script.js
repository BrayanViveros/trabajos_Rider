/*
function calcularPromedio() {
    var nota1 = parseFloat(document.querySelector("#nota1").value);
    var nota2 = parseFloat(document.querySelector("#nota2").value);
    var nota3 = parseFloat(document.querySelector("#nota3").value);
    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
      document.getElementById("resultado").textContent = "Por favor ingresa notas válidas.";
      return;
    }
    
    var promedio = (nota1 + nota2 + nota3) / 3;
    
    document.getElementById("resultado").textContent = "El promedio de notas es: " + promedio.toFixed(2);
  }

  // Array de notas
const notas = [85, 92, 78, 90, 88];

// Función flecha para calcular el promedio
const calcularPromedio = notas => {
  const suma = notas.reduce((total, nota) => total + nota, 0);
  return suma / notas.length;
};

// Mostrar el array de notas
console.log("Notas:", notas);

// Calcular y mostrar el promedio de notas
const promedio = calcularPromedio(notas);
console.log("Promedio de notas:", promedio);

*/
/*

function minota (nota1, nota2, nota3) {

    Array = [nota1, nota2, nota3];


    midefinitiva= calcular (Array);


    console. log (midefinitiva);


}


function calcular (Array) {

    for (i=0;i<=Array.length;i++)
    sumanota= definitiva [i];

    definitiva= sumanota/Array.length

    return definitiva;

}

*/
/*
const boton = document.querySelector ('#boton');


boton.addEventListener('click',(nota1, nota2, nota3)=> {

    const nota1 = document.querySelector('#nota1');
    const nota2 = document.querySelector('#nota2');
    const nota3 = document.querySelector('#nota3');

    

})


document.addEventListener('DOMContentLoaded',()=>{
    const boton = document.querySelector ('#boton');

    boton

});
*/

let p = document.getElementById('calcular');

function minota (nota1, nota2, nota3){

    let arraynotas = [ ];
    arraynotas.push(parseFloat(nota1))
    arraynotas.push(parseFloat(nota2))
    arraynotas.push(parseFloat(nota3))

    definitiva (arraynotas);
}


function definitiva (arraynotas){

  let nota = arraynotas [0] + arraynotas [1] + arraynotas [2] 



  let notafinal = nota/3;
  console.log(notafinal);

  document.getElementById("nota-final").textContent = notafinal;
}
