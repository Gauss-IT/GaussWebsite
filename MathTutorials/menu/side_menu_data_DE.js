SideMenu=new copyOf(VertMenu);

with(milonic=new menuname("Side Menu")){
style=SideMenu;
position="relative";
itemwidth=180;
alwaysvisible=1;
aI("text=Chapters;type=header;align=center");
aI("text=Diff EQ Home;url=/Classes/DE/DE.aspx;status=Diff EQ Home");
aI("text=Basic Concepts;showmenu=BasicConcepts;status=Basic Concepts;");
aI("text=First Order DE's;showmenu=FirstOrderDEs;status=First Order DE`s;");
aI("text=Second Order DE's;showmenu=SecondOrderDEs;status=Second Order DE`s;");
aI("text=Laplace Transforms;showmenu=LaplaceTransforms;status=Laplace Transforms;");
aI("text=Systems of DE's;showmenu=SystemsofDEs;status=Systems of DE`s;");
aI("text=Series Solutions to DE's;showmenu=SeriesSolutionstoDEs;status=Series Solutions to DE`s;");
aI("text=Higher Order Differential Equations;showmenu=HigherOrderDifferentialEquations;status=Higher Order Differential Equations;");
aI("text=Boundary Value Problems & Fourier Series;showmenu=BoundaryValueProblemsamp;FourierSeries;status=Boundary Value Problems & Fourier Series;");
aI("text=Partial Differential Equations;showmenu=PartialDifferentialEquations;status=Partial Differential Equations;");
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