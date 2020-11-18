
var n = null;

var s = 0;

var cpteur = 0;

var m = 0;

while (n!=0)
{
    // 
    n = parseInt(window.prompt("saisissez un nombre"));
    console.log("n vaut : " + n);

    s = n + s;

    console.log("s vaut : " + s);
    
    //
    cpteur++;

    

    m = s/(cpteur - 1);  

   
    

    
}

if( n != -1){

console.log("s vaut : " + s);
console.log("m vaut : " + m);
}
else {
    console.log("impossible d'établir une moyenne !");

}