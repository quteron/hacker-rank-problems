(function() {
    var button = document.createElement("Button");
    button.setAttribute("id", "btn");
    button.innerHTML = "0";
    document.body.appendChild(button);
    
    button.addEventListener("click", function() {
        var count = Number(button.innerHTML); 
        button.innerHTML = ++count;
    });
}());
