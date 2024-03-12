import { EventBus } from "../EventBus";
import { Scene } from "phaser";

export class Game extends Scene {
  //   camera: Phaser.Cameras.Scene2D.Camera;
  groundLayer: Phaser.Tilemaps.TilemapLayer | null;
  bushLayer: Phaser.Tilemaps.TilemapLayer | null;
  rockLayer: Phaser.Tilemaps.TilemapLayer | null;
  gameText: Phaser.GameObjects.Text;

  constructor() {
    super("Game");
  }

  create() {
    // this.camera = this.cameras.main;
    // this.camera.setBackgroundColor(0x00ff00);

    const map = this.make.tilemap({
      key: "map",
      tileWidth: 64,
      tileHeight: 64,
    });
    const tileset = map.addTilesetImage("towerDefense_tilesheet", "tiles");
    if (tileset) {
      this.groundLayer = map.createLayer("Ground", tileset, 0, 0);
      this.groundLayer?.setScale(0.705);
      this.bushLayer = map.createLayer("Bush", tileset, 0, 0);
      this.bushLayer?.setScale(0.705);
      this.rockLayer = map.createLayer("Rocks", tileset, 0, 0);
      this.rockLayer?.setScale(0.705);
    }

    EventBus.emit("current-scene-ready", this);
  }

  changeScene() {
    this.scene.start("GameOver");
  }
}
