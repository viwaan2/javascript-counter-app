let counter = document.getElementById("counter");

document.getElementById("incBtn").onclick = function() {
    counter.textContent = Number(counter.textContent) + 1;
}

document.getElementById("decBtn").onclick = function() {
    counter.textContent = Number(counter.textContent) - 1;
}

document.getElementById("rstBTN").onclick = function() {
    counter.textContent = 0;
}