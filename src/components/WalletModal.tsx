import React from 'react';
import { createAppKit } from '@reown/appkit/react'
import './WalletModal.css';
import { networks, projectId, metadata, ethersAdapter } from '../config'

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

createAppKit({
  adapters: [ethersAdapter],
  networks,
  metadata,
  projectId,
  themeMode: 'light',
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  },
  themeVariables: {
    '--w3m-accent': '#000000',
  }
})

const WalletModal: React.FC<WalletModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="wallet-modal-overlay" onClick={onClose}>
      <div className="wallet-modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>Connect Your Wallet</h3>
        <appkit-button/>
      </div>
    </div>
  );
};

export default WalletModal;
