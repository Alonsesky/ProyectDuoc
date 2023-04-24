/*function demo() {
    var nom = "<p>Hello, world!</p>";
    //document.getElementById("demo").innerHTML= nom;
    document.write(nom);
}*/

function promediar(){
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);
    var res = 0;
    var res = num1 + num2 + num3/3;
    document.getElementById('prom').value = res;

}
