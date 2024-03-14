import { GameObjects, Scene } from "phaser";
import ShopMenu from "../containers/ShopMenu";

export class UI extends Scene {
  shopMenu: ShopMenu;
  expandButton: GameObjects.Image;
  expandTween: Phaser.Tweens.Tween | null;
  minimiseButton: GameObjects.Image;
  minimiseTween: Phaser.Tweens.Tween | null;

  constructor() {
    super("UI");
  }

  create() {
    const { height } = this.scale;
    this.shopMenu = new ShopMenu(this);

    this.minimiseButton = this.add.image(50, 0, "up-icon");
    this.minimiseButton.setDisplaySize(70, 70);
    this.minimiseButton.visible = false;
    this.minimiseButton
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
        this.minimiseButton.setTint(0xe0e0e0);
      })
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
        this.minimiseButton.setTint(0xffffff);
      })
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
        this.minimiseTween = this.tweens.add({
          targets: this.minimiseButton,
          y: -height * 0.125,
          duration: 300,
          ease: Phaser.Math.Easing.Sine.InOut,
        });
        this.shopMenu.hide();
        this.expandButton.visible = true;
      });

    this.expandButton = this.add.image(50, 50, "shop-icon");
    this.expandButton.setDisplaySize(70, 70);
    this.expandButton
      .setInteractive()
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
        this.expandButton.setTint(0xe0e0e0);
      })
      .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
        this.expandButton.setTint(0xffffff);
      })
      .on(Phaser.Input.Events.POINTER_UP, () => {
        this.shopMenu.show();

        this.expandTween = this.tweens.add({
          targets: this.minimiseButton,
          y: height * 0.25,
          duration: 300,
          ease: Phaser.Math.Easing.Sine.Out,
        });
        this.expandButton.visible = false;
        this.minimiseButton.visible = true;
      })
      .on(Phaser.Input.Events.POINTER_UP_OUTSIDE, () => {
        this.shopMenu.hide();
        this.expandButton.visible = true;
      });
  }

  changeScene() {
    if (this.expandTween) {
      this.expandTween.stop();
      this.expandTween = null;
      this.expandButton.visible = false;
    }
    if (this.minimiseTween) {
      this.minimiseTween.stop();
      this.minimiseTween = null;
      this.minimiseButton.visible = false;
    }

    this.scene.start("GameOver");
  }
}
