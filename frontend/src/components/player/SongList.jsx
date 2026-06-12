import React, { useContext } from "react";
import { PlayerContext } from "../../context/PlayerContext";
import "../../css/mainArea/SongList.css";

const SongList = ({ songs }) => {
  const { playSong } = useContext(PlayerContext);

  return (
    <div className="songlist-root">
      <div className="songlist-scroll">
        <table className="songlist-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Artist</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {songs.map((song, index) => (
              <tr key={song.id}>
                <td>{index + 1}</td>
                <td>{song.name}</td>
                <td>{song.artist_name}</td>

                <td>
                  <button onClick={() => playSong(song)}>
                    ▶ Play
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default SongList;