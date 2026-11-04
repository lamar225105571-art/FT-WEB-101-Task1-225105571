document.getElementById("toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

document.getElementById("name").addEventListener("input", function() {
    document.getElementById("hello").textContent = "Hello " + this.value;
});