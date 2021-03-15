function Text_to_ascii(){
    var str = document.getElementById("text");
    str = str.value;
    var asc = "";
    if(str.value=='')
    {
        str.focus();
        return;
    }
    for(let i=0; i < str.length ; i++){
    asc += str.charCodeAt(i) + " ";
    }

    document.getElementById("ret").innerHTML = asc;
    document.getElementById("text").value = '';
}

function Asci_to_text(){
    var str = document.getElementById("asci");
    str = str.value;
    res = str.toString().split(" ");
    rel = res.map(Number);
    var txt = "";

    if(str.value=='')
    {
        str.focus();
        return;
    }

    for(let i=0; i<rel.length; i++)
    {
    txt += String.fromCharCode(rel[i]);
    }
    document.getElementById("ret1").innerHTML= txt;
    document.getElementById("asci").value = '';
}