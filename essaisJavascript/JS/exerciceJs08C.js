var n = window.prompt("saisissez un nombre");
var s = 0;
var d = 0;
var m = 0;

while (n!=0)
{
    s = n+s;
    console.log("Somme " + s);
    m = s/d++;
    console.log("Moyenne " + m);
}
