import React from 'react';
import Dropdown from './Dropdown.js';

class FilterFrame extends React.Component {
  render () {
    return (
      <div id="filter-frame">
        <Dropdown
          options={this.props.filters}
          name={'Filter'}
          value={this.props.selectedFilter} />
        <Dropdown
          options={this.props.tags}
          name={'Tag'}
          value={this.props.selectedTag} />
      </div>
    );
  }
}

export default FilterFrame;
