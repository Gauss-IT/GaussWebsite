
	window.onload = function() 
	{
		var pathArray = document.URL.split('/');
		var pageRoot = pathArray[pathArray.length - 2];
		var openDiv = "roots";
		if (pageRoot.localeCompare("complex-numbers") === 0)
		{
			openDiv = "complex";
		}
		if (pageRoot.localeCompare("complex-numbers") === 0)
		{
			openDiv = "complex";
		}
		if (pageRoot.localeCompare("polynomials") === 0)
		{
			openDiv = "poly";
		}
		if (pageRoot.localeCompare("rational-expressions") === 0)
		{
			openDiv = "ratio";
		}
		if (pageRoot.localeCompare("solving-equations") === 0)
		{
			openDiv = "solving";
		}
		if (pageRoot.localeCompare("solving-system-of-linear-equations") === 0)
		{
			openDiv = "system";
		}
		if (pageRoot.localeCompare("exponential-functions") === 0)
		{
			openDiv = "exponen";
		}
		if (pageRoot.localeCompare("trigonometry") === 0)
		{
			openDiv = "trig";
		}
		if (pageRoot.localeCompare("progressions") === 0)
		{
			openDiv = "prog";
		}
		if (pageRoot.localeCompare("differentiation") === 0)
		{
			openDiv = "diff";
		}
		if (pageRoot.localeCompare("limits") === 0)
		{
			openDiv = "lim";
		}
		if (pageRoot.localeCompare("integrals") === 0)
		{
			openDiv = "int";
		}
		if (pageRoot.localeCompare("integration-techniques") === 0)
		{
			openDiv = "inttec";
		}
		if (pageRoot.localeCompare("integral-applications") === 0)
		{
			openDiv = "intapp";
		}
		if (pageRoot.localeCompare("analytic-geometry-2d") === 0)
		{
			openDiv = "ag2d";
		}
		if (pageRoot.localeCompare("conic-sections") === 0)
		{
			openDiv = "conic";
		}
		if (pageRoot.localeCompare("analytic-geometry-3d") === 0)
		{
			openDiv = "ag3d";
		}
		if (pageRoot.localeCompare("matrices") === 0)
		{
			openDiv = "matr";
		}
		if (pageRoot.localeCompare("determinants") === 0)
		{
			openDiv = "det";
		}
		if (pageRoot.localeCompare("vectors") === 0)
		{
			openDiv = "vec";
		}
		document.getElementById(openDiv).style.display = "block";
		document.getElementById(openDiv + 'Strelica').className = "";
		document.getElementById(openDiv + 'Strelica').className = "strelicaDole";
	};
	function toggle_visibility(id)
	{
		var e = document.getElementById(id);

		if (e.style.display.localeCompare('none') === 0 || e.style.display.localeCompare('') === 0)
		{
			e.style.display = 'block';
			document.getElementById(id + 'Strelica').className = "";
			document.getElementById(id + 'Strelica').className = "strelicaDole";
		}
		else
		{
			e.style.display = 'none';
			document.getElementById(id + 'Strelica').className = "";
			document.getElementById(id + 'Strelica').className = "strelicaDesno";
		}
	}
	
	// ovo je za forme u okviru lekcije
	function kliknuo(tacno,levo,questionName)
	{
		if(tacno==1 && levo==1)
		{
			newImage = "url(../../fix/slike/correct.gif)";
			document.getElementById('leftQuestion'+questionName).style.background = newImage;
			document.getElementById('leftQuestion'+questionName).style.backgroundRepeat = 'no-repeat';
			document.getElementById('levelLeft'+questionName).style.background = '#10bb10';
		}
		if(tacno==1 && levo==0)
		{
			newImage = "url(../../fix/slike/correct.gif)";
			document.getElementById('rightQuestion'+questionName).style.background = newImage;
			document.getElementById('rightQuestion'+questionName).style.backgroundRepeat = 'no-repeat';
			document.getElementById('levelRight'+questionName).style.background = '#10bb10';
		}
		if(tacno==0 && levo==1)
		{
			newImage = "url(../../fix/slike/wrong.gif)";
			document.getElementById('leftQuestion'+questionName).style.background = newImage;
			document.getElementById('leftQuestion'+questionName).style.backgroundRepeat = 'no-repeat';
			document.getElementById('levelLeft'+questionName).style.background = '#FF7878';
		}
		if(tacno==0 && levo==0)
		{
			newImage = "url(../../fix/slike/wrong.gif)";
			document.getElementById('rightQuestion'+questionName).style.background = newImage;
			document.getElementById('rightQuestion'+questionName).style.backgroundRepeat = 'no-repeat';
			document.getElementById('levelRight'+questionName).style.background = '#FF7878';	
		}	
	}
	function kliknuo1(tacno,questionName)
	{
		if(tacno==1)
		{
			newImage = "url(../../fix/slike/correct1.gif)";
			document.getElementById('captionPitanje'+questionName).style.background = '#10bb10';
		}
		if(tacno==0)
		{
			newImage = "url(../../fix/slike/wrong1.gif)";
			document.getElementById('captionPitanje'+questionName).style.background = '#FF7878';
		}
		document.getElementById('question1right'+questionName).style.background = newImage;
		document.getElementById('question1right'+questionName).style.backgroundRepeat = 'no-repeat';
	}
	function kliknuoVod(tacno,questionName)
	{
		if(tacno==1)
		{
			newImage = "url(../../fix/slike/correct1.gif)";
			document.getElementById('captionPitanje'+questionName).style.background = '#10bb10';
		}
		if(tacno==0)
		{
			newImage = "url(../../fix/slike/wrong1.gif)";
			document.getElementById('captionPitanje'+questionName).style.background = '#FF7878';
		}
		document.getElementById('vod1red'+questionName).style.background = newImage;
		document.getElementById('vod1red'+questionName).style.backgroundRepeat = 'no-repeat';
	}
