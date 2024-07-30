
const inputebox = document.getElementById("inpute-box")
const listBox = document.getElementById("list-")
const blurquantity = document.getElementById("blurcontrol")
function buttonclick(){
    if(inputebox.value === ''){
        alert("you should type some thing")
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputebox.value
        listBox.appendChild(li);
        blurquantity.classList.add("bluradd")
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputebox.value = '';
    saveData();
}

listBox.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("chacked");
        saveData()
    } else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data" , listBox.innerHTML);
}
function showTast(){
    listBox.innerHTML = localStorage.getItem("data");
}
showTast();

