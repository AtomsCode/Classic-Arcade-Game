// Enemy receive x axis , y axis and speed
let Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/enemy-bug.png';
};

// Make Enemy show again when reach end of left bored
// also check for Collision when it happend
Enemy.prototype.update = function(dt) {
  this.x += this.speed * dt;
  if (this.x >= 505) {
    this.x = 0;
  }
  checkCollision(this);
};

Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// player receive x axis , y axis and speed
let Player = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/char-princess-girl.png';
};

Player.prototype.update = function() {}


Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//handle arrow press
Player.prototype.handleInput = function(keyPress) {
  if (keyPress == 'left') {
    player.x -= player.speed + 50;
  }
  if (keyPress == 'up') {
    player.y -= player.speed + 40;
  }
  if (keyPress == 'right') {
    player.x += player.speed + 50;
  }
  if (keyPress == 'down') {
    player.y += player.speed + 40;
  }

};
// Called from line 16 for Collision
let checkCollision = function(Enemy) {
  if (
    player.y + 131 >= Enemy.y + 90 && player.x + 25 <= Enemy.x + 88 &&
    player.y + 73 <= Enemy.y + 135 && player.x + 76 >= Enemy.x + 11) {
    alert("You got attacked by bug");
    player.x = 202.5;
    player.y = 383;
  }
  // if player reach the goal do this
  if (player.y + 63 <= 0) {
    player.x = 202.5;
    player.y = 383;
    win += 1;
    alert("you pass #" + win);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, 505, 171);
  }

  //make sure player doesn't go outside the game lol ^_^
  if (player.y > 383) {
    player.y = 383;
  }
  if (player.x > 402.5) {
    player.x = 402.5;
  }
  if (player.x < 2.5) {
    player.x = 2.5;
  }
};

// Declaration and init
let enemy = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256);
let enemy2 = new Enemy(0, Math.random() * 184 + 50, Math.random() * 256);
let win = 0;
let player = new Player(202.5, 383, 50);
let allEnemies = [];
allEnemies.push(enemy, enemy2);

document.addEventListener('keyup', function(e) {
  let allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
