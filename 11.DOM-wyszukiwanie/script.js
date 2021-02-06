//zad 1

const list = document.querySelectorAll(".list");

//zad 2

function returnElement(el) {
    const elements = document.querySelectorAll(el);
    return elements;
}

//zad 3

const listElement = document.getElementById("list");

//zad 4

function showElements(el) {
    return document.querySelectorAll(el);
}

const li = showElements('li');
const ul = showElements('ul');
const span = showElements('span');
const span1 = showElements('div.list span'); //5
const span2 = showElements('div#spans span'); //5

console.log(li);
console.log(ul);
console.log(span);
console.log(span1);
console.log(span2);

