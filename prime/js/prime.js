/**
 * Created by shant on 1/31/2016.
 */

function prime() {
    var isNotPrime;
    var val = document.getElementById('num').value;
    for (var i = 2; i < val; i++) {
        if (val % i == 0) {
            isNotPrime = true;
            break;
        }

    }
    if (isNotPrime) {
        document.getElementById("primeResult").innerHTML = "Its not a Prime Number";
    }
    else {
        document.getElementById("primeResult").innerHTML = "Its a Prime Number";
    }
    document.getElementById("primeInput").className = 'hide';
    document.getElementById("primeOutput").className = 'show';
}
function retryPrime() {

    document.getElementById("primeOutput").className = 'hide';
    document.getElementById("primeInput").className = 'show';
    clearPrimInput();

}
function clearPrimInput(){
    document.getElementById("num").value=null;
}