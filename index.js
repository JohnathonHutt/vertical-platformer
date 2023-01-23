const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const scaledCanvas = {
  width: canvas.width / 4,
  height: canvas.height / 4, 
};
const floorCollisions2D = [];
for (let i = 0; i < floorCollisions.length; i += 36) {
  floorCollisions2D.push(floorCollisions.slice(i, i + 36));
}

console.log(floorCollisions, platformCollisions);

const platformCollisions2D = [];
for (let i = 0; i < platformCollisions.length; i += 36) {
  platformCollisions2D.push(platformCollisions.slice(i, i + 36));
}

// todo refactor to use for of
const collisionBlocks = [];
floorCollisions2D.forEach((row, y) => {
  row.forEach((symbol, x) => {
    if (symbol === 202) {
      collisionBlocks.push(
         new CollisionBlock({
           position: {
            x: x * 16,
            y: y * 16,
          }
        })
      )
    }
  });
});


const platformBlocks = [];
platformCollisions2D.forEach((row, y) => {
  row.forEach((symbol, x) => {{
    if (symbol === 202) {
      platformBlocks.push(
        new CollisionBlock({
          position: {
            x: x * 16,
            y: y * 16,
          }
        })
      )
    }
  }})
});


const gravity = 0.5;
 
const player = new Player({
  x: 0,
  y: 0,
});
const player2 = new Player({
  x: 300,
  y: 100,
});

const keys = {
  ArrowLeft: {
    pressed: false,
  },
  ArrowRight: {
    pressed: false,
  }
}


const tileMapImg = new Image();
tileMapImg.src = './images/mario_tile_map.png';
const tiles = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  image: tileMapImg,
});


const backgroundImg = new Image();
backgroundImg.src = './images/background.png';
const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  image: backgroundImg,
});


function animate() {
  window.requestAnimationFrame(animate);
  c.fillStyle = 'white';
  c.fillRect(0, 0, canvas.width, canvas.height);

  // background.update()
  c.save();
  c.scale(4, 4);
  c.translate(0, -background.image.height + scaledCanvas.height);
  background.update();
  collisionBlocks.forEach((collisionBlock) => {
    collisionBlock.update();
  });
  platformBlocks.forEach((platformBlock) => {
    platformBlock.update();
  });
  c.restore();

  player.update();
  player2.update();

  player.velocity.x = 0;
  if (keys.ArrowRight.pressed) {
    player.velocity.x = 1;
  } else if (keys.ArrowLeft.pressed) {
    player.velocity.x = -1;
  }
}

animate();


window.addEventListener('keydown', () => {
  switch (event.key) {
    case 'ArrowDown':
      
      break;

    case 'ArrowUp':
      player.velocity.y = -20;

      break;
    case 'ArrowLeft':
      keys.ArrowLeft.pressed = true;

      break;
    case 'ArrowRight':
      keys.ArrowRight.pressed = true;

      break;
    default:
      break;
  }

  console.log(event.key);
});

window.addEventListener('keyup', () => {
  switch (event.key) {
    case 'ArrowDown':
      
      break;

    case 'ArrowLeft':
      keys.ArrowLeft.pressed = false;

      break;
    case 'ArrowRight':
      keys.ArrowRight.pressed = false;

      break;
    default:
      break;
  }

  console.log(event.key);
});
