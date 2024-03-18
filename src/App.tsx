import { useRef } from "react";
import { IRefPhaserGame, PhaserGame } from "./game/PhaserGame";
import { MainMenu } from "./game/scenes/MainMenu";

function App() {
  const phaserRef = useRef<IRefPhaserGame>(null);

  const changeScene = () => {
    if (phaserRef.current) {
      const scene = phaserRef.current.scene as MainMenu;

      if (scene) {
        scene.changeScene();
      }
    }
  };

  // Event emitted from the PhaserGame component
  const currentScene = (scene: Phaser.Scene) => {
    console.log(scene.scene.key);
  };
  return (
    <>
      <div id='app'>
        <PhaserGame ref={phaserRef} currentActiveScene={currentScene} />
          <div>
            <button className='button' onClick={changeScene}>
              Change Scene
            </button>
          </div>
      </div>
    </>
  );
}

export default App;
