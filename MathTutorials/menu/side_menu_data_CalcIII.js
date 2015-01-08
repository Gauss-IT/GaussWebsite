SideMenu=new copyOf(VertMenu);

with(milonic=new menuname("Side Menu")){
style=SideMenu;
position="relative";
itemwidth=180;
alwaysvisible=1;
aI("text=Chapters;type=header;align=center");
aI("text=Calculus III Home;url=/Classes/CalcIII/CalcIII.aspx;status=Calculus III Home");
aI("text=3-Dimensional Space;showmenu=3-DimensionalSpace;status=3-Dimensional Space;");
aI("text=Partial Derivatives;showmenu=PartialDerivatives;status=Partial Derivatives;");
aI("text=Applications of Partial Derivatives;showmenu=ApplicationsofPartialDerivatives;status=Applications of Partial Derivatives;");
aI("text=Multiple Integrals;showmenu=MultipleIntegrals;status=Multiple Integrals;");
aI("text=Line Integrals;showmenu=LineIntegrals;status=Line Integrals;");
aI("text=Surface Integrals;showmenu=SurfaceIntegrals;status=Surface Integrals;");
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