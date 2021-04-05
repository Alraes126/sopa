var words=["etiqueta","Main","link","html","code","body","table","css","web","center","doctype"];
var done=false;
var tempword="";


$("td").click(function(){
let letra=$(this).html();    
FindWord(letra.toLowerCase())
})

function FindWord(cualquiermierda){
    tempword+=cualquiermierda;
    if(words.includes(tempword)){
        alert("palabra encontrada")
        done=true;
        CheckWord(tempword)
        tempword="";
        
    }
    else{
       
        done=false;
    }

    
}

 function CheckWord(L){
    $("."+L).css("background-color","green");
 }