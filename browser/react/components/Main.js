import React, {Component} from 'react';
import AllAlbums from './AllAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists'
import {HashRouter as Router, Route} from 'react-router-dom';


export default class Main extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Router>
        <div id="main" className="container-fluid">
          <div className="col-xs-2">
            <Sidebar />
          </div>
          <div className="col-xs-10">
            <Route exact path="/" component={AllAlbums} />
            <Route exact path="/albums" component={AllAlbums} />
            <Route path="/albums/:albumId" component={SingleAlbum} />
            <Route path="/artists" component={AllArtists} />
          </div>
          <Player />
        </div>
      </Router>
    );
  }
}
