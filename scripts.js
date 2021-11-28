var h1 = document.getElementsByTagName('h1')[0];
var iniciar = document.getElementById('ini');
var parar = document.getElementById('par');
var redefinir = document.getElementById('red');
var seg = 0;
var min = 0;
var hrs = 0;
var t;

function tick(){
    seg++;
    if (seg >= 60) {
        seg = 0;
        min++;
        if (min >=60){
            min = 0;
            hrs++;
        }
    }
}
function add() {
    tick();
    h1.textContent = (hrs > 9 ? hrs : "0" + hrs)
             + ":" + (min > 9 ? min : "0" + min)
             + ":" + (seg > 9 ? seg : "0" + seg);
             timer(1);
}

function timer() {
    t = setTimeout(add, 1000);

}

timer(1);
iniciar.onclick= timer;
parar.onclick = function() {
    clearTimeout(t);

}
redefinir.onclick = function() {
    h1.textContent = "00:00:00";
    segundos = 0; minutos = 0; horas = 0;

}