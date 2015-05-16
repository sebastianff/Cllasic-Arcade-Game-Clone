// Enemies our player must avoid
"use strict";
var ctx;
var Enemy = function(x,y,z) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x;
    this.y = y;
    this.speed = z;
    this.sprite = "images/enemy-bug.png";
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if(this.x > 505){
        this.x = 1;
    }
};
//Keeps the enemy objects moving
    //resets them when they come
    //to the edge of the screen


// Draw the enemy on the screen, required method for game

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x,y)
{
    this.x = x;
    this.y = y;
    this.sprite = "images/char-boy.png";
};

// Variables applied to each of our instances go here,
// Now instantiate your objectjects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function(dt) {
// You should multiply any movement by the dt parameter
// which will ensure the game runs at the same speed for
// all computers.

    for (var item in allEnemies)
        if( player.x - allEnemies[item].x < distance &&
            allEnemies[item].x - player.x < distance &&
            player.y - allEnemies[item].y < distance &&
            allEnemies[item].y - player.x < distance ||
            player.y < 1 )
            {player.reset();}
            //this part of code checks for collisons
            //the allowed distance from the enemy is defined by distance
};

// This listens for key presses and sends the keys to your
// player.handleInput() method. You don't need to modify this.

Player.prototype.handleInput = function(stroke)
{
    switch(stroke)
    {
        case  "left":
        if (this.x > 0){
            this.x = this.x - playerRangeX;
        }
        break;
        case "right":
         if (this.x < 400){
            this.x = this.x + playerRangeX;
        }
        break;
        case "down":
        if (this.y < 400){
        this.y = this.y + playerRangeY;
        }
        break;
        case "up":
        if (this.y > 0){
        this.y = this.y - playerRangeY;
        }
        break;

    }
    //This part of code reacts to keystrokes
    //the length the player moves is defined by playerRange

};

Player.prototype.reset = function(){
    player.x = 200;player.y =400;//resets the players position when the other side is reached or when coliding with the enemy
}

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

var enemySpeed = 50;//regulates the speed of the enemies
var distance = 75;//regulates the allowed distance from the enemy
var playerRangeX = 100;//regulates the horizontal distance player crosses with each keystroke
var playerRangeY= 83;//regulates the vertical distance player crosses with each keystroke


var allEnemies = [];//stores all of the enemy objects
var player = new Player(10,20);

for (var i = 1;i < 4; i++){
    allEnemies.push(new Enemy(10, 70*i,40*randomNumber()));
}//creates new enemy objects



function randomNumber() {
    var number = Math.floor((Math.random() * 10) + 1);
    return number;
}//createas a random number for the enemy speed