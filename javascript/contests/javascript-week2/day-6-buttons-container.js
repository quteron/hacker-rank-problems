(function() {
    function clickHandler() {
        var ids = "12369874".split("");
        var prevText = null;
        for(var i = 0; i < ids.length; i++) {
            var current = "btn" + ids[i];
            var prev = "btn" + ids[(ids.length + i - 1)%ids.length]; 
            
            var btnCurrent = document.getElementById(current);
            var btnPrev = document.getElementById(prev);

            if(prevText === null) {
                prevText = btnCurrent.innerHTML;
                btnCurrent.innerHTML = btnPrev.innerHTML;
            } else {
                var temp = btnCurrent.innerHTML;
                btnCurrent.innerHTML = prevText;
                prevText = temp;
            }
        }
    }
    
    var btns = document.createElement("div");
    btns.className="buttonContainer";
    btns.setAttribute("id", "btns");
    
    for(var i = 1; i<= 9; i++) {
        var btn = document.createElement("Button");
        btn.className = "button";
        btn.setAttribute("id", "btn" + i);
        btn.innerHTML = i;
        
        if(i === 5) {
            btn.addEventListener("click", clickHandler);
        }
        
        btns.appendChild(btn);
    }
    
    document.body.appendChild(btns);
}());
