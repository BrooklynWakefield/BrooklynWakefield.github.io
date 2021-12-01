//declaring a function called Ship
//_x and _y are placeholder variables
//those values will be determined in the animation file, and then every _x and _y will be replaced with that number



function Ship(_x, _y)
{

//it has the following properties

this.x = _x;
this.y = _y;

//ax and ay are acceleration
this.ax = 1;
this.ay = 1;
this.vx = 0;
this.vy = 0;
this.radians = 0;
this.degrees = 0;
this.power = 1;

//it has the following methods 
//it can move

this.move = function()
{


}

//and it can draw

this.draw = function ()
{
	//saves the current status of the context, so we can use the starting point later

	context.save();

	//takes the point of origin and moves it to the x and y
	
	//this code must be removed in order for the collision function to work

	//context.translate(this.x, this.y);

	//draw black line

	context.strokeStyle = "#000000";

	//begin drawing

	context.beginPath();

	
		var ship = new Image();
		ship.src='ship.gif';
		context.drawImage(ship,this.x,this.y,100,50);
		

	context.closePath();
	context.stroke();


	

}


}
