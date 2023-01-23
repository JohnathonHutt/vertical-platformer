class Sprite {
  constructor({ position, image }) {
    this.position = position;
    this.image = image;
  }

  draw() {
    if (!this.image) {
      return;
    }
    c.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    this.draw();
  }
}



