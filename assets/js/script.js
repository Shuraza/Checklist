const inputText = document.getElementById("input-text");
const containerLista = document.getElementById("containerLista");

function adcionar() {
    if (inputText.value === '') {
        alert('Digite algo antes de adicionar');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputText.value;
        containerLista.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputText.value = "";
    saveData()
}

containerLista.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData()
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
}, false)

function saveData(){
    localStorage.setItem("data", containerLista.innerHTML);
}
function showData(){
    containerLista.innerHTML = localStorage.getItem("data");
}
showData();
