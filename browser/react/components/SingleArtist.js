import React from 'react';
import axios from 'axios';

export default class SingleArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: '',
      albums: [],
      songs: []
    }
  }

  componentDidMount () {
    const artistId = this.props.match.params.artistId;
    Promise.all([
      axios.get(`/api/artists/${artistId}`),
      axios.get(`/api/artists/${artistId}/albums`),
      axios.get(`/api/artists/${artistId}/songs`)
    ])
      .then(([ artist, albums, songs ]) => {

      })
  }

  render () {
    return (
      <div>
        <h3>ARTIST NAME</h3>
        <h4>ALBUMS</h4>
        <h4>SONGS</h4>
      </div>
    )
  }
}
