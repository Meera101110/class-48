var canvas;
var bgImage;
var cat, catImage, cat2Img;
var fish, fishImg;
var powerCoin, powerCoinImg;
var mouse, mouseImg;
var energyImg, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var form, player, playerCount;
var blastImg
var allPlayers;
var pc = [];
var obstacles = [];
var rank
var x, y
var position

function preload() {
  bgImage = loadImage("./assets/background.png");
  catImage = loadImage("../assets/cat.png");
  mouseImg = loadImage("../assets/mouse.png");
  cat2Img = loadImage("../assets/cat2.png");
  fishImg = loadImage("../assets/fish.png");
  powerCoinImg = loadImage("../assets/Coin.png");
  obstacle1Image = loadImage("../assets/wood.png");
  obstacle2Image = loadImage("../assets/rock.png");
  energyImg = loadImage("../assets/energy.png");
  lifeImage = loadImage("../assets/life.png");
  blastImg = loadImage("../assets/blast.png");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(bgImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
