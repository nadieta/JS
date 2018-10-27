var nom = prompt ("Introdueix el teu nom i cognoms: ");
//var nom = "Nadia Amez Gar";
var frase = "APartirDelTeuNomICognomsGeneroElTeuAliesUsuari"; 
var cognom1;
var cognom2;
var nom1;
var alias = composeAlias(nom, cognom1, cognom2, frase);



  

function composeAlias(nom){
    
    var nomArray = splitNom(nom);
    nom1 = nomArray[0];
    var numInt = nom1.length;
    cognom1 = nomArray[1];
    cognom2 = nomArray[2];
    var num = numInt.toString();
    alias = nom1.charAt(0).concat(cognom1.charAt(0), cognom2.charAt(0), num, frase.charAt(numInt), frase.charAt(numInt+1));
       document.write("El teu nom és: " + alias,
                     " La frase és  : " + frase); 
}


function splitNom(nom, cognom1, cognom2){
 if (nom != null){
    
     nom = nom.split(" ");
             nom1 = nom[0];
             cognom1 = nom[1];
             cognom2 = nom.slice(-1)[0];
        }
     
    return [nom1, cognom1, cognom2];
    }
