import React from 'react'
import { browserHistory } from 'react-router'

// Components
import PhotosFrame from './PhotosFrame'
import FilterFrame from './FilterFrame'
import PaginationFrame from './PaginationFrame'

// Fake API response
import * as Photos from '../photos.js'

class App extends React.Component {
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

  resetPagination () {
    const path = '/1'
    browserHistory.push(path)
  }

  filterBy (field, value) {
    if (field === 'Filter') {
      this.setState({selectedFilter: value}, () => {
        this.resetPagination()
      })
    } else {
      this.setState({selectedTag: value}, () => {
        this.resetPagination()
      })
    }
  }

  filterPhotos () {
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
    const pageNumber = this.props.params.pageNumber
    const startIndex = pageNumber * 12 - 12
    const filteredPhotos = this.filterPhotos()
    const pagePhotos = filteredPhotos.slice(startIndex, startIndex + 12)

    return (
      <div id="app">
        <h1>Photo Gallery</h1>
        <FilterFrame
          filters={this.state.filters}
          selectedFilter={this.state.selectedFilter}
          tags={this.state.tags}
          selectedTag={this.state.selectedTag}
          filterBy={this.filterBy} />
        <PaginationFrame
          pageCount={Math.ceil(filteredPhotos.length / 12)}
          pageNumber={pageNumber} />
        <PhotosFrame photos={pagePhotos} />
      </div>
    );
  }
}

export default App
