import React, { Component } from 'react';
import './App.css';
import YSearch from 'youtube-api-search';

import Header from './components/Header/Header';

const YOUTUBE_API_KEY = 'AIzaSyC4Zaowu05ZczH-jEwAhIs3iU1JrgKRNk8'

class App extends Component {

  state = { videos: [] }

  componentDidMount(){
    YSearch({ key: YOUTUBE_API_KEY, term: '猫　きゅうり'}, (data) => {
 　    this.setState({ videos: data })
　  });
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
