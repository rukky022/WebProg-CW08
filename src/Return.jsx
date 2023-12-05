import React, { Component } from 'react';
import Counter from './Counter';
import FilteredList from './FilteredList';

class Return extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "/",
      produce: this.props.item,
      comp: null,
    };
  }

  changePage = (event) => {
    console.log(event.target.value);
    this.setState({
      location: event.target.value
    })
    if (event.target.value === "counter") {
      console.log("show 1");
      this.setState({
        comp: <Counter />
      });

    } else if (event.target.value === "filter") {
      console.log("show 2");
      this.setState({
        comp: <FilteredList items={this.state.produce} />
      });
    }
  }

  render(){
    return (
        <div className = "buttonLinks">
         
          <button value="counter" onClick={this.changePage}>See Counter Implementation</button>
          <button value="filter" onClick={this.changePage}>See Filter Implementation</button>

          {this.state.comp}
        </div>
    );
  }
}

export default Return;
