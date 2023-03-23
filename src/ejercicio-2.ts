export const algorithm = () => {

    let operacion: string | null = prompt("Escriba la operacion");
    let resultado: number = 0
    let n: number = Number(prompt("escriba el numero 1"));
    let m: number = Number(prompt("escriba el numero 2"));
    let mensaje: string = "";

    switch (operacion) {
        case "suma":
            resultado = n+m;
            break;
        case "resta":
            resultado = n-m;
            break;
        case "multiplicacion":
            resultado = n*m;
            break;
        case "division":
            resultado = n/m;
            break        
        case "exp":
            resultado = Math.pow(n,m);
        default:
            mensaje = "La operacion" + operacion + "No existe";
            break;
    }

    alert("el resultaod de tu operacion es " + resultado);
      
};

    