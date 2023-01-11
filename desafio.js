
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



/**
 *? EJERCICIO 10: Crear una función que reciba un arreglo de números como parámetro y calcule cuántos de esos números son divisibles por 5.
 *? La función debe retornar la cantidad de números divisibles por 5.
 *?  Ayuda: Usar el operador módulo (o resto) "%"
 */

 function divisiblesPorCinco(numeros = []) {

      let i= 0;
      let k= 0;

      for (i  in numeros ){

        if (numeros[i]%5 ==0  && numeros[i] !==0) 
        {
          ++k;
          
        }
       }

       return ` La cantidad de numeros divisible por 5 es : ${k}` ;



 }

 //const funci7 = divisiblesPorCinco([0,0,0,15,20]);
 //console.log(funci7);

 /**
 *? EJERCICIO 11: Crear una función que reciba un arreglo de números y realice la sumatoria de los mismos.
 *? La función debe retornar la sumatoria de esos números.
 *?
 */

function sumatoria(numeros = []) {

  let i =0;
  let k =0;

  for (i in numeros) {

    k = k + numeros[i];

  }

  return k;
}

//const funci8 = sumatoria(arregloFijo);
//console.log(funci8);

/**
 *? EJERCICIO 12: Crear una función que reciba el "objetoFijo" definido al inicio y verificar si la cantidad total de empleados de E-Contact indicada (100) es igual
 *? a la sumatoria de los empleados de las sedes.
 *? La función debe retornar True si son iguales, o False en caso de no ser iguales
 */

 function verificarCantidadEmpleados(econtact = {}) {

  let k=0;
  for (const [key,value] of  Object.entries(econtact.datos.sedes)) {

    k = k + value.empleados;
  }

  return k == econtact.datos.empleados;

 }

 //const funci9 = verificarCantidadEmpleados(objetoFijo);
 //console.log(funci9);

 /**
 *? EJERCICIO 13: Crear una función que retorne un nuevo arreglo con el cuadrado de cada número del "arregloFijo" definido al inicio
 *? Ayuda: para calcular el cuadrado de un número podemos usar la expresión "**" o la clase "Math" con su método "pow". Ver ejemplos a continuación:
 *? Ejemplo de 3 al cuadrado:
 *? console.log(3 ** 2)
 *? Ejemplo de 5 al cuadrado:
 *? console.log(Math.pow(5, 2))
 */

function calcularCuadrados(arreglo = []) {

  let i=0;

  let array2 = [];

  for (i in arreglo) {
  
    array2.push(arreglo[i]**2);
  
    
  }

  return array2;

}

//const funci10 = calcularCuadrados([0,20,3,4,5]);

//console.log(funci10);


/**
 *? EJERCICIO 14: Crear una función que reciba como parámetro un arreglo de 6 (seis) números como mínimo y realizar la sumatoria de los mismos.
 *? Si la sumatoria supera un valor de 100 retornar True.
 *? Caso contrario retornar False.
 *? Validar al inicio de la función que el arreglo cuente con la condición establecida. Si no cumple la misma, retornar False
 */

 function validarArreglo(numeros = []) {

  let i=0;
  let k=0;
  
    if ( numeros.length >= 6) {
 
       for (i in numeros) {
         k = k + numeros[i];
 
       }
 
       return k > 100;
 
     
    }else{
       return ` El arreglo no tiene  el mínimo de 6 elementos ` ;
    }


 }

 //const funci11 = validarArreglo([0,10,50,0,0,1]);
 //console.log(funci11);

/**
 *? EJERCICIO 15: Crear una función que reciba dos parámetros: un arreglo de strings con diferentes nombres, y un segundo parámetro con un nombre (string) cualquiera.
 *? La función debe retornar True si en ese arreglo se encuentra el nombre pasado como segundo parámetro. Caso contrario retornar False.
 *? Recordar que Javascript es "Case Sensitive", es decir, distingue entre mayúsculas y minúsculas.
 */

 function validarNombre(nombres = [], nombre) {

  let k=0;

  let i=0;

  for (i in  nombres) {
 
       if (nombres[i]==nombre) {
         
         k=1;
       }
  }
 
  if(k==1){
 
   return true;
  }else {
 
   return false;
 
  }


 }

// const funci12 = validarNombre(   ["hola", "tu","yo","estos","ya","mmm"],"que");
// console.log(funci12);

/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */

 function devolverPosicion(numeros = [], numero) {

  let i=0;
  let k=0;
  let array2 =[]
  for (i in numeros) {
  
    if(numeros[i]== numero){
  
        array2.push(i);
    }
    
  
  }

  if(array2.length==0){
    array2.push("null");
  }
  return ` La posición(es) en el arreglo del número ingresado : ${array2}` ;


 }

//const funci13 = devolverPosicion([3,3,3,3,5,6,7],3);
//console.log(funci13);


/**
 *? EJERCICIO 17: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un string. Retornar True si el segundo parámetro se encuentra
 *? dentro de los sectores de E-Contact. Caso contrario, retornar False
 */

 function verificarSector(econtact = {}, sector) {

    let k=0;
    let i=0;

    for (i of econtact.datos.sectores) {

      if (i == sector ){

        k=1;
      }

    }

    return k==1;
 }

//const funci14 = verificarSector(objetoFijo,"otro");
//console.log(funci14);


/**
 *? EJERCICIO 18: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un número (cantidad de empleados).
 *? La función debe retornar la cantidad de sedes que tengan una cantidad de empleados menor a la cantidad establecida como segundo parámetro.
 */

 function verificarCantidadEmpleados(econtact = {}, cantidad) {

   let array =[] ;
 
  for (const [key,value] of Object.entries( econtact.datos.sedes)) {
 
     if(value.empleados < cantidad)
     {
       array.push(key);
     }
   
  }

  return ` La cantidad de sedes que tienen un número de empleados menor a ${cantidad} es ${array.length} y son ${array}`;
 
 }

// const funci15 = verificarCantidadEmpleados(objetoFijo,30);
//console.log(funci15);


/**
 *? EJERCICIO 19: Crear una función que reciba 2 (dos) parámetros: un objeto y un string (clave a verificar). Si el objeto cuenta con la clave que se solicita
 *? como segundo parámetro, retornar True. Caso contrario retornar False.
 *? Ejemplo: El siguiente objeto cuenta con las claves nombre, edad y profesion. PERO no cuenta con la clave "altura" por ejemplo.
 *? const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador' }
 *?
 */

 function verificarClave(objeto = {}, clave) {

    let k=0;
    for (const [key,value] of Object.entries( objeto)) {
  
      if(key==clave){
        k=1;
  
      }
  
  
    }
     return k==1;


  }

 //const objeto = { nombre: 'Juan', edad: 35, profesion: 'programador' };
 //const funci16 = verificarClave(objeto,"altura");
 //console.log(funci16);

 /**
 *? EJERCICIO 20: Crear una función que reciba un arreglo de numeros reales y retornar un nuevo arreglo con los mismos numeros pero quitando su parte decimal.
 *? Recordatorio: al inicio hay un arreglo de numeros reales como ejemplo.
 */

function quitarParteDecimal(arregloNumerosReales = []) {
  let i =0;
  let array1 =[];
  for (i in arregloNumerosReales) {
  
    array1[i]=(~~arregloNumerosReales[i]);
  
  }

  return `El arreglo de números reales trunco es: ${array1}` ;


}

//const funci17 = quitarParteDecimal(numerosReales);
//console.log(funci17);




 
 
 
   
 







  

