import { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";

const SongList = ({ songs }) => {
  const { playSong } = useContext(PlayerContext);

  return (
    <div>
      {songs.map((song) => (
        <div key={song.id}>
          <span>{song.name}</span>

          <button onClick={() => playSong(song)}>
            Play
          </button>
        </div>
      ))}
    </div>
  );
};

export default SongList;