		   
		   
function textToLatex(or)
{
     // vraca array(promenjen_original, da_li_je_dolos_do_promene(0|1))
     function menjajRazlomak(str, ind)
     {
	    function promeniNumBezZagrade(match)
	    {
		   return "\\frac{"+match.substr(0, match.length-1) + "}/";
	    }
	    function promeniDenBezZagrade(match)
	    {
		   return "/{"+match.substr(1, match.length-1) + "}";
	    }		  
	    var rez = new Array();
	    if(ind == 0)
	    {
		   rezStr = "\\frac{}" + str;
		   rez[0]=rezStr;
		   rez[1]=1;
		   return rez;
	    }
	    if(ind == str.length-1)
	    {
		   rezStr = str + "{}";
		   rez[0]=rezStr;
		   rez[1]=1;
		   return rez;
	    }
				 
	    var stanjeZagrada = 0;
	    var buffer = "";
	    var start = 0;
	    var end = 0;
				 
	    ind = ind - 1;
	    
	    // brojilac sa zagradama
	    if(str[ind] == ")")
	    {
		   end = ind;
		   stanjeZagrada = stanjeZagrada - 1;
		   while(stanjeZagrada < 0 & ind>=0)
		   {
			  buffer = str[ind] + buffer;
			  ind = ind - 1;
			  if(str[ind] == ")")
			  {
				 stanjeZagrada = stanjeZagrada - 1; 
			  }
			  if(str[ind] == "(")
			  {
				 stanjeZagrada = stanjeZagrada + 1;
				 if (stanjeZagrada == 0)
				 {
					buffer = str[ind] + buffer;	   
				 }
			  }					     
		   }
		   start = ind;
		   if (buffer[0]=="(")
		   {
			  buffer = buffer.substr(1,buffer.length-2);
		   }
		   else
		   {
			  buffer = buffer.substr(0,buffer.length-1);
		   }
				 
		   preBuffera = str.substring(0,start);
		   posleBuffera = str.substring(end+1,str.length);
		   rezStr = preBuffera + "\\frac{" + buffer + "}" + posleBuffera;
		   rez[0]=rezStr;
		   rez[1]=1;
		   return rez;
	    }
			  
	    // brojilac bez zagradama	 
	    if(str[ind] != ")" & str[ind] != "}" & ind >= 0)
	    {				
		   var regNumBezZagr = /[a-zA-Z0-9]+\//gi;
		   if(regNumBezZagr.test(str))
		   {
			  rezStr=str.replace(regNumBezZagr, promeniNumBezZagrade);
			  rez[0]=rezStr;
			  rez[1]=1;
			  return rez;
		   }
		   else
		   {
			  rez[0]=str;
			  rez[1]=0;
			  return rez;    
		   }
	    }

			  
	    // imenilac sa zagradama
	    ind = ind + 2;
	    if(str[ind] == "(")
	    {
		   start = ind;
		   stanjeZagrada = stanjeZagrada + 1;
		   while(stanjeZagrada > 0 & ind<str.length)
		   {
			  buffer = buffer + str[ind];
			  ind = ind + 1;
			  if(str[ind] == ")")
			  {
				 stanjeZagrada = stanjeZagrada - 1;
				 if (stanjeZagrada == 0)
				 {
					buffer = buffer + str[ind];	   
				 }
			  }
			  if(str[ind] == "(")
			  {
				 stanjeZagrada = stanjeZagrada + 1;
			  }					     
		   }
		   end = ind;
				 
				 
		   if (buffer[buffer.length-1]==")")
		   {
			  buffer = buffer.substr(1,buffer.length-2);
		   }
		   else
		   {
			  buffer = buffer.substr(1,buffer.length-1);
		   }				 
		   preBuffera = str.substring(0,start);
		   posleBuffera = str.substring(end+1,str.length);
		   rezStr = preBuffera + "{" + buffer + "}" + posleBuffera;
		   rez[0]=rezStr;
		   rez[1]=1;
		   return rez; 
	    }
			  
	    // imenilac bez zagrada
	    if(str[ind] != "(" & str[ind] != "{" & ind < str.length)
	    {
		   var regDenBezZagr = /\/[a-zA-Z0-9]+/gi;
		   if(regDenBezZagr.test(str))
		   {
			  rezStr=str.replace(regDenBezZagr, promeniDenBezZagrade);
			  rez[0]=rezStr;
			  rez[1]=1;
			  return rez;
		   }
		   else
		   {
			  rez[0]=str;
			  rez[1]=0;
			  return rez;    
		   }
	    }
	    rez[0]=str;
	    rez[1]=0;
	    return rez;
     } // menjaj razlomak

     function menjajStepen(str,ind)
     {
	    function promeniStepen(match)
	    {
		   return "\^{"+ match.substr(1, match.length) + "}";
	    }	
	    var rez = new Array();
	    var start = 0;
	    var end = 0;
	    var buffer = "";
	    var stanjeZagrada = 0;
	    ind = ind + 1;
	    if(str[ind] == "(")
	    {
		   
		   start = ind;
		   stanjeZagrada = stanjeZagrada + 1;
		   while(stanjeZagrada > 0 & ind<str.length)
		   {
			  buffer = buffer + str[ind];
			  ind = ind + 1;
			  if(str[ind] == ")")
			  {
				 stanjeZagrada = stanjeZagrada - 1;
				 if (stanjeZagrada == 0)
				 {
					buffer = buffer + str[ind];	   
				 }
			  }
			  if(str[ind] == "(")
			  {
				 stanjeZagrada = stanjeZagrada + 1;
			  }					     
		   }
		   end = ind;
		   		 
				 
		   if (buffer[buffer.length-1]==")")
		   {
			  buffer = buffer.substr(1,buffer.length-2);
		   }
		   else
		   {
			  buffer = buffer.substr(1,buffer.length-1);
		   }				 
		   preBuffera = str.substring(0,start);
		   posleBuffera = str.substring(end+1,str.length);
		   rezStr = preBuffera + "{" + buffer + "}" + posleBuffera;
		   rez[0]=rezStr;
		   rez[1]=1;
		   return rez; 
	    }
	    if(str[ind] != "(" & str[ind] != "{" & ind < str.length)
	    {
		   var regStepen = /\^[0-9a-zA-Z]+/gi;
		   if(regStepen.test(str))
		   {
		   
			  rezStr=str.replace(regStepen, promeniStepen);
			  rez[0]=rezStr;
			  rez[1]=1;
			  return rez;
		   }
		   else
		   {
			  rez[0]=str;
			  rez[1]=0;
			  return rez;    
		   }
	    }
	    rez[0]=str;
	    rez[1]=0;
	    return rez;
     }
     
     
     // glavini kod
     var izlaz = "";
     var i = 0;
     var promenio = true;
     while(promenio)
     {
	    promenio = false;
	    izlaz = izlaz + "<br><br>";
	    for (i=0; i<or.length; i++)
	    {	 
		   if (or[i] == "/")
		   {
			  rez = menjajRazlomak(or, i);
			  or = rez[0];
			  izlaz = izlaz + or + "<br>";
			  if (rez[1] == '1')
			  {
				 promenio = true;
			  }
		   }
		   if (or[i] == "\^")
		   {
			  rez = menjajStepen(or, i);	
			  or = rez[0];
			  izlaz = izlaz + or + "<br>";
			  if (rez[1] == '1')
			  {
				 promenio = true;
			  }
		   }
	    }
     }
     or=or.replace(/}\/{/gi, '}{');
     return or;
}