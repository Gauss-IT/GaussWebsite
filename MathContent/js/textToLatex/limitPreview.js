
function updateLimitPreview() 
{
     b = MathJax.Hub.getAllJax("expression-preview");
     var c  = document.getElementById("inputText").value;
     var to = document.getElementById("limitTo").value;
     to = to.replace("inf","\\infty");
     to = to.replace("pi","\\pi");
     
     var radios = document.getElementsByName('rb1');
     var strana = "";
     if (radios[1].type === 'radio' && radios[1].checked) 
     {
	    strana = "-";
     }
     if (radios[2].type === 'radio' && radios[2].checked) 
     {
	    strana = "+";
     }
     if (0 < c.length) 
     {
	    displayedExpression = c;
	    currentLatex = c;
	    try 
	    {
		   currentExpressionTree = parseExpression(c);
		   if ( null != currentExpressionTree)
		   {
			  currentLatex = printLatex(currentExpressionTree);
			  currentLatex = "\\lim\\limits_{x \\to " + to + strana +"} ~ " + currentLatex; 
			  c = currentLatex;
			  a = 1;
		   }
		   else 
		   {
			  currentLatex = "";
			  a = 0;
		   }
		   document.getElementById("latexTextHidden").value = currentLatex;
		   document.getElementById("submitButton").disabled = false;
	    }
	    catch (g) {
		   document.getElementById("error-message").innerHTML = "<strong>" + currentLatex +"</strong>";
		   document.getElementById("error-message").style.display = "block";
		   document.getElementById("expression-preview-formula").style.display = "none";
		   document.getElementById("loading").style.display = "none";
		   document.getElementById("submitButton").disabled  = true;
		   a = -1;
	    }
	    if(a != -1)
	    {
		   document.getElementById("error-message").style.display = "none";
		   MathJax.Hub.Queue(["Text", b[0], currentLatex], [ucitanLtx]);	 
	    }
     }
     else
     {
	    currentLatex = "";
	    document.getElementById("expression-preview-formula").style.display = "none";
	    document.getElementById("submitButton").disabled  = true;
     }
}

function ucitanLtx() 
{
     document.getElementById("loading").style.display = "none";
     document.getElementById("expression-preview-formula").style.display = "block";    
}

var displayedExpression = void 0;
var currentExpressionTree = void 0;
var currentLatex = void 0;
var e = document.getElementById("inputText");
e.focus();
ucitanLtx();
