class Player {
  constructor({ position, collisionBlocks }) {
   this.position = position;
   this.velocity = {
      x: 0,
      y: 1,
    };
    this.width = 100;
    this.height = 100;
    this.collisionBlocks = collisionBlocks;
  }

  draw() {
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();
    
    this.position.x += this.velocity.x;
    this.applyGravity();
    this.checkForVerticalCollisions();
  }

  applyGravity() {
    this.position.y += this.velocity.y;

    if (this.position.y + this.height + this.velocity.y < canvas.height) {  
       this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    }
  }

  checkForVerticalCollisions() {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      // look for bottom of player and top of collision block
      const collisionBlock = this.collisionBlocks[i];

      if (collsision({ object1: this, object2: collisionBlock })) {
        if (this.velocity.y > 0) {
          this.velocity.y = 0;
        }
      }
    }
  }
}

