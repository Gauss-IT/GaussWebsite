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

with(milonic=new menuname("3-DimensionalSpace")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcIII/3DSpace.aspx;status=3-Dimensional Space");
aI("text=The 3-D Coordinate System;url=/Classes/CalcIII/3DCoords.aspx;status=The 3-D Coordinate System");
aI("text=Equations of Lines;url=/Classes/CalcIII/EqnsOfLines.aspx;status=Equations of Lines");
aI("text=Equations of Planes;url=/Classes/CalcIII/EqnsOfPlanes.aspx;status=Equations of Planes");
aI("text=Quadric Surfaces;url=/Classes/CalcIII/QuadricSurfaces.aspx;status=Quadric Surfaces");
aI("text=Functions of Several Variables;url=/Classes/CalcIII/MultiVrbleFcns.aspx;status=Functions of Several Variables");
aI("text=Vector Functions;url=/Classes/CalcIII/VectorFunctions.aspx;status=Vector Functions");
aI("text=Calculus with Vector Functions;url=/Classes/CalcIII/VectorFcnsCalculus.aspx;status=Calculus with Vector Functions");
aI("text=Tangent, Normal and Binormal Vectors;url=/Classes/CalcIII/TangentNormalVectors.aspx;status=Tangent, Normal and Binormal Vectors");
aI("text=Arc Length with Vector Functions;url=/Classes/CalcIII/VectorArcLength.aspx;status=Arc Length with Vector Functions");
aI("text=Curvature;url=/Classes/CalcIII/Curvature.aspx;status=Curvature");
aI("text=Velocity and Acceleration;url=/Classes/CalcIII/Velocity_Acceleration.aspx;status=Velocity and Acceleration");
aI("text=Cylindrical Coordinates;url=/Classes/CalcIII/CylindricalCoords.aspx;status=Cylindrical Coordinates");
aI("text=Spherical Coordinates;url=/Classes/CalcIII/SphericalCoords.aspx;status=Spherical Coordinates");}

with(milonic=new menuname("PartialDerivatives")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcIII/PartialDerivsIntro.aspx;status=Partial Derivatives");
aI("text=Limits;url=/Classes/CalcIII/Limits.aspx;status=Limits");
aI("text=Partial Derivatives;url=/Classes/CalcIII/PartialDerivatives.aspx;status=Partial Derivatives");
aI("text=Interpretations of Partial Derivatives;url=/Classes/CalcIII/PartialDerivInterp.aspx;status=Interpretations of Partial Derivatives");
aI("text=Higher Order Partial Derivatives;url=/Classes/CalcIII/HighOrderPartialDerivs.aspx;status=Higher Order Partial Derivatives");
aI("text=Differentials;url=/Classes/CalcIII/Differentials.aspx;status=Differentials");
aI("text=Chain Rule;url=/Classes/CalcIII/ChainRule.aspx;status=Chain Rule");
aI("text=Directional Derivatives;url=/Classes/CalcIII/DirectionalDeriv.aspx;status=Directional Derivatives");}

with(milonic=new menuname("ApplicationsofPartialDerivatives")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcIII/PartialDerivAppsIntro.aspx;status=Applications of Partial Derivatives");
aI("text=Tangent Planes and Linear Approximations;url=/Classes/CalcIII/TangentPlanes.aspx;status=Tangent Planes and Linear Approximations");
aI("text=Gradient Vector, Tangent Planes and Normal Lines;url=/Classes/CalcIII/GradientVectorTangentPlane.aspx;status=Gradient Vector, Tangent Planes and Normal Lines");
aI("text=Relative Minimums and Maximums;url=/Classes/CalcIII/RelativeExtrema.aspx;status=Relative Minimums and Maximums");
aI("text=Absolute Minimums and Maximums;url=/Classes/CalcIII/AbsoluteExtrema.aspx;status=Absolute Minimums and Maximums");
aI("text=Lagrange Multipliers;url=/Classes/CalcIII/LagrangeMultipliers.aspx;status=Lagrange Multipliers");}

with(milonic=new menuname("MultipleIntegrals")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcIII/MultipleIntegralsIntro.aspx;status=Multiple Integrals");
aI("text=Double Integrals;url=/Classes/CalcIII/DoubleIntegrals.aspx;status=Double Integrals");
aI("text=Iterated Integrals;url=/Classes/CalcIII/IteratedIntegrals.aspx;status=Iterated Integrals");
aI("text=Double Integrals over General Regions;url=/Classes/CalcIII/DIGeneralRegion.aspx;status=Double Integrals over General Regions");
aI("text=Double Integrals in Polar Coordinates;url=/Classes/CalcIII/DIPolarCoords.aspx;status=Double Integrals in Polar Coordinates");
aI("text=Triple Integrals;url=/Classes/CalcIII/TripleIntegrals.aspx;status=Triple Integrals");
aI("text=Triple Integrals in Cylindrical Coordinates;url=/Classes/CalcIII/TICylindricalCoords.aspx;status=Triple Integrals in Cylindrical Coordinates");
aI("text=Triple Integrals in Spherical Coordinates;url=/Classes/CalcIII/TISphericalCoords.aspx;status=Triple Integrals in Spherical Coordinates");
aI("text=Change of Variables;url=/Classes/CalcIII/ChangeOfVariables.aspx;status=Change of Variables");
aI("text=Surface Area;url=/Classes/CalcIII/SurfaceArea.aspx;status=Surface Area");
aI("text=Area and Volume Revisited;url=/Classes/CalcIII/Area_Volume.aspx;status=Area and Volume Revisited");}

with(milonic=new menuname("LineIntegrals")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcIII/LineIntegralsIntro.aspx;status=Line Integrals");
aI("text=Vector Fields;url=/Classes/CalcIII/VectorFields.aspx;status=Vector Fields");
aI("text=Line Integrals - Part I;url=/Classes/CalcIII/LineIntegralsPtI.aspx;status=Line Integrals - Part I");
aI("text=Line Integrals - Part II;url=/Classes/CalcIII/LineIntegralsPtII.aspx;status=Line Integrals - Part II");
aI("text=Line Integrals of Vector Fields;url=/Classes/CalcIII/LineIntegralsVectorFields.aspx;status=Line Integrals of Vector Fields");
aI("text=Fundamental Theorem for Line Integrals;url=/Classes/CalcIII/FundThmLineIntegrals.aspx;status=Fundamental Theorem for Line Integrals");
aI("text=Conservative Vector Fields;url=/Classes/CalcIII/ConservativeVectorField.aspx;status=Conservative Vector Fields");
aI("text=Green's Theorem;url=/Classes/CalcIII/GreensTheorem.aspx;status=Green's Theorem");
aI("text=Curl and Divergence;url=/Classes/CalcIII/CurlDivergence.aspx;status=Curl and Divergence");}

with(milonic=new menuname("SurfaceIntegrals")){
style=HorzMenu;
left="offset=20"
top="offset=-11"
aI("text=Introduction;url=/Classes/CalcIII/SurfaceIntegralsIntro.aspx;status=Surface Integrals");
aI("text=Parametric Surfaces;url=/Classes/CalcIII/ParametricSurfaces.aspx;status=Parametric Surfaces");
aI("text=Surface Integrals;url=/Classes/CalcIII/SurfaceIntegrals.aspx;status=Surface Integrals");
aI("text=Surface Integrals of Vector Fields;url=/Classes/CalcIII/SurfIntVectorField.aspx;status=Surface Integrals of Vector Fields");
aI("text=Stokes' Theorem;url=/Classes/CalcIII/StokesTheorem.aspx;status=Stokes' Theorem");
aI("text=Divergence Theorem;url=/Classes/CalcIII/DivergenceTheorem.aspx;status=Divergence Theorem");}

drawMenus();