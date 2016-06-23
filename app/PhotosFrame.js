import React from 'react';
import Photo from './Photo.js';

class PhotosFrame extends React.Component {
  render () {
    var photos = this.props.photos;
    var renderedPhotos = photos.map(function(photo){
      return <Photo photo={photo} key={photo.id} />;
    });

    return (
      <div id="photos-frame">
        {renderedPhotos}
      </div>
    );
  }
}

export default PhotosFrame;
