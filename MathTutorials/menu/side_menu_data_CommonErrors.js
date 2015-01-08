SideMenu=new copyOf(VertMenu);

with(milonic=new menuname("Side Menu")){
style=SideMenu;
position="relative";
itemwidth=180;
alwaysvisible=1;
aI("text=Chapters;type=header;align=center");
aI("text=Common Errors Home;url=/Extras/CommonErrors/CommonMathErrors.aspx;status=Common Errors Home");
aI("text=General Errors;url=/Extras/CommonErrors/GeneralErrors.aspx;status=General Errors;");
aI("text=Algebra Errors;url=/Extras/CommonErrors/AlgebraErrors.aspx;status=Algebra Errors;");
aI("text=Trig Errors;url=/Extras/CommonErrors/TrigErrors.aspx;status=Trig Errors;");
aI("text=Common Errors;url=/Extras/CommonErrors/CommonErrors.aspx;status=Common Errors;");
aI("text=Calculus Errors;url=/Extras/CommonErrors/CalculusErrors.aspx;status=Calculus Errors;");
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