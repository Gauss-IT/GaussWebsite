
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

with(milonic=new menuname("IntegrationTechniques")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcII/IntTechIntro.aspx;status=Integration Techniques");
aI("text=Integration by Parts;url=/Classes/CalcII/IntegrationByParts.aspx;status=Integration by Parts");
aI("text=Integrals Involving Trig Functions;url=/Classes/CalcII/IntegralsWithTrig.aspx;status=Integrals Involving Trig Functions");
aI("text=Trig Substitutions;url=/Classes/CalcII/TrigSubstitutions.aspx;status=Trig Substitutions");
aI("text=Partial Fractions;url=/Classes/CalcII/PartialFractions.aspx;status=Partial Fractions");
aI("text=Integrals Involving Roots;url=/Classes/CalcII/IntegralsWithRoots.aspx;status=Integrals Involving Roots");
aI("text=Integrals Involving Quadratics;url=/Classes/CalcII/IntegralsWithQuadratics.aspx;status=Integrals Involving Quadratics");
aI("text=Integration Strategy;url=/Classes/CalcII/IntegrationStrategy.aspx;status=Integration Strategy");
aI("text=Improper Integrals;url=/Classes/CalcII/ImproperIntegrals.aspx;status=Improper Integrals");
aI("text=Comparison Test for Improper Integrals;url=/Classes/CalcII/ImproperIntegralsCompTest.aspx;status=Comparison Test for Improper Integrals");
aI("text=Approximating Definite Integrals;url=/Classes/CalcII/ApproximatingDefIntegrals.aspx;status=Approximating Definite Integrals");}

with(milonic=new menuname("ApplicationsofIntegrals")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcII/IntAppsIntro.aspx;status=Applications of Integrals");
aI("text=Arc Length;url=/Classes/CalcII/ArcLength.aspx;status=Arc Length");
aI("text=Surface Area;url=/Classes/CalcII/SurfaceArea.aspx;status=Surface Area");
aI("text=Center of Mass;url=/Classes/CalcII/CenterOfMass.aspx;status=Center of Mass");
aI("text=Hydrostatic Pressure;url=/Classes/CalcII/HydrostaticPressure.aspx;status=Hydrostatic Pressure");
aI("text=Probability;url=/Classes/CalcII/Probability.aspx;status=Probability");}

with(milonic=new menuname("ParametricEquationsandPolarCoordinates")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcII/ParametricIntro.aspx;status=Parametric Equations and Polar Coordinates");
aI("text=Parametric Equations and Curves;url=/Classes/CalcII/ParametricEqn.aspx;status=Parametric Equations and Curves");
aI("text=Tangents with Parametric Equations;url=/Classes/CalcII/ParaTangent.aspx;status=Tangents with Parametric Equations");
aI("text=Area with Parametric Equations;url=/Classes/CalcII/ParaArea.aspx;status=Area with Parametric Equations");
aI("text=Arc Length with Parametric Equations;url=/Classes/CalcII/ParaArcLength.aspx;status=Arc Length with Parametric Equations");
aI("text=Surface Area with Parametric Equations;url=/Classes/CalcII/ParaSurfaceArea.aspx;status=Surface Area with Parametric Equations");
aI("text=Polar Coordinates;url=/Classes/CalcII/PolarCoordinates.aspx;status=Polar Coordinates");
aI("text=Tangents with Polar Coordinates;url=/Classes/CalcII/PolarTangents.aspx;status=Tangents with Polar Coordinates");
aI("text=Area with Polar Coordinates;url=/Classes/CalcII/PolarArea.aspx;status=Area with Polar Coordinates");
aI("text=Arc Length with Polar Coordinates;url=/Classes/CalcII/PolarArcLength.aspx;status=Arc Length with Polar Coordinates");
aI("text=Surface Area with Polar Coordinates;url=/Classes/CalcII/PolarSurfaceArea.aspx;status=Surface Area with Polar Coordinates");
aI("text=Arc Length and Surface Area Revisited;url=/Classes/CalcII/ArcLength_SurfaceArea.aspx;status=Arc Length and Surface Area Revisited");}

with(milonic=new menuname("SeriesSequences")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcII/SeriesIntro.aspx;status=Series & Sequences");
aI("text=Sequences;url=/Classes/CalcII/Sequences.aspx;status=Sequences");
aI("text=More on Sequences;url=/Classes/CalcII/MoreSequences.aspx;status=More on Sequences");
aI("text=Series - The Basics;url=/Classes/CalcII/Series_Basics.aspx;status=Series - The Basics");
aI("text=Series - Convergence/Divergence;url=/Classes/CalcII/ConvergenceOfSeries.aspx;status=Series - Convergence/Divergence");
aI("text=Series - Special Series;url=/Classes/CalcII/Series_Special.aspx;status=Series - Special Series");
aI("text=Integral Test;url=/Classes/CalcII/IntegralTest.aspx;status=Integral Test");
aI("text=Comparison Test/Limit Comparison Test;url=/Classes/CalcII/SeriesCompTest.aspx;status=Comparison Test/Limit Comparison Test");
aI("text=Alternating Series Test;url=/Classes/CalcII/AlternatingSeries.aspx;status=Alternating Series Test");
aI("text=Absolute Convergence;url=/Classes/CalcII/AbsoluteConvergence.aspx;status=Absolute Convergence");
aI("text=Ratio Test;url=/Classes/CalcII/RatioTest.aspx;status=Ratio Test");
aI("text=Root Test;url=/Classes/CalcII/RootTest.aspx;status=Root Test");
aI("text=Strategy for Series;url=/Classes/CalcII/SeriesStrategy.aspx;status=Strategy for Series");
aI("text=Estimating the Value of a Series;url=/Classes/CalcII/EstimatingSeries.aspx;status=Estimating the Value of a Series");
aI("text=Power Series;url=/Classes/CalcII/PowerSeries.aspx;status=Power Series");
aI("text=Power Series and Functions;url=/Classes/CalcII/PowerSeriesandFunctions.aspx;status=Power Series and Functions");
aI("text=Taylor Series;url=/Classes/CalcII/TaylorSeries.aspx;status=Taylor Series");
aI("text=Applications of Series;url=/Classes/CalcII/TaylorSeriesApps.aspx;status=Applications of Series");
aI("text=Binomial Series;url=/Classes/CalcII/BinomialSeries.aspx;status=Binomial Series");}

with(milonic=new menuname("Vectors")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcII/VectorsIntro.aspx;status=Vectors");
aI("text=Vectors - The Basics;url=/Classes/CalcII/Vectors_Basics.aspx;status=Vectors - The Basics");
aI("text=Vector Arithmetic;url=/Classes/CalcII/VectorArithmetic.aspx;status=Vector Arithmetic");
aI("text=Dot Product;url=/Classes/CalcII/DotProduct.aspx;status=Dot Product");
aI("text=Cross Product;url=/Classes/CalcII/CrossProduct.aspx;status=Cross Product");}

with(milonic=new menuname("3-DimensionalSpace")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcII/3DSpace.aspx;status=3-Dimensional Space");
aI("text=The 3-D Coordinate Systems;url=/Classes/CalcII/3DCoords.aspx;status=The 3-D Coordinate Systems");
aI("text=Equations of Lines;url=/Classes/CalcII/EqnsOfLines.aspx;status=Equations of Lines");
aI("text=Equations of Planes;url=/Classes/CalcII/EqnsOfPlanes.aspx;status=Equations of Planes");
aI("text=Quadric Surfaces;url=/Classes/CalcII/QuadricSurfaces.aspx;status=Quadric Surfaces");
aI("text=Functions of Several Variables;url=/Classes/CalcII/MultiVrbleFcns.aspx;status=Functions of Several Variables");
aI("text=Vector Functions;url=/Classes/CalcII/VectorFunctions.aspx;status=Vector Functions");
aI("text=Calculus with Vector Functions;url=/Classes/CalcII/VectorFcnsCalculus.aspx;status=Calculus with Vector Functions");
aI("text=Tangent, Normal and Binormal Vectors;url=/Classes/CalcII/TangentNormalVectors.aspx;status=Tangent, Normal and Binormal Vectors");
aI("text=Arc Length with Vector Functions;url=/Classes/CalcII/VectorArcLength.aspx;status=Arc Length with Vector Functions");
aI("text=Curvature;url=/Classes/CalcII/Curvature.aspx;status=Curvature");
aI("text=Velocity and Acceleration;url=/Classes/CalcII/Velocity_Acceleration.aspx;status=Velocity and Acceleration");
aI("text=Cylindrical Coordinates;url=/Classes/CalcII/CylindricalCoords.aspx;status=Cylindrical Coordinates");
aI("text=Spherical Coordinates;url=/Classes/CalcII/SphericalCoords.aspx;status=Spherical Coordinates");}

drawMenus();
