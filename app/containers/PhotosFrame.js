import React from 'react';
import Photo from './Photo.js';

class PhotosFrame extends React.Component {
  render () {
    const pageNumber = this.props.pageNumber
    const allPhotos = this.props.photos
    const startIndex = pageNumber * 12 - 12
    const pagePhotos = allPhotos.slice(startIndex, startIndex + 12)
    var renderedPhotos = pagePhotos.map(function(photo){
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
