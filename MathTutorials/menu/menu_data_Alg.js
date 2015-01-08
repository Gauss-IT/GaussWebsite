
_menuCloseDelay=500           // The time delay for menus to remain visible on mouse out
_menuOpenDelay=150            // The time delay before menus open on mouse over
_subOffsetTop=10              // Sub menu top offset
_subOffsetLeft=-10            // Sub menu left offset



with(HorzMenu=new mm_style()){
onbgcolor="#CC9933";
oncolor="#000000";
offbgcolor="#FFFFCC";
offcolor="#000000";
bordercolor="#663300";
borderstyle="solid";
borderwidth=1;
separatorcolor="#663300";
separatorsize="1";
offborder="1px solid #aaaaaa";
onborder="1px solid #0000CC";
padding=3;
fontsize="75%";
fontstyle="normal";
fontfamily="Verdana, Tahoma, Arial";
pagecolor="#000000";
pagebgcolor="#CC9933";
headercolor="#000000";
headerbgcolor="#ffffff";
subimage="../../menu/arrow_horiz_out.gif";
onsubimage="../../menu/arrow_horiz_in.gif";
subimagepadding="2";
//overfilter="Fade(duration=0.2);Alpha(opacity=90);Shadow(color='#777777', Direction=135, Strength=5)";
overfilter="Fade(duration=0.2);Alpha(opacity=90)";
outfilter="randomdissolve(duration=0.3)";
}

VertMenu=new copyOf(HorzMenu);
VertMenu.subimage="../../menu/arrow_vert_out.gif";
VertMenu.onsubimage="../../menu/arrow_vert_in.gif";


with(milonic=new menuname("Preliminaries")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/Alg/Preliminaries.aspx;status=Preliminaries");
aI("text=Integer Exponents;url=/Classes/Alg/IntegerExponents.aspx;status=Integer Exponents - edit");
aI("text=Rational Exponents;url=/Classes/Alg/RationalExponents.aspx;status=Rational Exponents");
aI("text=Real Exponents;url=/Classes/Alg/RealExponents.aspx;status=Real Exponents");
aI("text=Radicals;url=/Classes/Alg/Radicals.aspx;status=Radicals");
aI("text=Polynomials;url=/Classes/Alg/Polynomials.aspx;status=Polynomials");
aI("text=Factoring Polynomials;url=/Classes/Alg/Factoring.aspx;status=Factoring Polynomials");
aI("text=Rational Expressions;url=/Classes/Alg/RationalExpressions.aspx;status=Rational Expressions");
aI("text=Complex Numbers;url=/Classes/Alg/ComplexNumbers.aspx;status=Complex Numbers");}

with(milonic=new menuname("SolvingEquationsandInequalities")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/Alg/Solving.aspx;status=Solving Equations and Inequalities");
aI("text=Solutions and Solution Sets;url=/Classes/Alg/SolutionSets.aspx;status=Solutions and Solution Sets");
aI("text=Linear Equations;url=/Classes/Alg/SolveLinearEqns.aspx;status=Linear Equations");
aI("text=Applications of Linear Equations;url=/Classes/Alg/LinearApps.aspx;status=Applications of Linear Equations");
aI("text=Equations With More Than One Varaible;url=/Classes/Alg/SolveMultiVariable.aspx;status=Equations With More Than One Varaible");
aI("text=Quadratic Equations - Part I;url=/Classes/Alg/SolveQuadraticEqnsI.aspx;status=Quadratic Equations - Part I");
aI("text=Quadratic Equations - Part II;url=/Classes/Alg/SolveQuadraticEqnsII.aspx;status=Quadratic Equations - Part II");
aI("text=Quadratic Equations : A Summary;url=/Classes/Alg/SolveQuadraticEqnSummary.aspx;status=Quadratic Equations : A Summary");
aI("text=Applications of Quadratic Equations;url=/Classes/Alg/QuadraticApps.aspx;status=Applications of Quadratic Equations");
aI("text=Equations Reducible to Quadratic in Form;url=/Classes/Alg/ReducibleToQuadratic.aspx;status=Equations Reducible to Quadratic in Form");
aI("text=Equations with Radicals;url=/Classes/Alg/SolveRadicalEqns.aspx;status=Equations with Radicals");
aI("text=Linear Inequalities;url=/Classes/Alg/SolveLinearInequalities.aspx;status=Linear Inequalities");
aI("text=Polynomial Inequalities;url=/Classes/Alg/SolvePolyInequalities.aspx;status=Polynomial Inequalities");
aI("text=Rational Inequalities;url=/Classes/Alg/SolveRationalInequalities.aspx;status=Rational Inequalities");
aI("text=Absolute Value Equations;url=/Classes/Alg/SolveAbsValueEqns.aspx;status=Absolute Value Equations");
aI("text=Absolute Value Inequalities;url=/Classes/Alg/SolveAbsValueIneq.aspx;status=Absolute Value Inequalities");}

with(milonic=new menuname("GraphingandFunctions")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/Alg/Graphing_Functions.aspx;status=Graphing and Functions");
aI("text=Graphing;url=/Classes/Alg/Graphing.aspx;status=Graphing");
aI("text=Lines;url=/Classes/Alg/Lines.aspx;status=Lines");
aI("text=Circles;url=/Classes/Alg/Circles.aspx;status=Circles");
aI("text=The Definition of a Function;url=/Classes/Alg/FunctionDefn.aspx;status=The Definition of a Function");
aI("text=Graphing Functions;url=/Classes/Alg/GraphFunctions.aspx;status=Graphing Functions");
aI("text=Combining Functions;url=/Classes/Alg/CombineFunctions.aspx;status=Combining Functions");
aI("text=Inverse Functions;url=/Classes/Alg/InverseFunctions.aspx;status=Inverse Functions");}

with(milonic=new menuname("CommonGraphs")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/Alg/CommonGraphs.aspx;status=Common Graphs");
aI("text=Lines, Circles and Piecewise Functions;url=/Classes/Alg/Lines_Circles_PWF.aspx;status=Lines, Circles and Piecewise Functions");
aI("text=Parabolas;url=/Classes/Alg/Parabolas.aspx;status=Parabolas");
aI("text=Ellipses;url=/Classes/Alg/Ellipses.aspx;status=Ellipses");
aI("text=Hyperbolas;url=/Classes/Alg/Hyperbolas.aspx;status=Hyperbolas");
aI("text=Miscellaneous Functions;url=/Classes/Alg/MiscFunctions.aspx;status=Miscellaneous Functions");
aI("text=Transformations;url=/Classes/Alg/Transformations.aspx;status=Transformations");
aI("text=Symmetry;url=/Classes/Alg/Symmetry.aspx;status=Symmetry");
aI("text=Rational Functions;url=/Classes/Alg/GraphRationalFcns.aspx;status=Rational Functions");}

with(milonic=new menuname("PolynomialFunctions")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/Alg/PolynomialFunctions.aspx;status=Polynomial Functions");
aI("text=Dividing Polynomials;url=/Classes/Alg/DividingPolynomials.aspx;status=Dividing Polynomials");
aI("text=Zeroes/Roots of Polynomials;url=/Classes/Alg/ZeroesOfPolynomials.aspx;status=Zeroes/Roots of Polynomials");
aI("text=Graphing Polynomials;url=/Classes/Alg/GraphingPolynomials.aspx;status=Graphing Polynomials");
aI("text=Finding Zeroes of Polynomials;url=/Classes/Alg/FindingZeroesOfPolynomials.aspx;status=Finding Zeroes of Polynomials");
aI("text=Partial Fractions;url=/Classes/Alg/PartialFractions.aspx;status=Partial Fractions");}

with(milonic=new menuname("ExponentialandLogarithmFunctions")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/Alg/ExpAndLog.aspx;status=Exponential and Logarithm Functions");
aI("text= Exponential Functions;url=/Classes/Alg/ExpFunctions.aspx;status= Exponential Functions");
aI("text= Logarithm Functions;url=/Classes/Alg/LogFunctions.aspx;status= Logarithm Functions");
aI("text= Solving Exponential Equations;url=/Classes/Alg/SolveExpEqns.aspx;status= Solving Exponential Equations");
aI("text= Solving Logarithm Equations;url=/Classes/Alg/SolveLogEqns.aspx;status= Solving Logarithm Equations");
aI("text= Applications;url=/Classes/Alg/ExpLogApplications.aspx;status= Applications");}

with(milonic=new menuname("SystemsofEquations")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/Alg/Systems.aspx;status=Systems of Equations");
aI("text=Linear Systems with Two Variables;url=/Classes/Alg/SystemsTwoVrble.aspx;status=Linear Systems with Two Variables");
aI("text=Linear Systems with Three Variables;url=/Classes/Alg/SystemsThreeVrble.aspx;status=Linear Systems with Three Variables");
aI("text=Augmented Matricies;url=/Classes/Alg/AugmentedMatrix.aspx;status=Augmented Matrices");
aI("text=More on the Augmented Matrix;url=/Classes/Alg/AugmentedMatrixII.aspx;status=More on the Augmented Matrix");
aI("text=Nonlinear Systems;url=/Classes/Alg/NonlinearSystems.aspx;status=Nonlinear Systems");}


drawMenus();
