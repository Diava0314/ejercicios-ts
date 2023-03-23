export const algorithm = () => {
  
    let edad: number = 0;
    console.log(edad);
    let nombre: string = "Juan";
    console.log(nombre);
    let soltero: boolean = false;
    console.log(soltero);
    let decimal: number =1.2;
    console.log(decimal);
    let estadoCivil: string = "";
    
    if( soltero  ) {
    estadoCivil = "Es soltero";
    } else {
        estadoCivil = "Es casado";
    };
    
    let frase: string = nombre+ " tiene esta edad "+ edad + " y mide "+ decimal+ " y es " + estadoCivil;
    console.log(frase);
    
    
      
    };

    