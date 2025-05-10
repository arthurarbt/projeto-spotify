import React from "react";
import SongItem from "../SongItem";
import { useState } from "react";

function SongList({ songsArray }) {
  const [items, setItems] = useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((value, index) => index < items)
        .map((valueSongObj, index) => (
          <SongItem {...valueSongObj} key={index} index={index} />
        ))}
      <p
        className="song-list__see-more"
        onClick={() => {setItems(items + 5)}}
      >
        Ver mais
      </p>
    </div>
  );
}

export default SongList;
