import React from 'react';

class Dropdown extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: this.props.value
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event) {
    this.setState({value: event.target.value}, function(){
      this.props.filterBy(this.props.name, this.state.value);
    });
  }

  render () {
    var options = this.props.options,
        name = this.props.name;

    var renderedOptions = options.map(function(option){
      return (<option key={option} value={option}>{option}</option>)
    });

    return (
      <div id={"dropdown-" + name} className="form-group">
        <label>{name}</label>
        <select
          className="form-control"
          value={this.state.value}
          onChange={this.handleChange}>
          <option value="All">All {name}s</option>
          {renderedOptions}
        </select>
      </div>
    );
  }
}

export default Dropdown;
