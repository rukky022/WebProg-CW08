import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    //The state is just a list of key/value pairs (like a hashmap)
    this.state = {
      search: "",
      type: "all"
    };
  }

  //Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.trim().toLowerCase()});
  }

  onFilter = (event) => {
    this.setState({type: event});
  }

  filterItem = (item) => {
      if (this.state.type === "all") {
        return item.name.toLowerCase().search(this.state.search) !== -1;
      }
      else {
        return item.name.toLowerCase().search(this.state.search) !== -1 
            && item.type.toLowerCase() === this.state.type;
      }
  }

  render(){
    return (
        <div className = "filter-list">
         
          <div class="controls">
            <DropdownButton class="btn" id='food-type-button' title='Choose Filter' defaultValue={this.state.type} onSelect={this.onFilter}>
              <Dropdown.Item class={"dropOption"} eventKey={'all'}>All</Dropdown.Item>
              <Dropdown.Item class={"dropOption"} eventKey={'fruit'}>Fruits</Dropdown.Item>
              <Dropdown.Item class={"dropOption"} eventKey={'vegetable'}>Vegetables</Dropdown.Item>
            </DropdownButton>
            
            <input type = "text" placeholder = "Search" onChange = {this.onSearch} />
          </div>
          <List items = {this.props.items.filter(this.filterItem)} />
        </div>
    );
  }
}

export default FilteredList;
