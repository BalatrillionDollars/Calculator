let i = 0;
const stored = sessionStorage.getItem('history');
if(stored){
    i=JSON.parse(stored).length-1;
    equations = JSON.parse(stored);
}
else{
    equations = [];
    sessionStorage.setItem("history", JSON.stringify(equations));
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
function arrow(direction){
    if(!document.querySelector('input').value === equations[i]){
        document.querySelector('input').value = equations[i];
    }
    if(i+direction < equations.length && i+direction >= 0){
        i += direction;
        document.querySelector('input').value = equations[i];
    }
    else if (i+direction >= equations.length){
        document.querySelector('input').value = "";
        document.getElementById('out').innerText = "";
    }

}
