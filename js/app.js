// Enemies our player must avoid
var Enemy = function(x,y,z,c) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
   
    
    this.x = x;
    this.y = y;
    this.speed = z;
    this.sprite = c;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x+this.speed*dt;
    if(this.x>505)
        {this.x=1}
    //Keeps the enemy objects moving
    //resets them when they come
    //to the edge of the screen
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var player = new Enemy(30,80,5,"images/char-boy.png");
    // Variables applied to each of our instances go here,
   
// Now instantiate your objectjects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

player.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

player.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    
};
// This listens for key presses and sends the keys to your
// player.handleInput() method. You don't need to modify this.
player.handleInput = function(stroke)
{   
    switch(stroke)
    {
        case  "left":
        if (this.x - fromWall>0){this.x = this.x-playerRange};
        break;
        case "right":
         if (this.x + fromWall<400){this.x = this.x+playerRange};
        break;
        case "down":
        if (this.y + fromWall<490){this.y = this.y+playerRange};
        break;
        case "up":
        if (this.y - fromWall>0){this.y = this.y-playerRange};
        break;

    };
    
    //This part of code reacts to keystrokes
    //the length the player moves is defined by playerRange
    //and the maximum allowed distance from the edge of the canvas
    //is defined by fromWall
};


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

var enemySpeed = 60;//regulates the speed of the enemies
var distance = 75;//regulates the allowed distance from the enemy
var playerRange = 100;//regulates the distance player crosses with each keystroke
var fromWall = 5;//alowed distance of player from the wall

allEnemies = [];//stores all of the enemy objects

for (i=1;i<4;i++)
{allEnemies.push(
new Enemy(1,70*i,randomNumber()*enemySpeed,"images/enemy-bug.png"))};//creates new enemy objects



function randomNumber() {var number = Math.floor((Math.random() * 10) + 1);
return number;}//createas a random number for the enemy speed





