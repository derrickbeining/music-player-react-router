import React from 'react';
import axios from 'axios';
import Songs from './Songs';
import AllAlbums from './AllAlbums';
import {NavLink, Link, Route} from 'react-router-dom';

export default class SingleArtist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: {},
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
      .then(([ artistData, albumsData, songsData ]) => {
        return [ artistData.data, albumsData.data, songsData.data ];
      })
      .then(([ artist, albums, songs ]) => {
        this.setState({artist, albums, songs});
      })
  }

  render () {
    const match = this.props.match;
    return (

      <div>
        <h3>{this.state.artist.name}</h3>
        <ul className="nav nav-tabs">
          <li><NavLink to={`${match.url}/albums`} activeClassName="active-tab">ALBUMS</NavLink></li>
          <li><NavLink to={`${match.url}/songs`} activeClassName="active-tab" >SONGS</NavLink></li>
        </ul>
        <Route path={`${match.url}/albums`} render={() => <AllAlbums albums={this.state.albums} />} />
        <Route path={`${match.url}/songs`} render={() => <Songs songs={this.state.songs} />} />
      </div>

    )
  }
}
