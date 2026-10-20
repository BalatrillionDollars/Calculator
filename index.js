function loading(){
    if (!localStorage.getItem("history")) {
        hist = [];
    }
    if (!localStorage.getItem("eq")){
        eq = "";
    }
}
let hist = localStorage.getItem("history");
let eq = localStorage.getItem("eq");
function add(a){
    eq = eq + a;
    document.getElementById("displayBarB").innerText = eq;
}
function evaluate(){
    eq = document.querySelector("input").value;
    hist.push(eq);
    let ev = eval(eq)
    hist.push(ev);
    document.getElementById("displayBarA").innerText = ev;
    document.querySelector("input").value = "";
    localStorage.setItem("history", hist);

}
