import React, { Component } from "react";

class SongForm extends Component {
  state = {
    song: "",
    artist: "",
    genre: "",
    rating: ""
  };
  constructor(props) {
    super(props);
  }

  render() {
    const handleChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    const handleSubmit = event => {
      event.preventDefault();
      this.props.addSong(this.state);

      this.setState({
        song: "",
        artist: "",
        genre: "",
        rating: ""
      });
    };
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="song"
          placeholder="Song"
          value={this.state.song}
          onChange={handleChange}
        />
        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={this.state.artist}
          onChange={handleChange}
        />
        <select value={this.state.genre} name="genre" onChange={handleChange}>
          <option value="">Select Genre...</option>
          <option value="Rock">Rock</option>
          <option value="Metal">Metal</option>
          <option value="Jazz">Jazz</option>
          <option value="Pop">Pop</option>
          <option value="Punk">Punk</option>
          <option value="Country">Country</option>
        </select>
        <select value={this.state.rating} name="rating" onChange={handleChange}>
          <option value="">Give Rating...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <button className="btn btn-primary">Add Song</button>
        <button className="btn btn-lg btn-outline-danger ml-4">
          Delete Songs
        </button>
      </form>
    );
  }
}

export default SongForm;
