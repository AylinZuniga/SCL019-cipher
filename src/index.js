import cipher from './cipher.js'; // importar como un objeto el js donde estan los metodos

    document.getElementById('btncipher').addEventListener("click", function(){ //espero el evento click del elemento con id btncipher

        var range= document.getElementById('rango').value;          //declaro variable range y le asigno el valor de id rango 
        var inicialText= document.getElementById('mainText').value;//declaro variable inicial text y le asigno el valor de id maintext
        var textoCifrado= cipher.encode(range,inicialText)         //declaro variable texto cifrado y le asigno el resultado de funcion cipher.encode 
        var cipherMessage= document.getElementById('finalMesagge');//declaro variable cipherMessage que toma el valor de final messsage
        cipherMessage.innerHTML= textoCifrado;                     // a final message toma el valor de texto cifrado
    });

    
    document.getElementById('btnDecipher').addEventListener("click", function(){ 
        
        var inicialText= document.getElementById('mainText').value;
        var range= document.getElementById('rango').value;
        var textoCifrado= cipher.decode (range,inicialText)
        var cipherMessage= document.getElementById('finalMesagge');
        cipherMessage.innerHTML= textoCifrado;         
    });



    document.getElementById('btnSend').addEventListener("click", function(){ //espero el evento click del elemento con id btnsend
        document.getElementById('finalMesagge').value = "";    // borrar mensaje
        document.getElementById('mainText').value = "";          
    });


    document.getElementById('mainText').addEventListener( '', function(){
        document.getElementById('finalMesagge').value = "";
              
    });


    document.getElementById('validar').addEventListener("click", function(event){
     event.preventDefault();     
     var usuario = document.getElementById('name').value
     var contrasena = document.getElementById('pass').value

     if(usuario == '13' && contrasena== '12')
     {
         /*alert('usuario valido')*/

       document.getElementById('formulario').style.display= 'none'
       document.getElementById('cifrador').style.display= 'block'
       document.getElementById('magicText').style.display= 'none'
       document.getElementById('reg').style.display= 'none'
       document.getElementById('astro').style.display= 'none'
       document.getElementById('astroImg').style.display= 'block'
     }

     else{ 
         alert ('verifique sus datos')
     }
    });

   
