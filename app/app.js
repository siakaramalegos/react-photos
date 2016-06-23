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
      selectedFilter: '',
      selectedTag: ''
    }
  }

  filterBy (field, value) {
    if (field === 'Filter') {
      this.setState({selectedFilter: value})
    } else {
      this.setState({tagFilter: value})
    }
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
        <PhotosFrame photos={this.state.photos} />
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
