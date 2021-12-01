
function Particle(_x, _y, _vx, _vy, _radius)

{
//these are the attributes:

	this.x = _x;

	this.y = _y;

	this.radius = _radius;

	this.vy = _vy;

	this.vx = _vx;

	this.color = "rgb("+
				  Math.round(Math.random() * 255)+
				  ","+
				   Math.round(Math.random() * 255)+
				  ","+
				   Math.round(Math.random() * 255)+
				  ")";
	

	this.startY = this.y;

	this.startX = this.x;

	//to store the distance from the particle to the ship

	this.distance = 0;


	this.draw = function()
	{

		context.beginPath();

		context.fillStyle= this.color;
				  
		var asteroid = new Image();
		asteroid.src='a.png';
		context.drawImage(asteroid,this.x,this.y,this.radius,this.radius);
		
		context.fill();
		context.closePath();
	
	}

	this.move = function()

	{

		this.y+= this.vy;
		this.x+= this.vx;


		this.reset();





	}

	this.reset = function ()

	{
		if (this.x <= 0)

		{

			this.x = this.startX;

			//this.y = Math.round(Math.random() * canvas.height);

			//a number between 5 and 14 

			//this.radius = Math.random() * 10 + 5;

			//a number between 5 and 19

			//this.vx = -Math.random() * 15 +5;

		}
}
	//_obj is holding the space for the name of the ship

	this.collision = function(_obj)
		{
		
			//Here we need to determine if there is collision.
			//We do this by calculating whether the distance between object A and object B 
			//is less than their combined radii.  If so, they are touching. 
			//So, what we need first is a smaller function that will give us the distance between 
			//the two objects (ship and particle). 

			var dx = _obj.x - this.x;
			var dy = _obj.y - this.y;
			
			//Then we use the Pythagorean theorem to calculated the distance 
			
			this.distance = Math.sqrt (dx * dx + dy * dy);

		//if the distance is less than the radius of the particle, then we have a collision

			if(this.distance < this.radius)

				{
					//we use a boolean return to say that the collision occurred.
					//this boolean will be used in the animation script
					
					return true;

				}

			//if it doesn't collide, it will return a false

			return false;

		}	
}
