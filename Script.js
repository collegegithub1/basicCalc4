function btnclear() {
    document.getElementById("output").innerHTML = "0";
}

function removezero() {
    var value = document.getElementById("output").innerHTML;
    if(value=="0"){
        value = " "
        document.getElementById("output").innerHTML = value;

    }
}

function display(value) {
    removezero()
    document.getElementById("output").innerHTML += value;
}

function solution(){
    removezero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}