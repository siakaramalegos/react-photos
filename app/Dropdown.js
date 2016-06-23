import React from 'react';

class Dropdown extends React.Component {
  render () {
    var options = this.props.options,
        name = this.props.name;

    var renderedOptions = options.map(function(option){
      return (<option key={option} value={option}>{option}</option>)
    });

    return (
      <div id={"dropdown-" + name} className="form-group">
        <label>{name}</label>
        <select className="form-control" value={this.props.value}>
          {renderedOptions}
        </select>
      </div>
    );
  }
}

export default Dropdown;
