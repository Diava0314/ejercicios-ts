export const algorithm = () => {
   //Crear un algoritmo que pregunte 5 calificaciones y calcule su promedio.
   
   let promedio: number = 0 


let nota1: number  = Number  (prompt("Escriba la nota 1"));
let nota2: number = Number (prompt("escriba la nota 2"));
let nota3: number = Number (prompt("escriba la nota 3"));
let nota4: number = Number (prompt("escriba la nota4"));
let nota5: number = Number (prompt("escriba la nota 5"));

promedio = (nota1+nota2+nota3+nota4+nota5)/5;

alert("tu promedio es:" + promedio);
      
};

    