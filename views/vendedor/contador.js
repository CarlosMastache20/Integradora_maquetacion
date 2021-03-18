/*Contador 1*/
var count = 1;
var countEl = document.getElementById("count");

function plus() {
    count++;
    countEl.value = count;
}

function minus() {
    if (count > 1) {
        count--;
        countEl.value = count;
    }
}

/*Contador 2*/

var count2 = 1;
var countEl2 = document.getElementById("count2");

function plus2() {
    count2++;
    countEl2.value = count2;
}

function minus2() {
    if (count2 > 1) {
        count2--;
        countEl2.value = count2;
    }
}


/*Contador 3*/
var count3 = 1;
var countEl3 = document.getElementById("count3");

function plus3() {
    count3++;
    countEl3.value = count3;
}

function minus3() {
    if (count3 > 1) {
        count3--;
        countEl3.value = count3;
    }
}