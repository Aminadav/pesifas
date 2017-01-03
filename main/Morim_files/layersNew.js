<!--
<!--
// Global variables
var xLayer 		= 	0;
var yLayer 		= 	0;
var thisMenu
var globalLayer = ""
var navonImg = ""
var navoffImg = ""
var layerTimeout = 1000
var lt = 0// layer timer

isNS4 = (document.layers) ? 1 : 0;
isIE  = (document.all) ? 1 : 0;
isW3C = (document.getElementById && !document.all) ? 1 : 0;
isIE4Mac = ((navigator.appVersion.indexOf("Mac") != -1) && (document.all) && !(document.getElementById)) ? 1 : 0;

// -->

function MM_findObj(n, d) { //v4.0
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && document.getElementById) x=document.getElementById(n); return x;
}

function startOne(){

for (lay=0;lay<5;lay++){
	objL2=eval("document.getElementById('IF0"+lay+"')")
	objL1=eval("document.getElementById('ID0"+lay+"')")
	objL2.style.left=-(objL2.offsetWidth-objL1.offsetWidth)
	}
	
}	





function MM_showHideLayers() { //v3.0

  var i,p,v,obj,args=MM_showHideLayers.arguments;
	objL1=document.getElementById(args[0])
	objL2=document.getElementById(args[1])
	objL2.style.left=-(objL2.offsetWidth-objL1.offsetWidth)
	thisMenu = objL2;
//******** custom to hide rollovers
    if(navoffImg != ""){
	  getimgnavOff(args[0])} 
//******* end custom
 x = window.event.srcElement.offsetLeft +
	    window.event.srcElement.offsetParent.offsetLeft;

x -= thisMenu.style.posWidth;
if (x < 0) x = 0;

  for (i=0; i<(args.length-2); i+=3) 
  	if ((obj=MM_findObj(args[i]))!=null) { 
		v=args[i+2];
    	if (obj.style) { 
			obj=obj.style; 
			v=(v=='show')?'visible':(v='hide')?'hidden':v; 
		}
    obj.visibility=v; 
	}
}


function changeColor(obj,num){
	if(num==1){
		obj.style.backgroundColor='#E7DCB6'
	}
	else{
		obj.style.backgroundColor='#F2E9CA'
	}
}

function hideElement(elmID)
{
	/*
	var logoHeight=document.all["logo"].offsetHeight;
	var menuX=thisMenu.offsetParent.offsetParent.offsetLeft+thisMenu.offsetLeft+246+document.all["MainTB"].offsetLeft
	var menuY=thisMenu.offsetParent.offsetTop+thisMenu.offsetHeight+logoHeight
	for (i = 0; i < document.all.tags(elmID).length; i++)
	{
		
		obj = document.all.tags(elmID)[i];
		
		if (! obj || ! obj.offsetParent){
			alert("not")
			continue;
			}

		// Find the element's offsetTop and offsetLeft relative to the BODY tag.
		objLeft   = obj.offsetLeft;
		objTop    = obj.offsetTop;
		objWidth  = obj.offsetWidth;
		objParent = obj.offsetParent;
		
		while (objParent.tagName.toUpperCase() != "BODY")
		{
			objLeft  += objParent.offsetLeft;
			objTop   += objParent.offsetTop;
			objParent = objParent.offsetParent;
		}
		// Adjust the element's offsetTop relative to the dropdown menu
		
		//alert((objLeft+"-"+menuY))
		if (((Math.abs(objLeft-menuX))<objWidth)&&(objTop-menuY<=0))
			a=1;
			//obj.style.visibility = "hidden";
	}
	*/
}

function showElement(elmID)
{
	var menuX=thisMenu.offsetParent.offsetParent.offsetLeft
	var menuWidth=thisMenu.offsetWidth
	for (i = 0; i < document.all.tags(elmID).length; i++)
	{
		
		obj = document.all.tags(elmID)[i];
		
		if (! obj || ! obj.offsetParent){
			alert("not")
			continue;
			}

		// Find the element's offsetTop and offsetLeft relative to the BODY tag.
		objLeft   = obj.offsetLeft;
		objTop    = obj.offsetTop;
		objWidth  = obj.offsetWidth;
		objParent = obj.offsetParent;
		
		while (objParent.tagName.toUpperCase() != "BODY")
		{
			objLeft  += objParent.offsetLeft;
			objTop   += objParent.offsetTop;
			objParent = objParent.offsetParent;
		}
		// Adjust the element's offsetTop relative to the dropdown menu
		
		//alert(objLeft-menuX+","+objWidth)
		if (objLeft-menuX<objWidth)
			obj.style.visibility = "visible";
	}
}


//-->

