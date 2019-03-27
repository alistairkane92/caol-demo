import React, { Component } from 'react';
import DataList from './components/DataList';
import caol from 'caol'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    const text = event.target.text.value;
    const key = event.target.key.value;

    caol.set({ [key]: text }, 'StoreID')
  }

  componentDidMount() {
    caol.connect(() => {});

    caol.get('StoreID', (fetchedStuff) => {
      this.setState(prevState => ({ data: [fetchedStuff] }))
    })

    caol.on('StoreID', (data) => {
      console.log('on trigger', data);
      this.setState(prevState => ({ data: [...prevState.data, data] }))
    })
  }

  render() {
    return (
      <div>
      <h1>Caol demo</h1>
      <form action="submit" onSubmit={this.handleSubmit}>
      <input type="text" name='key' placeholder='Key'/>
      <input type="text" name='text' placeholder='Content'/>
      <button type="submit">Submit stuff to Caol</button>
      <DataList data={this.state.data} />
      <p>Once submitted, try refreshing the page. Is your stuff still there?</p>
      </form>
      </div>
    )
  }
}

export default App;
