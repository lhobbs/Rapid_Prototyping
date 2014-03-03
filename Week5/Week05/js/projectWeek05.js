
var currentlyHighlighted = 0;

// 37 = Left; 39 = Right;
$(document).ready(function () {
	PaintCells();
	
	$(this).keydown(function(e) {
		 e.preventDefault();
		 console.log("working?");
		 code = e.keyCode || e.which
		 
		 if(code == 37) {
			 MoveLeft();
		 }
		 else if (code == 39) {
			 MoveRight();
		 }
							 
	});
	
});

function PaintCells () {
	
	if(currentlyHighlighted == 0) {
		$(".cellOne").css("background-color", "#f09"); 
		}
	else{
		$(".cellOne").css("background-color", "#fff"); 
		}
						
	if(currentlyHighlighted == 1) {
		$(".cellTwo").css("background-color", "#f09"); 
		}
	else{
		$(".cellTwo").css("background-color", "#fff"); 
		}
	
	if(currentlyHighlighted == 2) {
		$(".cellThree").css("background-color", "#f09"); 
		}
	else{
		$(".cellThree").css("background-color", "#fff"); 
		}
		
	if(currentlyHighlighted == 3) {
		$(".cellFour").css("background-color", "#f09"); }
	else{
		$(".cellFour").css("background-color", "#fff"); }
		
	
}

function MoveLeft () {
	if(currentlyHighlighted > 0) {
		currentlyHighlighted--;
		PaintCells();
	}
}

function MoveRight () {
	if(currentlyHighlighted < 3){
		currentlyHighlighted++;
		PaintCells();
	}
}
