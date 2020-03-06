import React from "react";

const SongHeader = () => {
  return (
    <table class="table" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th scope="col" className="song-row__item">
            Song
          </th>
          <th scope="col" className="song-row__item">
            Artist
          </th>
          <th scope="col" className="song-row__item">
            Genre
          </th>
          <th scope="col" className="song-row__item">
            Rating
          </th>
        </tr>
      </thead>
    </table>
  );
};

export default SongHeader;
