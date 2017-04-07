window.onload = function(){
	var button = document.getElementById("previewButton");
	button.onclick = previewHandler;
};

function previewHandler(){
	var canvas = document.getElementById("tshirtcanvas");
	var context = canvas.getContext("2d");
	fillBackgroundColor(canvas, context);
	var selectObj = document.getElementById("shape");
	var index = selectObj.selectedIndex;
	var shape = selectObj[index].value;
	if (shape === "squares"){
		for(var squares=0; squares <20; squares++){
			drawSquare(canvas, context);
		}
	} else if(shape ==="circles"){
		for(var circles=0; circles<20; circles++){
			drawCircle(canvas,context);
		}
	}
	drawText(canvas, context);
	drawBird(canvas, context);
}
	
function drawSquare(canvas, context){
	var w = Math.floor(Math.random()*40);
	var x = Math.floor(Math.random()*(canvas.width-w));
	var y = Math.floor(Math.random()*(canvas.height-w));
	context.fillStyle = "lightblue";
	context.fillRect(x,y,w,w);
}
	
function fillBackgroundColor(canvas, context){
	var selectObj = document.getElementById("backgroundColor");
	var index = selectObj.selectedIndex;
	var bgColor = selectObj[index].value;
	context.fillStyle = bgColor;
	context.fillRect(0,0,canvas.width,canvas.height);
}
	
function drawCircle(canvas, context){
	var r = Math.floor(Math.random()*40);
	var x = Math.floor(Math.random()*canvas.width);
	var y = Math.floor(Math.random()*canvas.height);
	context.fillStyle = "lightblue";
	context.beginPath();
	context.arc(x,y,r,0,2*Math.PI,true);
	context.fill();
}	

function drawText(canvas, context){
	var selectObj = document.getElementById("foregroundColor");
	var index = selectObj.selectedIndex;
	var fgColor = selectObj[index].value;
	
	context.fillStyle = fgColor;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("I saw this tweet", 20,40);
	
	context.font = "italic 1.2em serif";
	context.fillText("If it's worth tweeting, it's worth putting on a #tweetshirt", 80,100);
	
	context.font = "bold 1em sans-serif";
	context.textAlign = "right";
	context.fillText("and all I got was this lousy t-shirt", canvas.width-20, canvas.height-40);
}

function drawBird(canvas, context){
	var twitterBird = new Image();
	twitterBird.src="twitterbird.png";
	twitterBird.onload = function(){
		context.drawImage(twitterBird,20,120,70,70);
	};
}
	// JavaScript Document