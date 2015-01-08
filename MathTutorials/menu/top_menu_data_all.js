
with (milonic = new menuname("Classes")) {
	style = VertMenu;
	top = "offset=10";
	orientation = "vertical";
	aI("showmenu=Alg;status=Algebra;text=Algebra;");
	aI("text=Calculus I;showmenu=CalcI;status=Calculus I;");
	aI("text=Calculus II;showmenu=CalcII;status=Calculus II");
	aI("text=Calculus III;showmenu=CalcIII;status=Calculus III");
	//aI("text=Linear Algebra;url=/Classes/LinAlg/LinAlg.aspx;status=Linear Algebra");
	aI("text=Differential Equations;url=/Classes/DE/DE.aspx;status=Differential Equations;");
}

with (milonic = new menuname("Alg")) {
    style = VertMenu;
    left = "offset=12"
    top = "offset=-11"
    subimage = "menu/arrow_horiz_out.gif";
    onsubimage = "menu/arrow_horiz_in.gif";
    aI("text=Algebra Notes;url=/Classes/Alg/Alg.aspx;status=Algebra Notes");
    aI("text=Algebra Practice Problems;url=/Problems/Alg/Alg.aspx;status=Algebra Practice Problems");
    aI("text=Algebra Assignment Problems;url=/ProblemsNS/Alg/Alg.aspx;status=Algebra Assignment Problems");
}

with (milonic = new menuname("CalcI")) {
	style = VertMenu;
	left = "offset=12"
	top = "offset=-11"
	subimage = "menu/arrow_horiz_out.gif";
	onsubimage = "menu/arrow_horiz_in.gif";
	aI("text=Calculus I Notes;url=/Classes/CalcI/CalcI.aspx;status=Calculus I Notes");
	aI("text=Calculus I Practice Problems;url=/Problems/CalcI/CalcI.aspx;status=Calculus I Practice Problems");
	aI("text=Calculus I Assignment Problems;url=/ProblemsNS/CalcI/CalcI.aspx;status=Calculus I Assignment Problems");
}

with (milonic = new menuname("CalcII")) {
	style = VertMenu;
	left = "offset=12"
	top = "offset=-11"
	subimage = "menu/arrow_horiz_out.gif";
	onsubimage = "menu/arrow_horiz_in.gif";
	aI("text=Calculus II Notes;url=/Classes/CalcII/CalcII.aspx;status=Calculus II Notes");
	aI("text=Calculus II Practice Problems;url=/Problems/CalcII/CalcII.aspx;status=Calculus II Practice Problems");
	aI("text=Calculus II Assignment Problems;url=/ProblemsNS/CalcII/CalcII.aspx;status=Calculus II Assignment Problems");
}

with (milonic = new menuname("CalcIII")) {
	style = VertMenu;
	left = "offset=12"
	top = "offset=-11"
	subimage = "menu/arrow_horiz_out.gif";
	onsubimage = "menu/arrow_horiz_in.gif";
	aI("text=Calculus III Notes;url=/Classes/CalcIII/CalcIII.aspx;status=Calculus III Notes");
	aI("text=Calculus III Practice Problems;url=/Problems/CalcIII/CalcIII.aspx;status=Calculus III Practice Problems");
	aI("text=Calculus III Assignment Problems;url=/ProblemsNS/CalcIII/CalcIII.aspx;status=Calculus III Assignment Problems");
}

with (milonic = new menuname("DE")) {
	style = VertMenu;
	left = "offset=12"
	top = "offset=-11"
	subimage = "menu/arrow_horiz_out.gif";
	onsubimage = "menu/arrow_horiz_in.gif";
	aI("text=Differential Equations Notes;url=/Classes/DE/DE.aspx;status=Differential Equations Notes");
	aI("text=Differential Equations Practice Problems;url=/Problems/DE/DE.aspx;status=Differential Equations Practice Problems");
	aI("text=Differential Equations Assignment Problems;url=/ProblemsNS/DE/DE.aspx;status=Differential Equations Assignment Problems");
}

with (milonic = new menuname("LinAlg")) {
	style = VertMenu;
	left = "offset=12"
	top = "offset=-11"
	subimage = "menu/arrow_horiz_out.gif";
	onsubimage = "menu/arrow_horiz_in.gif";
	aI("text=Linear Algebra Notes;url=/Classes/LinAlg/LinAlg.aspx;status=Linear Algebra Notes");
	aI("text=Linear Algebra Practice Problems;url=/Problems/LinAlg/LinAlg.aspx;status=Linear Algebra Practice Problems");
	aI("text=Linear Algebra Assignment Problems;url=/ProblemsNS/LinAlg/LinAlg.aspx;status=Linear Algebra Assignment Problems");
}

with (milonic = new menuname("Extras")) {
	style = HorzMenu;
	top = "offset=10";
	orientation = "vertical";
	aI("text=Algebra/Trig Review;url=/Extras/AlgebraTrigReview/AlgebraTrigIntro.aspx;status=Algebra/Trig Review;");
	aI("text=Complex Numbers Primer;url=/Extras/ComplexPrimer/ComplexNumbers.aspx;status=Complex Numbers Primer;");
	aI("text=Common Math Errors;url=/Extras/CommonErrors/CommonMathErrors.aspx;status=Common Math Errors;");
	aI("text=How To Study Math;url=/Extras/StudyMath/HowToStudyMath.aspx;status=How To Study Math;");
}

with(milonic=new menuname("Main Menu")){
style=HorzMenu;
position="relative";
alwaysvisible=1;
orientation="horizontal";
aI("text=Home;url=http://tutorial.math.lamar.edu/;status=Back To Home Page;");
aI("text=Class Notes;showmenu=Classes;status=Class Notes;");
aI("text=Extras/Reviews;showmenu=Extras;status=Extras/Review");
aI("text=Cheat Sheets & Tables;url=/cheat_table.aspx;status=Cheat Sheets & Tables;");
aI("text=Downloads;url=/download.aspx;status=Downloads;");
}

drawMenus();
