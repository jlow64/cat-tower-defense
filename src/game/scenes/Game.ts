import { EventBus } from "../EventBus";
import { Scene } from "phaser";

export class Game extends Scene {
  groundLayer: Phaser.Tilemaps.TilemapLayer | null;
  bushLayer: Phaser.Tilemaps.TilemapLayer | null;
  rockLayer: Phaser.Tilemaps.TilemapLayer | null;
  gameText: Phaser.GameObjects.Text;

  constructor() {
    super("Game");
  }

  create() {
    const { width, height } = this.scale;
    const map = this.make.tilemap({
      key: "map",
      tileWidth: 64,
      tileHeight: 64,
    });
    const tileset = map.addTilesetImage("towerDefense_tilesheet", "tiles");
    if (tileset) {
      this.groundLayer = map.createLayer("Ground", tileset, 0, 0);
      this.groundLayer?.setDisplaySize(width, height);
      this.bushLayer = map.createLayer("Bush", tileset, 0, 0);
      this.bushLayer?.setDisplaySize(width, height);
      this.rockLayer = map.createLayer("Rocks", tileset, 0, 0);
      this.rockLayer?.setDisplaySize(width, height);
    }
    
    EventBus.emit("current-scene-ready", this);
    
    this.scene.launch("UI");
  }

  changeScene() {
    EventBus.emit("stop-game", true)
    this.scene.start("GameOver");
  }
}
