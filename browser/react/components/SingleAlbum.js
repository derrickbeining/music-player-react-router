import React, {Component} from 'react';
import Songs from '../components/Songs';
import axios from 'axios';

const fakeAlbum = {
  name: 'Yellow Submarine',
  id: 2,
  imageUrl: 'http://fillmurray.com/300/300',
  songs: [
    {
      id: 4,
      name: 'London Calling',
      artists: [
        {name: 'Bill'}
      ],
      genre: 'Punk',
      audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
    }
  ]
};

export default class SingleAlbum extends Component {
  constructor() {
    super();
    this.state = {
      selectedAlbum: {}
    }
  }

  componentDidMount () {
    axios.get(`api/albums/${this.props.match.params.albumId}`)
      .then(response => {
        this.setState({selectedAlbum: response.data})
      })
      .catch(console.error.bind(console))
  }
  render () {
    const album = this.state.selectedAlbum;
    return (
      <div className="album">
        <div>
          <h3>{album.name} <a className="btn btn-default" href="mailto:bestbud@someEmail.com">
            <span className="glyphicon glyphicon-share-alt"></span>
          </a>
          </h3>
          <img src={album.imageUrl} className="img-thumbnail" />
        </div >
        <Songs songs={album.songs} />
      </div >
    );
  }
}
