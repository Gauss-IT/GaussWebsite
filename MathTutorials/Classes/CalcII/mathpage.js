// MathPage JavaScript 2.0: "MathPage JavaScript", "MathPage JavaScript v2.0 (MathType 5.3) by Design Science, Inc."
// Copyright 2001-2003 Design Science, Inc.
var DSMP={gJSFound:true,gPageVersion:0,gMaxCharCompat:0,gGenMathZoom:1,gPopupEqnBgColorDefault:"",gPopupEqnPaddingDefault:10,gPlaceholderPadding:4,gOldJSMessage:"",gCompatMessage:"",gMinBrowserMessage:"",gHidePopupMessage:"",gShowPopupMessage:"",gPlaceholderWidth:0,gPlaceholderHeight:0,gPlaceholder2Height:0,gScreenEqnWidth:0,gScreenEqnHeight:0,gScreenEqnSrc:"",gPrintEqnSrc:"",gPopupEqnSrc:"",gEmptySrc:"",gPopupEqnPadding:0,gNNPopupBgColor:"",gNNLayerTop:0,gNNLayerLeft:0,a:"2.0",b:"",c:false,d:false,e:false,f:false,g:false,h:false,i:false,j:false,k:false,l:false,m:false,n:false,o:false,p:false,q:false,r:false,s:false,t:false,u:false,v:false,w:false,z:false,A:false,B:false,C:false,D:false,E:0,F:0,G:1,H:new Array("S","M","L"),I:"",J:0,K:0,L:0,M:0,N:0,O:0,P:0,Q:0,R:0,S:0,T:0,U:false,V:false,W:new Array()};X();function X(){with(DSMP){if(navigator.appName=="Netscape"){if(navigator.appVersion.indexOf("Safari")!=-1){var Y=0;var Z=navigator.userAgent.indexOf("Safari/index.html");if(Z!=-1){Y=parseInt(navigator.userAgent.substring(Z+7));}g=true;q=true;B=true;if(Y<125){l=true;D=true;window.onload=ab;}else{r=true;C=true;i=true;window.onload=bb;}}else if(navigator.appVersion>="5"){g=true;q=true;A=false;C=true;r=true;if(navigator.appVersion.indexOf("Macintosh")!=-1){D=true;}}else{c=true;window.captureEvents(Event.RESIZE);if(navigator.appVersion.indexOf("Macintosh")!=-1){o=true;w=true;}if(navigator.appVersion<"4"){alert(gMinBrowserMessage);}}}else if(navigator.appName=="Microsoft Internet Explorer"){var cb=0;var Z=navigator.userAgent.indexOf("MSIE ");if(Z!=-1){cb=parseFloat(navigator.userAgent.substring(Z+5));}if(cb<4){alert(gMinBrowserMessage);}if(navigator.appVersion.indexOf("Windows")!=-1){f=true;if(cb>=5.5){d=true;g=true;h=true;s=true;n=true;}else if(cb>=5.0){d=true;g=true;h=true;s=true;t=true;}else{t=true;k=true;}}else if(navigator.appVersion.indexOf("Macintosh")!=-1){p=true;f=false;w=true;if(cb>=5.1){e=true;i=true;j=true;u=true;g=true;l=true;m=true;D=true;window.onload=ab;}else if(cb==5.0){e=true;i=true;j=true;g=true;k=true;}else{gPopupEqnPadding=0;u=true;v=true;}}}else if(navigator.appName=="Opera"){g=true;q=true;z=true;D=true;}window.onresize=db;eb();}}function eb(){with(DSMP){if(c)return;var fb="";fb+="<style> \n"+".MPNNCode { display:none } \n"+"sub,sup { font-size:.7em } \n";if(v){fb+=".MPPopup,.MPPopupNoBg { position:absolute; visibility:hidden } \n"+"table { z-index:98 } \n";}if(z){fb+=".MPScreenEqn { position:relative } \n"+".MPPrintEqn { position:relative } \n";}if(l){fb+=".MPScreenEqn { visibility:hidden } \n";}fb+="</style> \n";if(D){fb+="<style media=print> \n"+".MPPrintEqn { position:relative } \n"+".MPPHSpan,.MPScreenPH,.MPScreenEqn,.MPPopup,.MPPopupNoBg,.MPPH { display:none } \n"+"</style> \n";}document.write(fb);}}function db(){with(DSMP){if(c){if(navigator.appVersion.substr(0,4)!="4.05")location.reload();}else{gb();if(l){ab();}}}}function bb(){window.resizeBy(1,1);window.resizeBy(-1,-1);}function ab(){with(DSMP){for(var hb=0;hb<document.images.length;hb++){var id=(q?document.images.item(hb).id:document.images[hb].id);var ib=id.substr(0,2);if(id.length==6&&(ib=="ch"||ib=="eq")){jb(id);}}}}function MPBodyInit(kb){with(DSMP){if(parseInt(gPageVersion)>parseInt(a)){alert(gOldJSMessage);}if(gMaxCharCompat==0){if(!d)alert(gCompatMessage);}else if(gMaxCharCompat==2){if(!e)alert(gCompatMessage);}b=escape(kb);if(b.length>0){b+="../../index.html";}lb();}}function lb(){with(DSMP){if(c){E=eval("document.layers.MPDpiSpan.top");G=eval("document.layers.MPDpiSpan.clip.width")/100;}else if(q){if(A){var mb=window.open();mb.document.write("<span id=MPDpiSpan style='position:absolute;top:1in'>ABC</span>");mb.document.close();E=mb.document.getElementById("MPDpiSpan").offsetTop;mb.close();}else{E=document.getElementById("MPDpiSpan").offsetTop;}}else{E=eval("document.all.MPDpiSpan.offsetTop");if(i){E+=document.body.topMargin;}}if(E>=108)F=2;else if(E>=84)F=1;else F=0;}}function nb(id){with(DSMP){if(q){var ob=document.getElementById(id);if(ob!=null){ob.parentNode.removeChild(ob);}}else{if(typeof document.all[id].length=="number"){for(var hb=document.all[id].length-1;hb>0;--hb){document.all[id][hb].outerHTML="";}}document.all[id].outerHTML="";}}}function MPDeleteCode(id){with(DSMP){if(g){nb("mpnn"+id+"ph");nb("mpnn"+id);}if(h){nb("mp"+id+"s1");nb("mp"+id+"s2");}}}function pb(qb,rb){with(DSMP){var sb=I;var tb=I+"ph";var ub=I+"pop";var vb=I+"prt";var fb="";var wb="";if(qb){if(f){fb+="<span ";}else{fb+="<img border=0 ";}if(T){fb+="class=MPPopupNoBg";wb+="background-color:#"+T+";";}else{fb+="class=MPPopup";}if(!V){wb+="border:none;";}if(!U){wb+="padding:0px;";}if(f){wb+="width:"+xb+"px;height:"+yb+"px";}if(wb.length>0){fb+=" style='"+wb+"'";}fb+=" id="+ub;if(f){fb+="><img border=0 ";}fb+=" src='"+gPopupEqnSrc+"'"+" width="+xb+" height="+yb+" onmousemove='status="+'"'+gHidePopupMessage+'"'+"'"+" onmouseover='status="+'"'+gHidePopupMessage+'"'+"'"+" onmouseout='status="+'""'+"'"+" onclick='return MPHidePopup(event,"+ub+")'>";if(f){fb+="</span>";}}fb+="<nobr>";var top=gPlaceholderPadding;var left=-K;var zb=gPlaceholderWidth-(s?3:1);if(z){;}else if(t&&rb){zb=gPlaceholderWidth;if(rb==2){fb+="<span id="+tb+"span class=MPPHSpan style='position:relative;width:1px;height:"+gPlaceholderHeight+"px'>";top=-gPlaceholderHeight;}else{fb+="<span id="+tb+"span class=MPPHSpan style='position:relative;width:1px;height:1px'>";}fb+="<img class=MPPH src='"+gEmptySrc+"'"+" id="+tb+" width="+gPlaceholderWidth+" height=1";if(rb==2){fb+=" align=middle border=0";}else{fb+=" align=baseline style='position:relative;top:1ex' border=0";top=1;}fb+=">";}else if(j||n){fb+="<span id="+tb+"span class=MPPHSpan style='position:relative";if(k)fb+=";width:1px";else if(n)fb+=";height:1px;font-size:0px'";fb+="'>";fb+="<img class=MPScreenPH src='"+gEmptySrc+"'"+" id="+tb+" width="+zb+" height="+gPlaceholderHeight+"><img class=MPPrintPH src='"+gEmptySrc+"'"+" id="+tb+"prt"+" width="+(R-(s?3:1))+" height="+gPlaceholderHeight+">";}else if(r){fb+="<span id="+tb+"span class=MPPHSpan style='position:relative;font-size:1px'>";top+=(-gPlaceholderHeight+1);fb+="<img class=MPPH src='"+gEmptySrc+"'"+" style='visibility:visible' "+" id="+tb+" width="+zb+" height="+gPlaceholderHeight+">";}else{fb+="<span id="+tb+"span class=MPPHSpan style='position:relative;height:"+gPlaceholderHeight+"px";if(k)fb+=";width:1px";fb+="'>";fb+="<img class=MPPH src='"+gEmptySrc+"'"+" align=baseline"+" id="+tb+" width="+zb+" height="+gPlaceholderHeight+">";}if(z){top=J;}fb+="<img class=MPScreenEqn"+" align=baseline "+" id="+sb+" border=0 style='z-index:98;cursor:";if(qb){fb+="hand";}else{fb+="default";}fb+=";top:"+top+"px;"+"left:"+left+"px'"+" src='"+gScreenEqnSrc+"'"+" width="+gScreenEqnWidth+" height="+gScreenEqnHeight;if(qb){fb+=" onclick='return MPShowPopup("+sb+","+ub+",event)'"+" onmousemove='status="+'"'+gShowPopupMessage+'"'+"'"+" onmouseover='status="+'"'+gShowPopupMessage+'"'+"'"+" onmouseout='status="+'""'+"'";}fb+=">";if(j){left=-1-P;}if(z||D){top=O;}var Ab="<img class=MPPrintEqn"+" id="+vb+" src='"+gPrintEqnSrc+"'"+" style='top:"+top+"px;left:"+left+"px'"+" width="+M+" height="+N+">";if(!D)fb+=Ab;if(!z)fb+="</span>";if(!t||!rb){fb+="<img align=top class=MPPH id="+tb+"2 border=0 src='"+gEmptySrc+"'";fb+=" width=1 height="+(gPlaceholder2Height)+">";}if(s){document.write(fb);fb="";var Bb=eval("document.all."+tb);var Cb=Bb.currentStyle.lineHeight;var lineHeight=0,Db=1,Eb=1;if(Cb!="normal"){lineHeight=(parseInt(Cb)*E)/72;Db=parseInt(lineHeight*3/5+0.5);Eb=parseInt(Db+(lineHeight*1/3)+0.5);}fb+="<img class=MPPH id="+tb+"3 align=bottom border=0 width=1 src='"+gEmptySrc+"' height="+Db+">";fb+="<img class=MPPH id="+tb+"4 align=top    border=0 width=1 src='"+gEmptySrc+"' height="+Eb+">";}fb+="</nobr>";if(D){fb+=Ab;fb+="<img class=MPPrintPH src='"+gEmptySrc+"'"+" id="+tb+"5 "+" align=top width=1"+" height="+(N+O)+">";}document.write(fb);if(l){var Bb=document.getElementById(tb);var Fb=document.getElementById(sb);Fb.topOffset=gPlaceholderPadding;Fb.leftOffset=K;}}}function jb(sb){var Bb=document.getElementById(sb+"ph");var Fb=document.getElementById(sb);Fb.style.pixelLeft=Bb.offsetLeft-Fb.leftOffset;Fb.style.pixelTop=Bb.offsetTop+Fb.topOffset;Fb.style.visibility="visible";}function MPEquation(){with(DSMP){if(!c){pb(gGenMathZoom,0);}}}function MPInlineChar(rb){with(DSMP){if(!c){pb(false,rb);}}}function MPShowPopup(Gb,Hb,Ib){with(DSMP){if(c){if(Ib.which!=1)return true;}else if(q){if(Ib.button!=0&&!B)return true;}var Jb;var Kb;if(c){Jb=Gb.clip;Kb=Hb.clip;}else{Jb=Gb;Kb=Hb;if(f)Kb=Hb.children[0];}var Lb=parseInt(Jb.width);var Mb=parseInt(Jb.height);var Nb=parseInt(Kb.width);var Ob=parseInt(Kb.height);if(c){Hb.x=Gb.x+(Lb)/2-(Nb)/2;var Pb=window.innerWidth;var Qb=15;if(document.width>window.innerWidth-Qb){Pb-=Qb;}if(Hb.x+Nb>Pb){Hb.x=Pb-Nb;}if(Hb.x<0)Hb.x=0;Hb.y=Gb.y+(Mb)/2-(Ob)/2;if(Hb.y+Ob>document.height){Hb.y=document.height-Ob;}if(Hb.y<0)Hb.y=0;Hb.visibility="show";}else if(q){var top=Gb.parentNode.offsetTop;if(i)top+=document.body.offsetTop;if(C)top+=Gb.offsetTop;top+=parseInt((Mb)/2-(Ob)/2-gPopupEqnPaddingDefault);if(top<0)top=0;var left=Gb.parentNode.offsetLeft;if(i)left+=document.body.offsetTop;if(C)left+=Gb.offsetLeft;left+=parseInt((Lb/2)-(Nb/2)-gPopupEqnPaddingDefault);if(left<0)left=0;Hb.style.top=top+"px";Hb.style.left=left+"px";Hb.style.visibility="visible";}else{var Rb=Gb;if(Rb.tagName=="IMG"&&Rb.parentElement.tagName=="SPAN"){Rb=Rb.parentElement;}var top=Rb.offsetTop;var left=Rb.offsetLeft;if(p){top+=Gb.style.pixelTop;left+=Gb.style.pixelLeft;}if(i){left+=document.body.leftMargin;top+=document.body.topMargin;}if(m){var Sb=false;var Tb=Gb.clientTop,Ub=Gb.clientLeft;for(Vb=Gb.parentElement;Vb!=null;Vb=Vb.parentElement){if(Vb.tagName=="TD"||Vb.tagName=="TABLE"){Tb+=Vb.clientTop;Ub+=Vb.clientLeft;}if(Vb.tagName=="TABLE"){Sb=true;break;}}if(Sb){top=Tb;left=Ub;}}var padding;if(Hb.currentStyle){padding=parseInt(Hb.currentStyle.padding);}else{padding=gPopupEqnPaddingDefault;}Hb.style.pixelTop=top+(Mb)/2-(Ob)/2-padding;var Wb=document.body.scrollHeight;if(document.body.offsetHeight>Wb){Wb=document.body.offsetHeight;}if(Hb.style.pixelTop+Ob>Wb){Hb.style.pixelTop=Wb-Ob-2*padding-2;}if(Hb.style.pixelTop<0){if(u){var Sb=false;for(Vb=Rb;Vb!=null;Vb=Vb.parentElement){if(Vb.tagName=="TD"||Vb.tagName=="TABLE"){Sb=true;break;}}if(!Sb){Hb.style.pixelTop=document.body.topMargin;}}else{Hb.style.pixelTop=0;}}Hb.style.pixelLeft=left+(Lb/2)-(Nb/2)-padding;if((Hb.style.pixelLeft+Nb)>document.body.scrollWidth){Hb.style.pixelLeft=document.body.scrollWidth-Nb-2*padding-2;}if(Hb.style.pixelLeft<0)Hb.style.pixelLeft=0;Hb.style.visibility="visible";}W[W.length]=Hb;return false;}}function gb(){with(DSMP){var Xb=W.length;for(var hb=0;hb<Xb;hb++){Yb=W[hb];if(Yb!=null){if(c){Yb.visibility="hide";}else{Yb.style.visibility="hidden";}}}W.length=0;}}function MPHidePopup(Ib,Hb){with(DSMP){var Zb=false;if(c){if(Ib.which!=1)return true;Zb=Ib.modifiers&Event.SHIFT_MASK;}else if(q){if(Ib.button!=0&&!B)return true;Zb=Ib.shiftKey;}else{Zb=window.event.shiftKey;}if(Zb){gb();}else{if(c){Hb.visibility="hide";}else{Hb.style.visibility="hidden";}for(var hb=0;hb<W.length;++hb){if(W[hb]==Hb){W[hb]=null;break;}}}return false;}}function ac(bc,cc,qb,dc,ec,fc){with(DSMP){I=bc;gEmptySrc=b+"empty.gif";gScreenEqnWidth=fc[F][0];gScreenEqnHeight=fc[F][1];J=fc[F][2];K=fc[F][3];L=fc[F][4];if(cc=="ch"||cc=="eq"){gScreenEqnSrc=gEmptySrc;}else{gScreenEqnSrc=b+cc+H[F]+".gif";}gPlaceholderHeight=gScreenEqnHeight-J+gPlaceholderPadding;gPlaceholderWidth=gScreenEqnWidth-K-L;gPlaceholder2Height=gScreenEqnHeight+2*gPlaceholderPadding;if(qb){xb=fc[F+3][0];yb=fc[F+3][1];gPopupEqnSrc=b+cc+H[F]+"P.gif";}T=dc;U=(ec&1);V=(ec&2);if(U)gPopupEqnPadding=gPopupEqnPaddingDefault;else gPopupEqnPadding=0;gNNPopupBgColor=(dc?"#"+dc:gPopupEqnBgColorDefault);var gc;if(j)gc=0;else if(n)gc=1;else gc=F;M=fc[gc][0];N=fc[gc][1];O=fc[gc][2];P=fc[gc][3];Q=fc[gc][4];S=N-O+gPlaceholderPadding;R=M-P-Q;if(cc=="ch"||cc=="eq"){gPrintEqnSrc=gEmptySrc;}else{if(o){gPrintEqnSrc=b+cc+"S.gif";}else{gPrintEqnSrc=b+cc+"P.gif";}}}}function MPSetEqnAttrs(bc,hc,ec,fc){ac(bc,bc,true,hc,ec,fc);}function MPSetChAttrs(bc,cc,fc){ac(bc,cc,false,null,0,fc);}function MPNNCalcTopLeft(ic,jc){with(DSMP){if(!c)return;gNNLayerTop=Math.round(ic.y/G)+(jc=="1"?gPlaceholderHeight:1)-gScreenEqnHeight+J;gNNLayerLeft=ic.x/G-K;}}function MPNNSelectScreenEqn(kc){with(DSMP){if(!c)return;if(innerWidth||innerHeight){if(kc.src.substr(kc.src.length-9,9)!="empty.html"){var lc=kc.src.substr(0,kc.src.length-5)+H[F]+".gif";var Xb=lc.length;if(kc.src!=lc){kc.src=lc;}}}}}function MPWebEQApplet(id,mc,nc,oc,pc,qc){var width=nc[0];var height=nc[1];var rc=nc[2];var sc=(height-rc);var tc=oc;var fb='<applet code=webeq3.ViewerControl '+' id='+id+' width='+width+' height='+(2*sc)+' align=middle>'+'<param name=size value='+tc+'>'+'<param name=controls value=false>'+'<param name=align value=left>'+'<param name=valign value=baseline>';if(pc){fb+='<param name=background value="#'+pc+'">';}fb+=mc+'<param name=eq value="'+qc+'">'+'</applet>';document.write(fb);}function MPTechexplorerObject(id,mc,nc,oc,pc,qc){var uc=nc[0];var vc=nc[1];var rc=nc[2];var tc=oc;var wc=eval("document.techexplorer");var width,height,xc,sc;var fb="";var yc="";var zc=new RegExp("&","g");var Ac=new RegExp("<math>");var Bc=new RegExp("</math>");if(gScaleEquations){uc=Math.round((uc*DSMP.E)/96);vc=Math.round((vc*DSMP.E)/96);rc=Math.round((rc*DSMP.E)/96);if(DSMP.w){tc=Math.round((oc*DSMP.E)/72);}else{tc=Math.round((oc*72)/DSMP.E);}}yc="fontsize='"+tc+"pt'";if(pc)yc+=" mathbackground='#"+pc+"'";qc=qc.replace(Ac,"<math><mstyle "+yc+">");qc=qc.replace(Bc,"</mstyle></math>");var Cc=qc.replace(zc,"&amp;");fb+='<object align=absmiddle classid="clsid:5AFAB315-AD87-11D3-98BB-002035EFB1A4" codebase="AXTCHEXP.OCX"'+' id='+id+'>'+'<param name="DataType" value="1">'+'<param name="AutoSize" value="TRUE">'+'<param name="Data" value="'+Cc+'">'+mc;var Dc=(navigator.plugins["IBM techexplorer Hypermedia Browser [Trial Version], Professional Edition"]!=null||navigator.plugins["IBM techexplorer Hypermedia Browser, Professional Edition"]!=null);if(navigator.appName=="Netscape"&&Dc){while(!wc.isReady());width=wc.getWidthFromMMLString(qc);height=wc.getHeightFromMMLString(qc);xc=Math.round((rc*height)/vc);}else{width=uc;height=vc;xc=rc;}sc=height-xc;fb+='<embed type="application/x-techexplorer"'+' pluginspage="http://www.software.ibm.com/techexplorer"'+' id='+id+' width='+width+' height='+(2*sc)+' align="middle"'+mc+' mmldata="'+Cc+'">'+'</embed>'+'</object>';document.write(fb);}