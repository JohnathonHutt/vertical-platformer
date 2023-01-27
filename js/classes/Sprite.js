class Sprite {
  constructor({ position, imageSrc }) {
    this.position = position;
    this.image = new Image();
    this.image.onload = () => {
      this.width = this.image.width;
      this.height = this.image.height;

      console.log(this.height, this.width);
    }
    this.image.src = imageSrc;
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



