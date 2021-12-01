var canvas;
var context;

//create an instance of the Ship class

//the coordinates in this instance will pass into the _x and _y in the ship file


var ship = new Ship(100, 100);

//evaluate math lower in the program to see how these numbers will impact movement
//for moving shapes friction of .85 and power of 2 seem to work pretty well on average

var friction = .85;  

ship.power = 2;

var count = 100;

//the higher the gravity number, the faster the object will fall
gravity = .2;

//creating a new array to contain the particles
//because we're playing a game and trying to destroy particles,
//we'll put fewer the array at a time so that there are fewer to hit

var asteroids = new Array();

//var amount is going to be used in the array instead of a maximum like 100

var amount = 30;


window.onload = function()

{

	canvas = document.getElementById("etchasketch");
	context = canvas.getContext("2d");

	//generating amount (10) new particles and storing them in the array 0-amount minus - 1
	//each iteration generates a new series of properties of x, y, velocity, radius, etc.

	for(var i = 0; i < amount; i++)

	{
		var x = canvas.width + Math.random() * canvas.width;
		var y = Math.random() * canvas.height;

		//going left which is negative
		var vx = -5;
		//no movement down the screen.  Particles are only moving from right to left
		var vy = 0;
		
		//generating a variety of particle sizes
		
		var radius = Math.random() * 50 + 10;	

		//taking these properties that have been generated and passing them through to the particles class creating a new particle
		asteroids[i] = new Particle(x, y, vx, vy, radius);

	}
	
	
	var interval = setInterval ("animate()", 1000/30);



}

//Timer
    var timeleft = 0;
    var downloadTimer = setInterval(function(){
    timeleft++;
    document.getElementById("countdowntimer").textContent = timeleft;
	//pause at 0 health
    if(count == 0)
        clearInterval(downloadTimer);
    },1000);

	
function animate ()
{

//starting in upper left corner (0,0) it clears the entire canvas to its height and width
//it clears the screen every time the animation function is called and then redraws the ship and asteroids at their new location

	context.clearRect(0,0,canvas.width, canvas.height);

	



	
	if(right == true)

	{
		//power is how hard are you stepping on the gas

		ship.vx += ship.ax * ship.power;
	}
	
	if(left == true)
	{
		//negative acceleration is to go in the left direction 

		ship.vx += ship.ax * -ship.power;
		
	}
	
	if(up == true)
	{
		ship.vy += -ship.ay * 1.5 * ship.power;
	}
	
	if(down == true)
	{
		ship.vy += ship.ay * ship.power;
		
	}
	
	
	if (ship.x > canvas.width)
{
	ship.x = canvas.width;
}

if (ship.x < canvas.width - 800)
{
	ship.x = canvas.width - 800;
}

if (ship.y > canvas.height )
{
	ship.y = canvas.width ;
}

if (ship.y < canvas.width - 800)
{
	ship.y = canvas.width - 800;
}




	ship.vx *= friction;
	ship.vy *= friction;

	ship.vy += gravity;

	ship.x += ship.vx;
	ship.y += ship.vy;

	ship.draw();

	for(var i = 0; i < amount; i++)

	{

		asteroids[i].move();
		asteroids[i].draw();

		//if this collision function has a true value will increment count and remove particle

		//if not, it won't

		if (asteroids[i].collision(ship))

			{
				//if it is true, the counting variable increments
				//and the particle clears the screen and returns to startX
				
				count=count-10;
				asteroids[i].x = asteroids[i].startX;

			
			}
	}
	///////////
	if(count == 0)
		{
			context.fillStyle = "#FF0000";
			context.font = "70px Impact";
			context.fillText ("Game Over", canvas.width/2, canvas.height/2);	
	

	}
		else if (count < 0)
		{
		count =0;
		}
	//printing to screen in color 00ffff
	
	context.fillStyle = "#FF0000";
	
	//printing to screen in 20px font of Georgia
	
	context.font = "20px Impact";
	
	//print the string "Score" to screen beginning at x= 10 and y = 90
	
	context.fillText ("Health =", 10, 70);
	
	//right after the string "Score", print the contents of the count variable
	//which increments each time that there is a collision
	//if no collision has taken place, the collision function returns a value
	//of false and the counting variable does not increment
	
	context.fillText(count, 88, 70);
	context.fillText("%",118, 70);

}
