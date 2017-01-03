var currentOver;
var prevVisible=null;
var DissapearDelay=510;
var CloseTmr=null;
var Flag=0;
var tp=0
var Lft=0
var DivObj;
var iChunkDelay = 10;
var iChunkStep = 15;
iChunk=100


function findObjj(objName,DivName){
	Flag=1
	var obj=eval("document.all['"+objName+"']")
	var DivObj=eval("document.all['"+DivName+"']")
	if (prevVisible!=null) 
		if(prevVisible!=obj){
			prevVisible.style.visibility='hidden';}
			
	prevVisible=DivObj //****** Prev Div
	getTop(obj)
	getLeft(obj)
	DivObj.style.left=Lft-75;
	DivObj.style.top=tp;
	iChunk=100
	
	DivObj.style.visibility='visible';
	showMenu(DivObj)
	
	Lft=0
	//tp=-20
}



function findObj(objName,DivName){
	Flag=1
	var obj=eval("document.all['"+objName+"']")
	var DivObj=eval("document.all['"+DivName+"']")
	if (prevVisible!=null) 
		if(prevVisible!=obj){
			prevVisible.style.visibility='hidden';}
			
	prevVisible=DivObj //****** Prev Div
	getTop(obj)
	getLeft(obj)
	DivObj.style.left=Lft-75;
	DivObj.style.top=tp;
	iChunk=100
	DivObj.style.visibility='visible';
	showMenu(DivObj)
	
	Lft=0
	tp=0
}
function GetShowStyle() {
		//alert()
		 //return "rect(0 100% " + iChunk + "% 0)";
	}
	
function showMenu(DivObj){
	DivObj.style.clip="rect(0 100% 100% "+iChunk+"%)"
		 iChunk -=3
      if (iChunk >= -4) {
         iTimerID = window.setTimeout("showMenu(" + DivObj.id + "),1000")
		
      }
      else {
         window.clearTimeout(iTimerID)
      }
}


function setCurrnt(obj){
	Flag=1
	currentOver=obj;
	clearTimeout(CloseTmr);
}
function getLeft(obj){
	if (obj) {Lft=Lft+obj.offsetLeft;getLeft(obj.offsetParent);}
}
function getTop(obj){
	if (obj) {tp=tp+obj.offsetTop;getTop(obj.offsetParent);}
}
function hideDiv(objDiv){
	Flag=0;
	currentOver=null;
	CloseTmr=setTimeout('checkLayer('+objDiv+')',DissapearDelay)
}

//--------------- Functions that triggers up on 'onmouseout' action hide layers if cursor out ----' 
function hideall(objDiv){
	Flag=0;
	CloseTmrH=setTimeout('checkAll()',DissapearDelay)
}
function checkAll(){
	
	if(Flag==0&&prevVisible) prevVisible.style.visibility='hidden';
	clearTimeout(CloseTmr);
}
//------------------------------------------------------------------------------------------------'
function checkLayer(currDiv){
	if (currentOver==null){
		currDiv.style.visibility='hidden'
		prevVisible=null
		}
	clearTimeout(CloseTmr);
}
function checkOut(DivName){
	var obj=eval("document.all['"+DivName+"']")
	if(prevVisible==obj) prevVisible.style.visibility='hidden';
}