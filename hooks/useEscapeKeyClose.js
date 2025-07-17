import React, { useEffect } from 'react';

export const useEscapeKeyClose = (isMenuOpen, toggleMenu) => {
  useEffect(() => {
    const handleKeyPress = (evt) => {
      if (evt.key === 'Escape' && isMenuOpen) {
        toggleMenu();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isMenuOpen, toggleMenu]);
};
