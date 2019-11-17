function Node(first, second, third, x, y) {
	var first, second, third;
	var posX = 0; 
	var posY = 0; 
	var name;
	var visited;
	var edgesDrawn;
	var edgesDrawnCount;
	var residue;
	this.first = first; 
	this.second = second; 
	this.third = third; 
	this.name = first.toString() + "," + second.toString() + "," + third.toString();
	this.visited = false;
	this.edgesDrawn = false;
	this.edgesDrawnCount = 0;
	this.posX = x;
	this.posY = y;
	var sum = Math.abs(first-second) + Math.abs(second-third) + Math.abs(third-first); 
	this.residue = sum;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}