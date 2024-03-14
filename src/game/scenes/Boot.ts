import { Scene } from "phaser";

export class Boot extends Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.image("titlescreen-bg", "assets/bg/titlescreen.png");
  }

  create() {
    this.scene.start("Preloader");
  }
}
