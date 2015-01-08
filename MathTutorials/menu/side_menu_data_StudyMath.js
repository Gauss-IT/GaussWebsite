SideMenu=new copyOf(VertMenu);

with(milonic=new menuname("Side Menu")){
style=SideMenu;
position="relative";
itemwidth=180;
alwaysvisible=1;
aI("text=Chapters;type=header;align=center");
aI("text=Studying Math Home;url=/Extras/StudyMath/HowToStudyMath.aspx;status=Studying Math Home");
aI("text=General Tips;url=/Extras/StudyMath/GeneralTips.aspx;status=General Tips;");
aI("text=Taking Notes;url=/Extras/StudyMath/TakingNotes.aspx;status=Taking Notes;");
aI("text=Getting Help;url=/Extras/StudyMath/GettingHelp.aspx;status=Getting Help;");
aI("text=Doing Homework;url=/Extras/StudyMath/Homework.aspx;status=Doing Homework;");
aI("text=Problem Solving;url=/Extras/StudyMath/ProblemSolving.aspx;status=Problem Solving;");
aI("text=Studying For an Exam;url=/Extras/StudyMath/StudyForExam.aspx;status=Studying For an Exam;");
aI("text=Taking an Exam;url=/Extras/StudyMath/TakingExam.aspx;status=Taking an Exam;");
aI("text=Learn From Your Errors;url=/Extras/StudyMath/Errors.aspx;status=Learn From Your Errors;");
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

