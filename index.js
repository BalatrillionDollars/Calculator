let i = JSON.parse(sessionStorage.getItem("history")).length - 1;
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
function add(a){
    document.getElementById("in").value += a;
}
function ev(){
    let tempEq = document.getElementById("in").value;
    document.getElementById('out').innerText = eval(tempEq);
    equations.push(tempEq);
    sessionStorage.setItem("history", JSON.stringify(equations));
    i++;
}
function arrow(a){
    if(!document.querySelector('input').value === equations[i]){
        document.querySelector('input').value = equations[i];
    }
    if(i+a < equations.length && i+a >= 0){
        i += a;
        document.querySelector('input').value = equations[i];
    }
    else if (i+a > equations.length){
        document.querySelector('input').value = "";
        document.getElementById('out').innerText = "";
    }

}
