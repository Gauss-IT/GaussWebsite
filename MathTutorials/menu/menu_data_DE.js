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

with(milonic=new menuname("BasicConcepts")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/DE/IntroBasic.aspx;status=Basic Concepts");
aI("text=Definitions;url=/Classes/DE/Definitions.aspx;status=Definitions");
aI("text=Direction Fields;url=/Classes/DE/DirectionFields.aspx;status=Direction Fields");
aI("text=Final Thoughts;url=/Classes/DE/FinalThoughts.aspx;status=Final Thoughts");}

with(milonic=new menuname("FirstOrderDEs")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/DE/IntroFirstOrder.aspx;status=First Order DE`s");
aI("text=Linear Equations;url=/Classes/DE/Linear.aspx;status=Linear Equations");
aI("text=Separable Equations;url=/Classes/DE/Separable.aspx;status=Separable Equations");
aI("text=Exact Equations;url=/Classes/DE/Exact.aspx;status=Exact Equations");
aI("text=Bernoulli Differential Equations;url=/Classes/DE/Bernoulli.aspx;status=Bernoulli Differential Equations");
aI("text=Substitutions;url=/Classes/DE/Substitutions.aspx;status=Substitutions");
aI("text=Intervals of Validity;url=/Classes/DE/IoV.aspx;status=Intervals of Validity");
aI("text=Modeling with First Order DE's;url=/Classes/DE/Modeling.aspx;status=Modeling with First Order DE's");
aI("text=Equilibrium Solutions;url=/Classes/DE/EquilibriumSolutions.aspx;status=Equilibrium Solutions");
aI("text=Euler's Method;url=/Classes/DE/EulersMethod.aspx;status=Euler's Method");}

with(milonic=new menuname("SecondOrderDEs")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/DE/IntroSecondOrder.aspx;status=Second Order DE`s");
aI("text=Basic Concepts;url=/Classes/DE/SecondOrderConcepts.aspx;status=Basic Concepts");
aI("text=Real & Distinct Roots;url=/Classes/DE/RealRoots.aspx;status=Real & Distinct Roots");
aI("text=Complex Roots;url=/Classes/DE/ComplexRoots.aspx;status=Complex Roots");
aI("text=Repeated Roots;url=/Classes/DE/RepeatedRoots.aspx;status=Repeated Roots");
aI("text=Reduction of Order;url=/Classes/DE/ReductionofOrder.aspx;status=Reduction of Order");
aI("text=Fundamental Sets of Solutions;url=/Classes/DE/FundamentalSetsofSolutions.aspx;status=Fundamental Sets of Solutions");
aI("text=More on the  Wronskian;url=/Classes/DE/Wronskian.aspx;status=More on the  Wronskian");
aI("text=Nonhomgeneous Differential Equations;url=/Classes/DE/NonhomogeneousDE.aspx;status=Nonhomgeneous Differential Equations");
aI("text=Undetermined Coefficients;url=/Classes/DE/UndeterminedCoefficients.aspx;status=Undetermined Coefficients");
aI("text=Variation of Parameters;url=/Classes/DE/VariationofParameters.aspx;status=Variation of Parameters");
aI("text=Mechanical Vibrations;url=/Classes/DE/Vibrations.aspx;status=Mechanical Vibrations");}

with(milonic=new menuname("LaplaceTransforms")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/DE/LaplaceIntro.aspx;status=Laplace Transforms");
aI("text=The Definition;url=/Classes/DE/LaplaceDefinition.aspx;status=The Definition");
aI("text=Laplace Transforms;url=/Classes/DE/LaplaceTransforms.aspx;status=Laplace Transforms");
aI("text=Inverse Laplace Transforms;url=/Classes/DE/InverseTransforms.aspx;status=Inverse Laplace Transforms");
aI("text=Step Functions;url=/Classes/DE/StepFunctions.aspx;status=Step Functions");
aI("text=Solving IVP's with Laplace Tranforms;url=/Classes/DE/IVPWithLaplace.aspx;status=Solving IVP's with Laplace Tranforms");
aI("text=Nonconstant Coefficient IVP's;url=/Classes/DE/IVPWithNonConstantCoefficient.aspx;status=Nonconstant Coefficient IVP's");
aI("text=IVP's With Step Functions;url=/Classes/DE/IVPWithStepFunction.aspx;status=IVP's With Step Functions");
aI("text=Dirac Delta Function;url=/Classes/DE/DiracDeltaFunction.aspx;status=Dirac Delta Function");
aI("text=Convolution Integrals;url=/Classes/DE/ConvolutionIntegrals.aspx;status=Convolution Integrals");
aI("text=Table Of Laplace Transforms;url=/Classes/DE/Laplace_Table.aspx;status=Table Of Laplace Transforms");}

with(milonic=new menuname("SystemsofDEs")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/DE/SystemsIntro.aspx;status=Systems of DE`s");
aI("text=Review : Systems of Equations;url=/Classes/DE/LA_Systems.aspx;status=Review : Systems of Equations");
aI("text=Review : Matrices & Vectors;url=/Classes/DE/LA_Matrix.aspx;status=Review : Matrices & Vectors");
aI("text=Review : Eigenvalues & Eigenvectors;url=/Classes/DE/LA_Eigen.aspx;status=Review : Eigenvalues & Eigenvectors");
aI("text=Systems of Differential Equations;url=/Classes/DE/SystemsDE.aspx;status=Systems of Differential Equations");
aI("text=Solutions to Systems;url=/Classes/DE/SolutionsToSystems.aspx;status=Solutions to Systems");
aI("text=Phase Plane;url=/Classes/DE/PhasePlane.aspx;status=Phase Plane");
aI("text=Real Eigenvalues;url=/Classes/DE/RealEigenvalues.aspx;status=Real Eigenvalues");
aI("text=Complex Eigenvalues;url=/Classes/DE/ComplexEigenvalues.aspx;status=Complex Eigenvalues");
aI("text=Repeated Eigenvalues;url=/Classes/DE/RepeatedEigenvalues.aspx;status=Repeated Eigenvalues");
aI("text=Nonhomogeneous Systems;url=/Classes/DE/NonhomogeneousSystems.aspx;status=Nonhomgeneous Systems");
aI("text=Laplace Transforms;url=/Classes/DE/SystemsLaplace.aspx;status=Laplace Transforms");
aI("text=Modeling;url=/Classes/DE/SystemsModeling.aspx;status=Modeling");}

with(milonic=new menuname("SeriesSolutionstoDEs")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/DE/SeriesIntro.aspx;status=Series Solutions to DE`s");
aI("text=Review : Power Series;url=/Classes/DE/PowerSeries.aspx;status=Review : Power Series");
aI("text=Review : Taylor Series;url=/Classes/DE/TaylorSeries.aspx;status=Review : Taylor Series");
aI("text=Series Solutions;url=/Classes/DE/SeriesSolutions.aspx;status=Series Solutions");
aI("text=Euler Equations;url=/Classes/DE/EulerEquations.aspx;status=Euler Equations");}

with(milonic=new menuname("HigherOrderDifferentialEquations")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/DE/IntroHigherOrder.aspx;status=Higher Order Differential Equations");
aI("text=Basic Concepts;url=/Classes/DE/HOBasicConcepts.aspx;status=Basic Concepts");
aI("text=Homogeneous Differential Equations;url=/Classes/DE/HOHomogeneousDE.aspx;status=Homogeneous Differential Equations");
aI("text=Undetermined Coefficients;url=/Classes/DE/HOUndeterminedCoeff.aspx;status=Undetermined Coefficients");
aI("text=Variation of Parameters;url=/Classes/DE/HOVariationOfParam.aspx;status=Variation of Parameters");
aI("text=Laplace Transforms;url=/Classes/DE/HOLaplaceTransforms.aspx;status=Laplace Transforms");
aI("text=Systems of Differential Equations;url=/Classes/DE/HOSystems.aspx;status=Systems of Differential Equations");
aI("text=Series Solutions;url=/Classes/DE/HOSeries.aspx;status=Series Solutions");}

with(milonic=new menuname("BoundaryValueProblemsamp;FourierSeries")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/DE/IntroBVP.aspx;status=Boundary Value Problems & Fourier Series");
aI("text=Boundary Value Problems;url=/Classes/DE/BoundaryValueProblem.aspx;status=Boundary Value Problems");
aI("text=Eigenvalues and Eigenfunctions;url=/Classes/DE/BVPEvals.aspx;status=Eigenvalues and Eigenfunctions");
aI("text=Periodic Functions & Orthogonal Functions;url=/Classes/DE/PeriodicOrthogonal.aspx;status=Periodic Functions & Orthogonal Functions");
aI("text=Fourier Sine Series;url=/Classes/DE/FourierSineSeries.aspx;status=Fourier Sine Series");
aI("text=Fourier Cosine Series;url=/Classes/DE/FourierCosineSeries.aspx;status=Fourier Cosine Series");
aI("text=Fourier Series;url=/Classes/DE/FourierSeries.aspx;status=Fourier Series");
aI("text=Convergence of Fourier Series;url=/Classes/DE/ConvergenceFourierSeries.aspx;status=Convergence of Fourier Series");}

with(milonic=new menuname("PartialDifferentialEquations")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/DE/IntroPDE.aspx;status=Partial Differential Equations ");
aI("text=The Heat Equation;url=/Classes/DE/TheHeatEquation.aspx;status=The Heat Equation");
aI("text=The Wave Equation;url=/Classes/DE/TheWaveEquation.aspx;status=The Wave Equation");
aI("text=Terminology;url=/Classes/DE/PDETerminology.aspx;status=Terminology");
aI("text=Separation of Variables;url=/Classes/DE/SeparationofVariables.aspx;status=Separation of Variables");
aI("text=Solving the Heat Equation;url=/Classes/DE/SolvingHeatEquation.aspx;status=Solving the Heat Equation");
aI("text=Heat Equation with Non-Zero Temperature Boundaries;url=/Classes/DE/HeatEqnNonZero.aspx;status=Heat Equation with Non-Zero Temperature Boundaries");
aI("text=Laplace's Equation;url=/Classes/DE/LaplacesEqn.aspx;status=Laplace's Equation");
aI("text=Vibrating String;url=/Classes/DE/VibratingString.aspx;status=Vibrating String");
aI("text=Summary of Separation of Variables;url=/Classes/DE/PDESummary.aspx;status=Summary of Separation of Variables");}

drawMenus();