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

with(milonic=new menuname("Review")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcI/ReviewIntro.aspx;status=Review");
aI("text=Review : Functions;url=/Classes/CalcI/Functions.aspx;status=Review : Functions");
aI("text=Review : Inverse Functions;url=/Classes/CalcI/InverseFunctions.aspx;status=Review : Inverse Functions");
aI("text=Review : Trig Functions;url=/Classes/CalcI/TrigFcns.aspx;status=Review : Trig Functions");
aI("text=Review : Solving Trig Equations;url=/Classes/CalcI/TrigEquations.aspx;status=Review : Solving Trig Equations");
aI("text=Review : Solving with Calculators, Part I;url=/Classes/CalcI/TrigEquations_CalcI.aspx;status=Review : Solving with Calculators, Part I");
aI("text=Review : Solving with Calculators, Part II;url=/Classes/CalcI/TrigEquations_CalcII.aspx;status=Review : Solving with Calculators, Part II");
aI("text=Review : Exponential Functions;url=/Classes/CalcI/ExpFunctions.aspx;status=Review : Exponential Functions");
aI("text=Review : Logarithm Functions;url=/Classes/CalcI/LogFcns.aspx;status=Review : Logarithm Functions");
aI("text=Review : Exponential and Logarithm Equations;url=/Classes/CalcI/ExpLogEqns.aspx;status=Review : Exponential and Logarithm Equations");
aI("text=Review : Common Graphs;url=/Classes/CalcI/CommonGraphs.aspx;status=Review : Common Graphs");
}

with(milonic=new menuname("Limits")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcI/LimitsIntro.aspx;status=Limits");
aI("text=Tangent Lines and Rates of Change;url=/Classes/CalcI/Tangents_Rates.aspx;status=Tangent Lines and Rates of Change");
aI("text=The Limit;url=/Classes/CalcI/TheLimit.aspx;status=The Limit");
aI("text=One-Sided Limits;url=/Classes/CalcI/OneSidedLimits.aspx;status=One-Sided Limits");
aI("text=Limit Properties;url=/Classes/CalcI/LimitsProperties.aspx;status=Limit Properties");
aI("text=Computing Limits;url=/Classes/CalcI/ComputingLimits.aspx;status=Computing Limits");
aI("text= Infinite Limits;url=/Classes/CalcI/InfiniteLimits.aspx;status= Infinite Limits");
aI("text= Limits At Infinity, Part I;url=/Classes/CalcI/LimitsAtInfinityI.aspx;status= Limits At Infinity, Part I");
aI("text= Limits At Infinity, Part II;url=/Classes/CalcI/LimitsAtInfinityII.aspx;status= Limits At Infinity, Part II");
aI("text=Continuity;url=/Classes/CalcI/Continuity.aspx;status=Continuity");
aI("text=The Definition of the Limit;url=/Classes/CalcI/DefnOfLimit.aspx;status=The Definition of the Limit");}

with(milonic=new menuname("Derivatives")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcI/DerivativeIntro.aspx;status=Derivatives");
aI("text=The Definition of the Derivative;url=/Classes/CalcI/DefnOfDerivative.aspx;status=The Definition of the Derivative");
aI("text=Interpretation of the Derivative;url=/Classes/CalcI/DerivativeInterp.aspx;status=Interpretation of the Derivative");
aI("text=Differentiation Formulas;url=/Classes/CalcI/DiffFormulas.aspx;status=Differentiation Formulas");
aI("text=Product and Quotient Rule;url=/Classes/CalcI/ProductQuotientRule.aspx;status=Product and Quotient Rule");
aI("text=Derivatives of Trig Functions;url=/Classes/CalcI/DiffTrigFcns.aspx;status=Derivatives of Trig Functions");
aI("text=Derivatives of Exponential and Logarithm Functions;url=/Classes/CalcI/DiffExpLogFcns.aspx;status=Derivatives of Exponential and Logarithm Functions");
aI("text=Derivatives of Inverse Trig Functions;url=/Classes/CalcI/DiffInvTrigFcns.aspx;status=Derivatives of Inverse Trig Functions");
aI("text=Derivatives of Hyperbolic Trig Functions;url=/Classes/CalcI/DiffHyperTrigFcns.aspx;status=Derivatives of Hyperbolic Trig Functions");
aI("text=Chain Rule;url=/Classes/CalcI/ChainRule.aspx;status=Chain Rule");
aI("text=Implicit Differentiation;url=/Classes/CalcI/ImplicitDIff.aspx;status=Implicit Differentiation");
aI("text=Related Rates;url=/Classes/CalcI/RelatedRates.aspx;status=Related Rates");
aI("text=Higher Order Derivatives;url=/Classes/CalcI/HigherOrderDerivatives.aspx;status=Higher Order Derivatives");
aI("text=Logarithmic Differentiation;url=/Classes/CalcI/LogDiff.aspx;status=Logarithmic Differentiation");
}


with(milonic=new menuname("ApplicationsofDerivatives")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcI/DerivAppsIntro.aspx;status=Applications of Derivatives");
aI("text=Rates of Change;url=/Classes/CalcI/RateOfChange.aspx;status=Rates of Change");
aI("text=Critical Points;url=/Classes/CalcI/CriticalPoints.aspx;status=Critical Points");
aI("text=Minimum and Maximum Values;url=/Classes/CalcI/MinMaxValues.aspx;status=Minimum and Maximum Values");
aI("text=Finding Absolute Extrema;url=/Classes/CalcI/AbsExtrema.aspx;status=Finding Absolute Extrema");
aI("text=The Shape of a Graph, Part I;url=/Classes/CalcI/ShapeofGraphPtI.aspx;status=The Shape of a Graph, Part I");
aI("text=The Shape of a Graph, Part II;url=/Classes/CalcI/ShapeofGraphPtII.aspx;status=The Shape of a Graph, Part II");
aI("text=The Mean Value Theorem;url=/Classes/CalcI/MeanValueTheorem.aspx;status=The Mean Value Theorem");
aI("text=Optimization;url=/Classes/CalcI/Optimization.aspx;status=Optimization");
aI("text=More Optimization Problems;url=/Classes/CalcI/MoreOptimization.aspx;status=More Optimization Problems");
aI("text=L'Hospital's Rule and Indeterminate Forms;url=/Classes/CalcI/LHospitalsRule.aspx;status=L'Hospital's Rule and Indeterminate Forms");
aI("text=Linear Approximations;url=/Classes/CalcI/LinearApproximations.aspx;status=Linear Approximations");
aI("text=Differentials;url=/Classes/CalcI/Differentials.aspx;status=Differentials");
aI("text=Newton's Method;url=/Classes/CalcI/NewtonsMethod.aspx;status=Newton's Method");
aI("text=Business Applications;url=/Classes/CalcI/BusinessApps.aspx;status=Business Applications");}

with(milonic=new menuname("Integrals")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcI/IntegralsIntro.aspx;status=Integrals");
aI("text=Indefinite Integrals;url=/Classes/CalcI/IndefiniteIntegrals.aspx;status=Indefinite Integrals");
aI("text=Computing Indefinite Integrals;url=/Classes/CalcI/ComputingIndefiniteIntegrals.aspx;status=Computing Indefinite Integrals");
aI("text=Substitution Rule for Indefinite Integrals;url=/Classes/CalcI/SubstitutionRuleIndefinite.aspx;status=Substitution Rule for Indefinite Integrals");
aI("text=More Substitution Rule;url=/Classes/CalcI/SubstitutionRuleIndefinitePtII.aspx;status=More Substitution Rule");
aI("text=Area Problem;url=/Classes/CalcI/AreaProblem.aspx;status=Area Problem");
aI("text=Definition of the Definite Integral;url=/Classes/CalcI/DefnOfDefiniteIntegral.aspx;status=Definition of the Definite Integral");
aI("text=Computing Definite Integrals;url=/Classes/CalcI/ComputingDefiniteIntegrals.aspx;status=Computing Definite Integrals");
aI("text=Substitution Rule for Definite Integrals;url=/Classes/CalcI/SubstitutionRuleDefinite.aspx;status=Substitution Rule for Definite Integrals");}

with(milonic=new menuname("ApplicationsofIntegrals")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcI/IntAppsIntro.aspx;status=Applications of Integrals");
aI("text=Average Function Value;url=/Classes/CalcI/AvgFcnValue.aspx;status=Average Function Value");
aI("text=Area Between Curves;url=/Classes/CalcI/AreaBetweenCurves.aspx;status=Area Between Curves");
aI("text=Volumes of Solids of Revolution / Method of Rings;url=/Classes/CalcI/VolumeWithRings.aspx;status=Volumes of Solids of Revolution / Method of Rings");
aI("text=Volumes of Solids of Revolution/Method of Cylinder;url=/Classes/CalcI/VolumeWithCylinder.aspx;status=Volumes of Solids of Revolution/Method of Cylinder");
aI("text=More Volume Problems;url=/Classes/CalcI/MoreVolume.aspx;status=More Volume Problems");
aI("text=Work;url=/Classes/CalcI/Work.aspx;status=Work");}

with(milonic=new menuname("CalcIExtras")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcI/ExtrasIntro.aspx;status=Extras");
aI("text= Proof of Various Limit Properties;url=/Classes/CalcI/LimitProofs.aspx;status= Proof of Various Limit Properties");
aI("text=Proof of Various Derivative Facts;url=/Classes/CalcI/DerivativeProofs.aspx;status=Proof of Various Derivative Facts");
aI("text= Proof of Trig Limits;url=/Classes/CalcI/ProofTrigDeriv.aspx;status= Proof of Trig Limits");
aI("text=Proofs of Derivative Applications Facts;url=/Classes/CalcI/DerivativeAppsProofs.aspx;status=Proofs of Derivative Applications Facts");
aI("text=Proof of Various Integral Facts;url=/Classes/CalcI/ProofIntProp.aspx;status=Proof of Various Integral Facts");
aI("text=Area and Volume Formulas;url=/Classes/CalcI/Area_Volume_Formulas.aspx;status=Area and Volume Formulas");
aI("text=Types of Infinity;url=/Classes/CalcI/TypesOfInfinity.aspx;status=Types of Infinity");
aI("text=Summation Notation;url=/Classes/CalcI/SummationNotation.aspx;status=Summation Notation");
aI("text=Constant of Integration;url=/Classes/CalcI/ConstantofIntegration.aspx;status=Constant of Integration");}

drawMenus();