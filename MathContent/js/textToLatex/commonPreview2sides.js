
function commonPreview2sides() 
{
     b = MathJax.Hub.getAllJax("expression-preview");
     var c1 = document.getElementById("inputText1").value;
     var c2 = document.getElementById("inputText2").value;
     
     if (0 < c1.length || 0 < c2.length) 
     {
	    displayedExpression = c1 +"="+ c2;
	    currentLatex = c1 +"="+ c2;
	    try 
	    {
		   currentExpressionTree1 = parseExpression(c1);
		   currentExpressionTree2 = parseExpression(c2);
		   currentLatex = "";
		   if ( null != currentExpressionTree1 && null != currentExpressionTree2)
		   {
			  currentLatex1 = printLatex(currentExpressionTree1);
			  currentLatex2 = printLatex(currentExpressionTree2);
			  currentLatex = currentLatex1 + "=" + currentLatex2;
			  a = 1;
		   }
		   if ( null != currentExpressionTree1 && c2 == "")
		   {
			  currentLatex1 = printLatex(currentExpressionTree1);
			  currentLatex = currentLatex1 + "=";
			  a = 1;
		   }
		   if ( null != currentExpressionTree2 && c1 == "")
		   {
			  currentLatex2 = printLatex(currentExpressionTree2);
			  currentLatex = "= " + currentLatex1;
			  a = 1;
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
var e1 = document.getElementById("inputText1");
var e2 = document.getElementById("inputText2");
e1.selectionStart = 0;
e1.selectionEnd = e1.value.length;
e1.focus();
ucitanLtx();

