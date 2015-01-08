SideMenu=new copyOf(VertMenu);

with(milonic=new menuname("Side Menu")){
style=SideMenu;
position="relative";
itemwidth=180;
alwaysvisible=1;
aI("text=Chapters;type=header;align=center");
aI("text=Primer Home;url=/Extras/ComplexPrimer/ComplexNumbers.aspx;status=Primer Home");
aI("text=The Definition;url=/Extras/ComplexPrimer/Definition.aspx;status=The Definition;");
aI("text=Arithmetic;url=/Extras/ComplexPrimer/Arithmetic.aspx;status=Arithmetic;");
aI("text=Conjugate and Modulus;url=/Extras/ComplexPrimer/ConjugateModulus.aspx;status=Conjugate and Modulus;");
aI("text=Polar and Exponential Forms;url=/Extras/ComplexPrimer/Forms.aspx;status=Polar and Exponential Forms;");
aI("text=Powers and Roots;url=/Extras/ComplexPrimer/Roots.aspx;status=Powers and Roots;");
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