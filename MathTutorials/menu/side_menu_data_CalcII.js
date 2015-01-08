
SideMenu=new copyOf(VertMenu);

with(milonic=new menuname("Side Menu")){
style=SideMenu;
position="relative";
itemwidth=180;
alwaysvisible=1;
aI("text=Chapters;type=header;align=center");
aI("text=Calculus II Home;url=/Classes/CalcII/CalcII.aspx;status=Calculus II Home");
aI("text=Integration Techniques;showmenu=IntegrationTechniques;status=Integration Techniques;");
aI("text=Applications of Integrals;showmenu=ApplicationsofIntegrals;status=Applications of Integrals;");
aI("text=Parametric Equations and Polar Coordinates;showmenu=ParametricEquationsandPolarCoordinates;status=Parametric Equations and Polar Coordinates;");
aI("text=Series & Sequences;showmenu=SeriesSequences;status=Series & Sequences;");
aI("text=Vectors;showmenu=Vectors;status=Vectors;");
aI("text=3-Dimensional Space;showmenu=3-DimensionalSpace;status=3-Dimensional Space;");
aI("text=Misc;type=header;align=center");
aI("text=Contact Me;url=/contact.aspx;status=Contact Me;");
aI("text=Downloads;url=/download.aspx;status=Downloads;");
aI("text=FAQ;url=/faq.aspx;status=FAQ;");
//aI("text=About OpenStudy;url=/StudyGroup.aspx;status=About OpenStudy;");
aI("text=Links;url=/links.aspx;status=Links;");
aI("text=My Students;url=/mystudents.aspx;status=My Students;");
aI("text=Site Map;url=/sitemap.aspx;status=Site Map;");
aI("text=Terms of Use;url=/terms.aspx;status=Terms and Conditions of Use;");
}

drawMenus();