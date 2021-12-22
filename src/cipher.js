const cipher = {

  encode: function (range,inicialText) { // creo la funcion enconde que recibe 2 parametros 
  
    var fraseCifrada='' ;                         // declaro var y le asigno valor vacio donde va el mensaje final
    var textoOriginal= inicialText.toUpperCase();   // toma el texto que llega por parametro y lo pasa a mayuscula 
    
    for (let index = 0; index < textoOriginal.length; index++) { // por medoi de bucle for recorro el texto ingresado y obtengo el codigo de cada letra
        const letra = textoOriginal[index].charCodeAt();       // declaro la constante donde va el codigo assci
       
        if(textoOriginal[index] == ' ')                      // x medio de la condicional if valido si existen caracteres extraños 
        {
            fraseCifrada = fraseCifrada + ' '
        }

        else if (textoOriginal[index] == ',')
          {
            fraseCifrada = fraseCifrada + ','

          }
        
        else           // si no hay ninguno de los anteriones se declara la var letra cifrada que es el resultado del algoritmo para codificar con los parametros entregados
        { 
            var letraCifrada=  String.fromCharCode(((letra - 65 + parseInt(range)) % 26 )+ 65)  
            // a la letra le resto los 65 se quede dentro de las letras en mayus luego le sumo el offset, 
            //le saco el residuo y le sumo el 65 para que vuelva al codigo
            // string.fromcharcode delvuele el caracter que se encuentre en el codigoascci 
            fraseCifrada = fraseCifrada + letraCifrada 
            // se juntan las letras que pasan por la formula 

            // console.log(letraCifrada,range,letra,)
        }
        
    }
     
    return fraseCifrada;
    // imprimo el resultado de la funcion 

    }
    ,


    decode: function (range,inicialText) {
  
      var fraseCifrada='' ;
      var textoOriginal= inicialText.toUpperCase() ;    
      
      for (let index = 0; index < textoOriginal.length; index++) {
          const letra = textoOriginal[index];
         
          if(textoOriginal[index] == ' ')
          {
              fraseCifrada = fraseCifrada + ' '
          }
  
          else if (textoOriginal[index] == ',')
          {
            fraseCifrada = fraseCifrada + ','

          }

          else
          { 
              
              var letraCifrada= String.fromCharCode((letra.charCodeAt() + 65 - parseInt (range)) % 26+65)

              fraseCifrada = fraseCifrada + letraCifrada 


            
          }
          
      }
       
      return fraseCifrada;
  
      }
    
};

export default cipher;
