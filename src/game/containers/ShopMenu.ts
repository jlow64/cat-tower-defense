import Phaser from "phaser";
export default class ShopMenu {
  modalActive: boolean;
  scene: Phaser.Scene;
  container: Phaser.GameObjects.Container;

  constructor(scene: Phaser.Scene) {
    this.modalActive = false;
    this.scene = scene;
    const { width, height } = scene.scale;

    this.container = scene.add.container(0, -height * 0.125).setDepth(50);

    const shopTab = scene.add.rectangle(
      0,
      0,
      width * 2,
      height * 0.25,
      0xffffff,
      0.3
    );
    const sprite = scene.add.image(width * 0.1, 0, "cat-starter-sprite");
    sprite
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
        shopTab.setFillStyle(0xe0e0e0, 0.3);
      })
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
        shopTab.setFillStyle(0xffffff, 0.3);
      });
    this.container.add(shopTab);
    this.container.add(sprite);
  }

  show() {
    this.scene.tweens.add({
      targets: this.container,
      y: this.scene.scale.height * 0.125,
      duration: 300,
      ease: Phaser.Math.Easing.Sine.Out,
    });
  }

  hide() {
    this.scene.tweens.add({
      targets: this.container,
      y: -this.scene.scale.height * 0.125,
      duration: 300,
      ease: Phaser.Math.Easing.Sine.InOut,
    });
  }
}
