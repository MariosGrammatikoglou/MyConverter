const display = document.getElementById('display');
const text = document.getElementById('textArea');


function encode(){
    const result1 = btoa(text.value);
    let result2 = result1.replace("Mzky","mao");
    result2 = result2.replace("a","KilLj0y");
    result2 = result2.replace("b","0meN21");
    result2 = result2.replace("c","G3kK0me");
    result2 = result2.replace("d","vAlOra5t");
    result2 = result2.replace("e","Al1r860t");
    result2 = result2.replace("f","Tr1pwlr3");
    result2 = result2.replace("W","m4Od1dIT");
    result2 = result2.replace("X","My3nc0d3r");
    result2 = result2.replace("Y","H3ll0W0rld");
    result2 = result2.replace("Z","Pr0gr4mm1ng");
    result2 = result2.replace("w","c4phrC4ge");
    result2 = result2.replace("x","enc0dH4pPnd");
    result2 = result2.replace("y","c0py7ha7");
    result2 = result2.replace("z","H1sP4c3");
    result2 = result2.replace("==","1s0nx2");
    display.value= result2;
}

function decode(){
    const result1 = text.value;
    let result2 = result1.replace("Mzky","mao");
    result2 = result2.replace("KilLj0y","a");
    result2 = result2.replace("0meN21","b");
    result2 = result2.replace("G3kK0me","c");
    result2 = result2.replace("vAlOra5t","d");
    result2 = result2.replace("Al1r860t","e");
    result2 = result2.replace("Tr1pwlr3","f");
    result2 = result2.replace("m4Od1dIT","W");
    result2 = result2.replace("My3nc0d3r","X");
    result2 = result2.replace("H3ll0W0rld","Y");
    result2 = result2.replace("Pr0gr4mm1ng","Z");
    result2 = result2.replace("c4phrC4ge","w");
    result2 = result2.replace("enc0dH4pPnd","x");
    result2 = result2.replace("c0py7ha7","y");
    result2 = result2.replace("H1sP4c3","z");
    result2 = result2.replace("1s0nx2","==");
    display.value= atob(result2);
}