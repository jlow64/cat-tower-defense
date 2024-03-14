import Phaser from "phaser";
import { Boot } from "./scenes/Boot";
import { Preloader } from "./scenes/Preloader";
import { MainMenu } from "./scenes/MainMenu";
import { GameOver } from "./scenes/GameOver";
import { Game as MainGame } from "./scenes/Game";
import { UI } from "./scenes/UI";
import { Plugin as NineSlicePlugin } from "phaser3-nineslice";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1280,
  height: 900,
  parent: "game-container",
  backgroundColor: "#fff",
  plugins: {
    global: [NineSlicePlugin.DefaultCfg],
  },
  scene: [Boot, Preloader, MainMenu, MainGame, UI, GameOver],
};

const StartGame = (parent: string) => {
  return new Phaser.Game({ ...config, parent: parent });
};

export default StartGame;
