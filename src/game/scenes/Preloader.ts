import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    const { width, height } = this.scale;
    this.add
      .rectangle(width / 2, height / 2, 468, 32)
      .setStrokeStyle(1, 0xffffff);

    const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);

    this.load.on("progress", (progress: number) => {
      //  Update the progress bar (our bar is 464px wide, so 100% = 464px)
      bar.width = width * progress;
    });
  }

  preload() {
    this.load.setPath("assets");
    this.load.image("tiles", "tilesheets/towerDefense_tilesheet.png");
    this.load.tilemapTiledJSON("map", "tilesheets/Level-1.json");
    this.load.image("shop-icon", "icons/shoppingCart.png");
    this.load.image("up-icon", "icons/up.png");
    this.load.image("cat-starter-sprite", "sprites/cat-starter.png");
  }

  create() {
    this.scene.start("MainMenu");
  }
}
