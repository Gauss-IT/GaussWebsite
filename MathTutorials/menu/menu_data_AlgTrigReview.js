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

with(milonic=new menuname("Algebra")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Extras/AlgebraTrigReview/AlgebraIntro.aspx;status=Algebra");
aI("text=Exponents ;url=/Extras/AlgebraTrigReview/Exponents.aspx;status=Exponents ");
aI("text=Absolute Value;url=/Extras/AlgebraTrigReview/AbsoluteValue.aspx;status=Absolute Value");
aI("text=Radicals;url=/Extras/AlgebraTrigReview/Radicals.aspx;status=Radicals");
aI("text=Rationalizing ;url=/Extras/AlgebraTrigReview/Rationalizing.aspx;status=Rationalizing ");
aI("text=Functions ;url=/Extras/AlgebraTrigReview/Functions.aspx;status=Functions ");
aI("text=Multiplying Polynomials;url=/Extras/AlgebraTrigReview/MultPoly.aspx;status=Multiplying Polynomials");
aI("text=Factoring;url=/Extras/AlgebraTrigReview/Factoring.aspx;status=Factoring");
aI("text=Simplifying Rational Expressions;url=/Extras/AlgebraTrigReview/SimpRatExp.aspx;status=Simplifying Rational Expressions");
aI("text=Graphing and Common Graphs;url=/Extras/AlgebraTrigReview/Graphing.aspx;status=Graphing and Common Graphs");
aI("text=Solving Equations, Part I;url=/Extras/AlgebraTrigReview/SolveEqnPtI.aspx;status=Solving Equations, Part I");
aI("text=Solving Equations, Part II;url=/Extras/AlgebraTrigReview/SolveEqnPtII.aspx;status=Solving Equations, Part II");
aI("text=Solving Systems of Equations;url=/Extras/AlgebraTrigReview/SolveSystems.aspx;status=Solving Systems of Equations");
aI("text=Solving Inequalities;url=/Extras/AlgebraTrigReview/SolveIneq.aspx;status=Solving Inequalities");
aI("text=Absolute Value Equations and Inequalities;url=/Extras/AlgebraTrigReview/SolveAbsValue.aspx;status=Absolute Value Equations and Inequalities");}

with(milonic=new menuname("Trigonometry")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Extras/AlgebraTrigReview/TrigIntro.aspx;status=Trigonometry");
aI("text=Trig Function Evaluation;url=/Extras/AlgebraTrigReview/TrigFunctions.aspx;status=Trig Function Evaluation");
aI("text=Graphs of Trig Functions;url=/Extras/AlgebraTrigReview/TrigGraphs.aspx;status=Graphs of Trig Functions");
aI("text=Trig Formulas;url=/Extras/AlgebraTrigReview/TrigFormulas.aspx;status=Trig Formulas");
aI("text=Solving Trig Equations;url=/Extras/AlgebraTrigReview/SolveTrigEqn.aspx;status=Solving Trig Equations");
aI("text=Inverse Trig Functions;url=/Extras/AlgebraTrigReview/InverseTrig.aspx;status=Inverse Trig Functions");}

with(milonic=new menuname("ExponentialsLogarithms")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Extras/AlgebraTrigReview/ExpLogIntro.aspx;status=Exponentials & Logarithms");
aI("text=Basic Exponential Functions;url=/Extras/AlgebraTrigReview/ExponentialFcns.aspx;status=Basic Exponential Functions");
aI("text=Basic Logarithm Functions;url=/Extras/AlgebraTrigReview/LogarithmFcns.aspx;status=Basic Logarithm Functions");
aI("text=Logarithm Properties;url=/Extras/AlgebraTrigReview/LogProperties.aspx;status=Logarithm Properties");
aI("text=Simplifying Logarithms;url=/Extras/AlgebraTrigReview/SimpLogs.aspx;status=Simplifying Logarithms");
aI("text=Solving Exponential Equations;url=/Extras/AlgebraTrigReview/SolveExpEqn.aspx;status=Solving Exponential Equations");
aI("text=Solving Logarithm Equations;url=/Extras/AlgebraTrigReview/SolveLogEqn.aspx;status=Solving Logarithm Equations");}

drawMenus();