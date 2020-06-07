import React, { Component } from 'react';
import Table from './components/Table.jsx';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch('http://localhost:9000/crossref/works')
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          items: data,
        })
      });
  }

  render() {

    var isLoaded = this.state.isLoaded;
    var items = this.state.items;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {
      return (
        <div className="App">
          <Table data={items.message.author} />
        </div>
      )
    }
  }
}

export default App;
