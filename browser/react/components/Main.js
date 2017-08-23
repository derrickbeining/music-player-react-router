import React, {Component} from 'react';
import AllAlbums from './AllAlbums';
import StatefulAlbums from './StatefulAlbums';
import SingleAlbum from './SingleAlbum';
import Sidebar from './Sidebar';
import Player from './Player';
import AllArtists from './AllArtists';
import SingleArtist from './SingleArtist';
import NotFound from './NotFound';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';


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
            <Switch>
              <Route exact path="/" component={StatefulAlbums} />
              <Route exact path="/albums" component={StatefulAlbums} />
              <Route path="/albums/:albumId" component={SingleAlbum} />
              <Route exact path="/artists" component={AllArtists} />
              <Route path="/artists/:artistId" component={SingleArtist} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Player />
        </div>
      </Router>
    );
  }
}
