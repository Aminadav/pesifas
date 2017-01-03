function highlightRow(oDiv) {
	oDiv.className = oDiv.className + "Over"
}

function showNodes(oDiv) {
	if (oDiv.children[1]) {
		oDiv.children[1].style.offsetTop = oDiv.children[0].offsetTop;
		oDiv.children[1].style.pixelLeft = oDiv.children[0].offsetLeft - oDiv.children[1].offsetWidth;
		oDiv.children[1].style.visibility = "visible";
	}
}

function showFirstNode(oDiv) {
	if (oDiv.children[1]) {
		oDiv.children[1].style.pixelTop = oDiv.children[0].offsetTop + oDiv.children[0].offsetHeight;
		oDiv.children[1].style.pixelLeft = oDiv.children[0].offsetLeft - (oDiv.children[1].offsetWidth-oDiv.children[0].offsetWidth);
		oDiv.children[1].style.visibility = "visible";
	}
}

function hideNodes(oDiv) {
	if (oDiv.children[1])
		oDiv.children[1].style.visibility = "hidden";
		oDiv.children[1].style.pixelTop = -500;
		oDiv.children[1].style.pixelLeft = -500;
}

function turnOffRow(oRow) {
	oRow.className = oRow.className.substr(0,oRow.className.length-4)
}