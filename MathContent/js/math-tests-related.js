	    function checkRadio(pitanje,opcija)
	    {
		   var kliknuto = document.getElementById(pitanje+'Radio'+opcija);
		   kliknuto.checked = true;
	    }
	    // opcija je 0-1 (kliknuo na false ili na true) 
	    function changeTrueFalseStance(pitanje,opcija)
	    {
		   var kliknuto = document.getElementById(pitanje+'TrueFalseOpt'+opcija);
		   drugoDugmeOpcija = 0;
		   if (opcija == 0)
		   {
			  drugoDugmeOpcija = 1;
		   }
		   var nijeKliknuto = document.getElementById(pitanje+'TrueFalseOpt'+drugoDugmeOpcija);
		   var questionStance = document.getElementById(pitanje+'Odgovor');
		  
		   // kliknuti je na false
		   if (opcija == 0 && questionStance.value == "")
		   {
			  kliknuto.style.backgroundPosition = "bottom";
			  questionStance.value = "0";
			  return;
		   }
		   if (opcija == 0 && questionStance.value == "0")
		   {
			  kliknuto.style.backgroundPosition = "top";
			  questionStance.value = "";
			  return;
		   }
		   if (opcija == 0 && questionStance.value == "1")
		   {
			  kliknuto.style.backgroundPosition = "bottom";
			  nijeKliknuto.style.backgroundPosition = "top";
			  questionStance.value = "0";
			  return;
		   }
		   // kliknuto je na true
		   if (opcija == 1 && questionStance.value == "")
		   {
			  kliknuto.style.backgroundPosition = "bottom";
			  questionStance.value = "1";
			  return;
		   }
		   if (opcija == 1 && questionStance.value == "0")
		   {
			  kliknuto.style.backgroundPosition = "bottom";
			  nijeKliknuto.style.backgroundPosition = "top";
			  questionStance.value = "1";
			  return;
		   }
		   if (opcija == 1 && questionStance.value == "1")
		   {
			  kliknuto.style.backgroundPosition = "top";
			  questionStance.value = "";
			  return;
		   }		   
	    }
	    function changeType1of4stance(pitanje,opcija)
	    {
		   var kliknuto = document.getElementById('type1of4-'+pitanje+'-op'+opcija);
		   var questionStance = document.getElementById(pitanje+'Odgovor');
		   if (opcija == questionStance.value)
		   {
			  kliknuto.style.backgroundImage = "url(../_quzzesRes/answer-button.gif)";
			  questionStance.value = "";
		   }
		   else
		   {
			  if (questionStance.value != "")
			  {
				 var biloJeKliknuto = document.getElementById('type1of4-'+pitanje+'-op'+questionStance.value);
				 biloJeKliknuto.style.backgroundImage = "url(../_quzzesRes/answer-button.gif)";
			  }
			  kliknuto.style.backgroundImage = "url(../_quzzesRes/answer-button-kliknut.gif)";
			  questionStance.value = opcija;
		   }
	    }
	    // x i y koordinate mesta gde je element spusten
	    // elementNo - prvi odozgo je 1, drugi je 2, ...
	    // broj pitanja u kome se nalaze elementi
	    // rezultat spustanja elementa se pise u hiden promenljivama: 
	    //   'pitanje'DropDownOpt1,'pitanje'DropDownOpt2,...
	    function snapElement(x, y, element, elementNo,pitanje)
	    {
		   snapX = 50;
		   snapY = 20;						    
		   locX = 189;
		   locY1 = 58*(1-elementNo);
		   locY2 = 58*(2-elementNo);
		   locY3 = 58*(3-elementNo);
		   locY4 = 58*(4-elementNo);
		   snapovan = false;				    
		   if (y>locY1-snapY && y<locY1+snapY && x>locX-snapX && x<locX+snapX)
		   {
			  element.style.top = locY1+'px';
			  element.style.left = locX+'px';
			  var answerSave = document.getElementById(pitanje+'DropDownOpt1');
			  answerSave.value = elementNo;
			  snapovan = true;
		   }
		   if (y>locY2-snapY && y<locY2+snapY && x>locX-snapX && x<locX+snapX)
		   {
			  element.style.top = locY2+'px';
			  element.style.left = locX+'px';
			  var answerSave = document.getElementById(pitanje+'DropDownOpt2');
			  answerSave.value = elementNo;
			  snapovan = true;
		   }
		   if (y>locY3-snapY && y<locY3+snapY && x>locX-snapX && x<locX+snapX)
		   {
			  element.style.top = locY3+'px';
			  element.style.left = locX+'px';
			  var answerSave = document.getElementById(pitanje+'DropDownOpt3');
			  answerSave.value = elementNo;
			  snapovan = true;
		   }
		   if (y>locY4-snapY && y<locY4+snapY && x>locX-snapX && x<locX+snapX)
		   {
			  element.style.top = locY4+'px';
			  element.style.left = locX+'px';
			  var answerSave = document.getElementById(pitanje+'DropDownOpt4');
			  answerSave.value = elementNo;
			  snapovan = true;
		   } 
		   if ( snapovan == false)
		   {
			  // izbrisi ga iz snimljenih podataka
			  for (var i=1; i<5; i++)
			  {
				 answerSave = document.getElementById(pitanje+'DropDownOpt'+i);
				 if (answerSave.value == elementNo)
				 {
					answerSave.value = "";
				 }					
			  }
		   }
	    }