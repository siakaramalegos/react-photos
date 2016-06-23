import React from 'react';
import ReactDOM from 'react-dom';

// Fake API response
import * as Photos from './photos.js';

// Components
import PhotosFrame from './PhotosFrame.js';

class Main extends React.Component {
  constructor (){
    super();
    this.state = {
      photos: Photos.instagramResponse().data
    }
    console.log(this.state.photos[0]);
  }

  render () {
    return (
      <div id="main">
        <h1>Photo Gallery</h1>
        <PhotosFrame photos={this.state.photos} />
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
