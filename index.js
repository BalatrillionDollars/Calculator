function loading(){
    const stored = sessionStorage.getItem('history');
    if(stored){
        equations = JSON.parse(stored);
    }
    else{
        equations = []
        sessionStorage.setItem("history", JSON.stringify(equations));
    }
}
let i = sessionStorage.getItem("history").length;
function add(a){
    document.getElementById("in").value += a;
}
function ev(){
    let tempEq = document.getElementById("in").value;
    document.getElementById("out").innerText = eval(tempEq);
    equations.push(tempEq);
    sessionStorage.setItem("history", JSON.stringify(equations));
}
function arrow(a){
    if(!document.getElementById("out").value === equations[i]){
        document.getElementById("out").value = equations[i];
    }
    if(equations[i+a]){
        i += a;
        document.getElementById("in").value = equations[i+a];
    }
    else if (i + a === equations.length){
        i += a;
        document.getElementById("in").value = "";
    }
}
