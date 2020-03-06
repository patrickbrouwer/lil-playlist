import React, { Component } from "react";
import Header from "./Header";
import SongForm from "./SongForm";
import SongList from "./SongList";
import SongHeader from "./SongHeader";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      playList: [
        {
          id: "",
          song: "",
          artist: "",
          genre: "",
          rating: ""
        }
      ]
    };
  }

  render() {
    const addSong = song => {
      this.setState({ playList: this.state.playList.concat(song) });
    };
    return (
      <div className={"song-overview"}>
        <Header />
        <SongForm
          addSong={addSong}
          handleChangeSong={this.handleChangeSong}
          handleChangeArtist={this.handleChangeArtist}
        />
        <SongHeader />
        <SongList playList={this.state.playList} />
      </div>
    );
  }
}
export default SongOverview;
