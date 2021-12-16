import cipher from './cipher.js';

    document.getElementById('btncipher').addEventListener("click", function(){
        
        var inicialText= document.getElementById('mainText').value;
        var range= document.getElementById('rango').value;
        var textoCifrado= cipher.cifrado (inicialText,range)
    
        var cipherMessage= document.getElementById('finalMesagge');
        cipherMessage.innerHTML= textoCifrado;         
    });

    
    document.getElementById('btnDecipher').addEventListener("click", function(){
        
        var inicialText= document.getElementById('mainText').value;
        var range= document.getElementById('rango').value;
        var textoCifrado= cipher.descifrado (inicialText,range)
    
        var cipherMessage= document.getElementById('finalMesagge');
        cipherMessage.innerHTML= textoCifrado;         
    });



    document.getElementById('btnSend').addEventListener("click", function(){
        document.getElementById('finalMesagge').value = "";
        document.getElementById('mainText').value = "";          
    });


    document.getElementById('mainText').addEventListener( '', function(){
        document.getElementById('finalMesagge').value = "";
              
    });


    document.getElementById('validar').addEventListener("click", function(event){
     event.preventDefault();     
     var usuario = document.getElementById('name').value
     var contrasena = document.getElementById('pass').value

     if(usuario == '13' && contrasena== '12345')
     {
         alert('usuario valido')

       document.getElementById('formulario').style.display= 'none'
       document.getElementById('cifrador').style.display= 'block'
      
     }

     else{ 
         alert ('verifique sus datos')
     }
    });

   
