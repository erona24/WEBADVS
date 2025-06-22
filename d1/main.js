let text = document.getElementById("p1").innerHTML;
let search = text.search("sequences");

document.getElementById("demo").innerHTML = search;

function  myFunction(){
    let text1 = document.getElementById("demo2").innerHTML;
    document.getElementById("demo2").innerHTML = text1.replace("Rome",'Paris');
}

let text2 = document.getElementById("p3").innerHTML;
const pattern = /e/;

document.getElementById("demo3").innerHTML = pattern.test(text2);

let text3 = document.getElementById("p4").innerHTML;
const matches = text3.match(/s/g);

document.getElementById("demo4").innerHTML = matches.length;