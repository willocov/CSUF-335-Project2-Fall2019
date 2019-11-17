function checkIfCenterRoom(ctx, node){
	if(node.residue < LowestResidue){
		//Sets node to the current center-most room
		LowestResidue = node.residue;
		LowestResidueCaveName = node.name
		LowestX = node.posX;
		LowestY = node.posY;
		ctx.clearRect(0, 0, can.width, can.height);
		ctx.font = "Bold 14px Arial";
		ctx.fillText("Current Centermost Room:", 10, 50);
		ctx.fillText("------------------------", 10, 60);
		ctx.fillText("Caveroom: " + LowestResidueCaveName, 10, 70); 
		ctx.fillText("Residue: " + LowestResidue, 10, 85);
	}
}

function printFinished(ctx, context){
	ctx.clearRect(0, 0, can.width, can.height);
	ctx.font = "Bold 14px Arial";
	ctx.fillText("Current Centermost Room:", 10, 50);
	ctx.fillText("------------------------", 10, 60);
	ctx.fillText("Caveroom: " + LowestResidueCaveName, 10, 70); 
	ctx.fillText("Residue: " + LowestResidue, 10, 85);
	ctx.fillText("--FINISHED--", 10, 100);

	drawYellowRoom(context, LowestX, LowestY, LowestResidueCaveName);

}