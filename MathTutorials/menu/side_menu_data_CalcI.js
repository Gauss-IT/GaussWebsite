SideMenu=new copyOf(VertMenu);

with(milonic=new menuname("Side Menu")){
style=SideMenu;
position="relative";
itemwidth=180;
alwaysvisible=1;
aI("text=Chapters;type=header;align=center");
aI("text=Calculus I Home;url=/Classes/CalcI/CalcI.aspx;status=Calculus I Home");
aI("text=Review;showmenu=Review;status=Review;");
aI("text=Limits;showmenu=Limits;status=Limits;");
aI("text=Derivatives;showmenu=Derivatives;status=Derivatives;");
aI("text=Applications of Derivatives;showmenu=ApplicationsofDerivatives;status=Applications of Derivatives;");
aI("text=Integrals;showmenu=Integrals;status=Integrals;");
aI("text=Applications of Integrals;showmenu=ApplicationsofIntegrals;status=Applications of Integrals;");
aI("text=Extras;showmenu=CalcIExtras;status=Extras;");
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