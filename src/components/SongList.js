import React from "react";
import SongListItem from "./SongListItem";

const SongList = props => {
  return (
    <div className={"songlist"}>
      <SongListItem playList={props.playList} />
    </div>
  );
};

export default SongList;
