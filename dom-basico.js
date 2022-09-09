const h1 = document.querySelector('h1');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const btn = document.querySelector('#btn-calcular');
const result = document.querySelector('#result');
const form = document.querySelector('#form');

form.addEventListener('submit', onClick);

 function onClick(event){
    console.log(event);
    event.preventDefault();
     var sumaInputs = num1.value + num2.value;
    result.innerText = "El resultado de la concatenación es: " + sumaInputs;
 }

