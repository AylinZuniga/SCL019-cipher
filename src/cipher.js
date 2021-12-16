const cipher = {

  cifrado: function (texto,rango) {
  
    var fraseCifrada='' ;
    var textoOriginal= texto.toUpperCase() ;    
    
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
            var letraCifrada=  String.fromCharCode(((letra.charCodeAt() - 65 + parseInt(rango)) % 26 )+ 65)  
            fraseCifrada = fraseCifrada + letraCifrada 
        }
        
    }
     
    return fraseCifrada;

    }
    ,


    descifrado: function (texto,rango) {
  
      var fraseCifrada='' ;
      var textoOriginal= texto.toUpperCase() ;    
      
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
              
              var letraCifrada= String.fromCharCode((letra.charCodeAt() + 65 - parseInt (rango)) % 26+65)

              fraseCifrada = fraseCifrada + letraCifrada 


            
          }
          
      }
       
      return fraseCifrada;
  
      }
    
};

export default cipher;
