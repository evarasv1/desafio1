
/**
* * Bienvenidos a la segunda parte del desafío E-Contact, la cual esta destinada a evaluar los conocimientos adquiridos de Javascript.
* * Este prueba constará de 20 ejercicios

* * NOTA1: El examen es individual
* * NOTA2: Fecha límite de entrega: Miércoles 11/01/2023 - 23:59hs

* * INFORMACION SOBRE EL DESARROLLO DE LOS EJERCICIOS:
* * Algunos ejercicios no tendrán que operar con el arreglo u objeto establecido a continuación, otros sí.
* * NO MODIFICAR el arreglo y objeto definido a continuación:
* * (Los datos son ficticios. El objeto es evaluar los conocimientos del alumno)
*/

const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];
const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];

const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};




/**
 *? EJERCICIO 1: Crear una función la cual reciba un parámetro de tipo string con el nombre de la persona y retornar un nuevo string
 *? dependiendo del largo del nombre:
 *? Si el largo se encuentra entre 0 y 5 retornar "Es un nombre corto. Su largo es de: "
 *? Si el largo es 11 o mayor retornar "Es un nombre largo. Su largo es de: "
 *? IMPORTANTE: validar que el parámetro recibido sea un string al inicio de la función, de lo contrario, retornar "El parámetro recibido es invalido"
 *? RECORDATORIO: al leer la sentencia "return" termina la ejecución de la función.
 */

 function largoDelNombre(nombre = "") {

    if(typeof nombre == "string"){

        if(nombre.length <= 5)
        {
            return `Es un nombre corto. Su largo es de ${nombre.length}`;
        }else if(nombre.length>5 && nombre.length < 11)
        {
            return `Es un nombre medio. Su largo es de ${nombre.length}`;
        }else{
            return `Es un nombre largo. Su largo es de ${nombre.length}`;
        }

        }else{

            return 'El parámetro recibido es invalido';
        }
    }
    
       

  //const funci1 = largoDelNombre(1);
  
  //console.log(funci1)



  /**
 *? EJERCICIO 2: Crear una función que reciba un arreglo como parámetro y cuente cuantos valores de tipo "number" se encuentran dentro de dicho arreglo
 */

function contarTipoNumber(arreglo = []) {

    let k=0;

    for (let i = 0; i < arreglo.length; i++) {
        
        if (typeof arreglo[i] == "number") {

            ++k;


        }       
        
        
    }

    return k;
}

 
 //const funci2 = contarTipoNumber(["a",2,"c",4,5,6,7]);
 //console.log(`En el arreglo hay ${funci2} valores del tipo number`)

 
 /**
 *? EJERCICIO 3: Crear una función que reciba un objeto como parámetro con los claves nombre, edad y altura, y retornar un string usando template literals
 *? con el siguiente formato: "Esta persona se llama XXX, tiene XXX años y su altura es de XXX"
 *? NOTA: Desestructurar los valores del objeto antes de utilizarlos
 */

 const person = new Object();
 person.name = "elvis";
 person.heigth = 1.65;
 person.age = 27;

function datosPersona(persona = {}) {

    let { name,heigth,age} = persona;

    return `Esta persona se llama ${name}, tiene ${age} años y su altura es de ${heigth}`;


}

//console.log(datosPersona(person));

/**
 *? EJERCICIO 4: Crear una función que reciba 2 (dos) parámetros de tipo "number" con el inicio y fin del rango a operar. Evaluar cuántos números dentro de
 *? ese rango son "pares". Luego, retornar un string con la frase "La cantidad de números pares obtenido fue de: "
 *?
 */

 function obtenerCantidadDePares(numero1, numero2) {

    let k =0;
    let min =0;
    let max =0;
    min = Math.min(numero1,numero2);
    max = Math.max(numero1,numero2);
    for (let i=min ; i <max; i++) {

        if ( i%2==0) {

            ++k;

            
        }
        
        
    }

    return k;

 }

 //const funci3 = obtenerCantidadDePares(100,1000);
 //console.log(funci3);

 /**
 *? EJERCICIO 5: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la "cantidad" de sedes que posee.
 *? Ayuda inicial: Primero asegurarse de obtener correctamente el objeto "sedes"
 *? De ser necesario utilizar un "contador" (no es obligatorio para su resolución)
 *? Recordar el método "Object.keys(nombreDelObjeto)" nos devuelve un arreglo de strings con los claves del objeto.
 *?
 */




function obtenerCantidadDeSedes(econtact = {}) {

    let k=0;

    for (let country in econtact.datos.sedes) {

        ++k;
        
    }
    
   return k;


}

//const funci4 = obtenerCantidadDeSedes(objetoFijo);
//console.log( `La cantidad de sedes de econtact es ${funci4}`);


/**
 *? EJERCICIO 6: Crear una función que reciba el "objetoFijo" definido al inicio y retornar el teléfono de "Peru".
 *? Validar al inicio de la función si el teléfono de Perú existe. Caso contrario retornar un string que diga "Perú no tiene asignado un teléfono"
 */


 function obtenerTelefonoPeru(econtact = {}) {
    
    if (econtact.datos && econtact.datos.sedes) {
     
      if (econtact.datos.sedes.Peru) {
        
        return  ` El teléfono de Perú es : ${econtact.datos.sedes.Peru.telefono}  `;
      }
    }
    
    return `Peru no tiene asignado un telefono  `;
  }

  //const funci5 = obtenerTelefonoPeru(objetoFijo);

  //console.log(funci5);




  /**
 *? EJERCICIO 7: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la cantidad de paises que cuentan con telefono asignado
 *?
 */

function obtenerPaisesConTelefono(econtact = {}) {
    let paises = '';

    for (const [key, value] of Object.entries(econtact.datos.sedes)) {
      if (value.telefono !== null) {
        paises = paises.concat(`${key}, `);
      }
    
      
    }

    return ` Cuentan con telefono asignado los siguientes paises : ${paises.slice(0,-2)}`;


}

//const funci6 = obtenerPaisesConTelefono(objetoFijo);

//console.log(funci6);







/**
 *? EJERCICIO 8: Crear una función que reciba 3 (tres) parámetros: uno de tipo "string" con la operación matemática a realizar,
 *? un segundo y tercer parámetro ambos de tipo number. Dependiendo de ello realizar la operación correspondiente y retornar el resultado de esa operación.
 *? Los valores permitidos a recibir son:
 *? "+"
 *? "-"
 *? "*"
 *? "/"
 *? En caso contrario, retornar un string con la frase "La operación matemática que intenta realizar es inexistente"
 */

 function calculoMatematico(operacion, numero1, numero2) {

    switch (operacion) {
        case '+':
            return numero1 + numero2;
            break;
        
        case '-':
            return numero1 - numero2;
            break;
        
        case '*':
            return numero1*numero2;
            break;

        case '/':
            return numero1/numero2 ;
            break;
    
        default:
            return ` La operacion matematica que intenta realizar es inexistente `;
            break;
    }
 }

 //const funci5 = calculoMatematico('*',5,2);
 //console.log(funci5);


 /**
 *? EJERCICIO 9: Crear una función que reciba un número como parámetro y, a partir de ahi, ir agregando ese mismo valor y los siguientes a un arreglo hasta que
 *? el número a ser evaluado sea igual al doble de ese número recibido como parámetro
 *? Validar al inicio de la función que el número sea positivo. De lo contrario retornar la frase "El número ingresado debe ser mayor a 0"
 *? Ayuda: usar ciclo while y recordar el método "push" para ir agregando valores al arreglo
 */

function cargarArreglo(numero) {}