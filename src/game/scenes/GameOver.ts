import { EventBus } from "../EventBus";
import { Scene } from "phaser";

export class GameOver extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  gameOverText: Phaser.GameObjects.Text;

  constructor() {
    super("GameOver");
  }

  create() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(0x000000);
    this.camera.setAlpha(0.7);

    this.gameOverText = this.add
      .text(640, 450, "Game Over", {
        fontFamily: "Abel",
        fontSize: 64,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 2,
        align: "center",
      })
      .setOrigin(0.5)
      .setDepth(100);
    this.gameOverText
      .setInteractive()
      .on(Phaser.Input.Events.POINTER_DOWN, () => {
        this.scene.switch("MainMenu");
      });
    EventBus.emit("current-scene-ready", this);
  }

  changeScene() {
    this.scene.start("MainMenu");
  }
}
