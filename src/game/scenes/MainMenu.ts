import { GameObjects, Scene } from "phaser";

import { EventBus } from "../EventBus";

export class MainMenu extends Scene {
  background: GameObjects.Image;
  title: GameObjects.Text;

  constructor() {
    super("MainMenu");
  }

  create() {
    const { width, height } = this.scale;
    this.background = this.add
      .image(width / 2, height / 2, "titlescreen-bg")
      .setDepth(100);

    this.title = this.add
      .text(width / 2, height / 3, "CAT TOWER DEFENSE", {
        fontFamily: "Abel",
        fontSize: 100,
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 3,
        align: "center",
      })
      .setOrigin(0.5)
      .setDepth(100);

    EventBus.emit("current-scene-ready", this);
  }

  changeScene() {
    this.scene.start("Game");
  }
}
