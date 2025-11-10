import { useEffect, useMemo, useState } from 'react';
import './App.css';
import CreateCharacter from './components/CreateCharacter/CreateCharacter';
import FightScene from './components/FIghtScene/FightScene';
import MainScene from './components/MainScene/MainScene';
import { useAppSelector } from './store/store';
import Locations from './components/locations/Locations';
import ExplorationScene from './components/locations/ExplorationScene/ExplorationScene';
import Shop from './components/shop/Shop';
import ChestScene from './components/locations/ChestScene/ChestScene';
import DialogScene from './components/locations/DialogScene/DialogScene';
import { mainMusic } from './mechanics/sounds/sound';
import WalletModal from './components/WalletModal';

function App() {
  const scene = useAppSelector(state => state.SceneReducer.scene);
  const [showWalletModal, setShowWalletModal] = useState(false);

  useEffect(() => {
    mainMusic();
  }, []);

  const getScene = useMemo(() => {
    switch (scene) {
      case "create":
        return <CreateCharacter />;
      case "main":
        return <MainScene />;
      case "fight":
        return <FightScene />;
      case "Locations":
        return <Locations />;
      case "shop":
        return <Shop />;
      case "explore":
        return <ExplorationScene />;
      case "chest":
        return <ChestScene />;
      case "dialog":
        return <DialogScene />;
      default:
        return <MainScene />;
    }
  }, [scene]);

  return (
    <div className="App">
      <button
        onClick={() => setShowWalletModal(true)}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          background: 'rgba(255,255,255,0.15)',
          border: '1px solid rgba(255,255,255,0.3)',
          color: 'white',
          padding: '10px 16px',
          borderRadius: '8px',
          cursor: 'pointer',
          backdropFilter: 'blur(4px)',
        }}
      >
        Connect Wallet
      </button>

      {getScene}

      <WalletModal isOpen={showWalletModal} onClose={() => setShowWalletModal(false)} />
    </div>
  );
}

export default App;
