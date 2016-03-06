<!-- Enter your HTML code here -->
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <style type="text/css">
            #res {
                background: lightgray;
                border: solid;
                width: 81%;
                height: 48px;
                font-size: 20px;
            }

            #btns {
                width: 90%;
            }

            #btn0, #btn1 {
                background: lightgreen;
                color: brown;
            }

            #btnClr, #btnEql {
                background: darkgreen;
                color: white;
            }

            #btnSum, #btnSub, #btnMul, #btnDiv {
                background: black;
                color: red;
            }

            Button {
                width: 22%;
                height: 36px;
                font-size: 18px;
            }
        </style>
        <title>Binary Calculator</title>
    </head>
    <body>
    	<script type="text/javascript">
          (function() {
      var divRes = document.createElement("div");
      divRes.setAttribute("id", "res");
      document.body.appendChild(divRes);
      
      var divBtns = document.createElement("div");
      divBtns.setAttribute("id", "btns");
      document.body.appendChild(divBtns);
      
      var btn0 = document.createElement("Button");
      btn0.setAttribute("id", "btn0");
      btn0.innerHTML = "0";
      divBtns.appendChild(btn0);
      
      var btn1 = document.createElement("Button");
      btn1.setAttribute("id", "btn1");
      btn1.innerHTML = "1";
      divBtns.appendChild(btn1);
      
      var btnClr = document.createElement("Button");
      btnClr.setAttribute("id", "btnClr");
      btnClr.innerHTML = "C";
      divBtns.appendChild(btnClr);
      
      var btnEql = document.createElement("Button");
      btnEql.setAttribute("id", "btnEql");
      btnEql.innerHTML = "=";
      divBtns.appendChild(btnEql);
      
      var btnSum = document.createElement("Button");
      btnSum.setAttribute("id", "btnSum");
      btnSum.innerHTML = "+";
      divBtns.appendChild(btnSum);
      
      var btnSub = document.createElement("Button");
      btnSub.setAttribute("id", "btnSub");
      btnSub.innerHTML = "-";
      divBtns.appendChild(btnSub);
      
      var btnMul = document.createElement("Button");
      btnMul.setAttribute("id", "btnMul");
      btnMul.innerHTML = "*";
      divBtns.appendChild(btnMul);
      
      var btnDiv = document.createElement("Button");
      btnDiv.setAttribute("id", "btnDiv");
      btnDiv.innerHTML = "/";
      divBtns.appendChild(btnDiv);
      
      var expression = "";
      var hasOperator = false;
      
      function renderExpression() {
     		divRes.innerHTML = expression;	 	
      }
      
      function appendExpressionBy(value) {
      	expression += value;
        renderExpression(); 	
      }
      
      function updateExpressionBy(value) {
      	expression = value;
        renderExpression(); 	
      }
      
      function calculate() {
      	if(!hasOperator) {
        	return;
        }
        
        hasOperator = false;
      	var operands = expression.split(/[-+*/]/);
        var op1 = Number.parseInt(operands[0] || 0, 2);
        var op2 = Number.parseInt(operands[1] || 0, 2);
        
        var operator = expression.replace(/\d+/g, "");
        var result = 0;
        switch(operator) {
        	case "+" :
          	result = op1 + op2;
            break;
          case "-" :
          	result = op1 - op2;
            break;
          case "*" :
          	result = op1 * op2;
            break;
          case "/" :
          	result = op1 / op2;
            break;
        }
        updateExpressionBy(result.toString(2));
      }
      
      function handleOperatorClick(operator) {
      	if(hasOperator) {
        	calculate();
        }
        
        hasOperator = true;
        appendExpressionBy(operator);
      }
      
      btn0.addEventListener("click", function() {
      	appendExpressionBy("0");
      });
      
      btn1.addEventListener("click", function() {
      	appendExpressionBy("1");
      });
      
      btnClr.addEventListener("click", function() {
      	updateExpressionBy("");
        hasOperator = false;
      });
      
      btnSum.addEventListener("click", function() {
          handleOperatorClick("+");
      });
      
      btnSub.addEventListener("click", function() {
      	handleOperatorClick("-");
      });
      
      btnMul.addEventListener("click", function() {
      	handleOperatorClick("*");
      });
      
      btnDiv.addEventListener("click", function() {
      	handleOperatorClick("/");
      });
      
      btnEql.addEventListener("click", function() {
      	calculate();	
      });
  }());
        </script>
    </body>
</html>
