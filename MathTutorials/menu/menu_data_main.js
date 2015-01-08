
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
subimage="menu/arrow_horiz_out.gif";
onsubimage="menu/arrow_horiz_in.gif";
subimagepadding="2";
//overfilter="Fade(duration=0.2);Alpha(opacity=90);Shadow(color='#777777', Direction=135, Strength=5)";
overfilter="Fade(duration=0.2);Alpha(opacity=90)";
outfilter="randomdissolve(duration=0.3)";
}

VertMenu=new copyOf(HorzMenu);
VertMenu.subimage="menu/arrow_vert_out.gif";
VertMenu.onsubimage="menu/arrow_vert_in.gif";

drawMenus();
