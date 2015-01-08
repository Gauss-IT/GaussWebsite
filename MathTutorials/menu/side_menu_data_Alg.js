
SideMenu=new copyOf(VertMenu);

with(milonic=new menuname("Side Menu")){
style=SideMenu;
position="relative";
itemwidth=180;
alwaysvisible=1;
aI("text=Chapters;type=header;align=center");
aI("text=Algebra Home;url=/Classes/Alg/Alg.aspx;status=Algebra Home");
aI("text=Preliminaries;showmenu=Preliminaries;status=Preliminaries;");
aI("text=Solving Equations and Inequalities;showmenu=SolvingEquationsandInequalities;status=Solving Equations and Inequalities;");
aI("text=Graphing and Functions;showmenu=GraphingandFunctions;status=Graphing and Functions;");
aI("text=Common Graphs;showmenu=CommonGraphs;status=Common Graphs;");
aI("text=Polynomial Functions;showmenu=PolynomialFunctions;status=Polynomial Functions;");
aI("text=Exponential and Logarithm Functions;showmenu=ExponentialandLogarithmFunctions;status=Exponential and Logarithm Functions;");
aI("text=Systems of Equations;showmenu=SystemsofEquations;status=Systems of Equations;");
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