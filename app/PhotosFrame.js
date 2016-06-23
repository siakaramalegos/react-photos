import React from 'react';

class PhotosFrame extends React.Component {
  render () {
    var photos = this.props.photos;
    var renderedPhotos = photos.map(function(photo){
      return (
        <div className="well photo" key={photo.id}>
          <img src={photo.images.low_resolution.url} className="img-responsive" />
        </div>
      );
    });

    return (
      <div id="photos-frame">
        {renderedPhotos}
      </div>
    );
  }
}

export default PhotosFrame;
