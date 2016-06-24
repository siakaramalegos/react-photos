import React from 'react';
import ReactDOM from 'react-dom';

// Fake API response
import * as Photos from './photos.js';

// Components
import PhotosFrame from './PhotosFrame.js';
import FilterFrame from './FilterFrame.js';

class Main extends React.Component {
  constructor (){
    super();
    this.state = {
      photos: Photos.instagramResponse().data,
      filters: Photos.filterList(),
      tags: Photos.tagList(),
      selectedFilter: 'All',
      selectedTag: 'All'
    }
    this.filterBy = this.filterBy.bind(this);
    this.filterPhotos = this.filterPhotos.bind(this);
  }

  filterBy (field, value) {
    if (field === 'Filter') {
      this.setState({selectedFilter: value})
    } else {
      this.setState({selectedTag: value})
    }
  }

  filterPhotos (){
    var photos = this.state.photos,
        selectedFilter = this.state.selectedFilter,
        selectedTag = this.state.selectedTag;

    // Skip filtering if no selection made
    if (selectedTag !== 'All' || selectedFilter !== 'All'){
      photos = photos.filter(function(photo){
        var filterMatch = false,
            tagMatch = false;

        if (selectedTag === 'All') {
          tagMatch = true;
        } else if (photo.tags) {
          tagMatch = photo.tags.join(' ').indexOf(selectedTag) !== -1;
        }

        if (selectedFilter === 'All'){
          filterMatch = true;
        } else {
          filterMatch = photo.filter === selectedFilter;
        }

        return filterMatch && tagMatch;
      })
    }

    return photos;
  }

  render () {
    return (
      <div id="main">
        <h1>Photo Gallery</h1>
        <FilterFrame
          filters={this.state.filters}
          selectedFilter={this.state.selectedFilter}
          tags={this.state.tags}
          selectedTag={this.state.selectedTag}
          filterBy={this.filterBy} />
        <PhotosFrame photos={this.filterPhotos()} />
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
