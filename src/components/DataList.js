import React, { Component } from 'react';

class DataList extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const createListItemsFromObj = (obj) => {
      const allLis = []

      for (let key in obj){
        allLis.push(<li>{key}: {obj[key]}</li>)
      }

      return allLis;
    }

    const allData = this.props.data.map((obj) => {
      return (
        <ul>
        {createListItemsFromObj(obj)}
        </ul>)
      })

      return (
        <ul>
        {allData}
        </ul>
      );
    }

  }

  export default DataList;
