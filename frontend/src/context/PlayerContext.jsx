import React, { createContext, useState } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [playerState, setPlayerState] = useState({
    currentSong: null,
    isPlaying: false,
  });

  const playSong = (song) => {
    setPlayerState({
      currentSong: song,
      isPlaying: true,
    });
  };

  const togglePlay = () => {
    setPlayerState((prev) => ({
      ...prev,
      isPlaying: !prev.isPlaying,
    }));
  };

  return (
    <PlayerContext.Provider
      value={{ playerState, playSong, togglePlay }}
    >
      {children}
    </PlayerContext.Provider>
  );
};