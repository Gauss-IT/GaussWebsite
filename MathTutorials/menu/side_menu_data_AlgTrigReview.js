﻿SideMenu=new copyOf(VertMenu);

with(milonic=new menuname("Side Menu")){
style=SideMenu;
position="relative";
itemwidth=180;
alwaysvisible=1;
aI("text=Chapters;type=header;align=center");
aI("text=Review Home;url=/Extras/AlgebraTrigReview/AlgebraTrigIntro.aspx;status=Review Home");
aI("text=Algebra;showmenu=Algebra;status=Algebra;");
aI("text=Trigonometry;showmenu=Trigonometry;status=Trigonometry;");
aI("text=Exponentials & Logarithms;showmenu=ExponentialsLogarithms;status=Exponentials & Logarithms;");
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