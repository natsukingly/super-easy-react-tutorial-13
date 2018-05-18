import React, { Component } from 'react';
import './App.css';
import YSearch from 'youtube-api-search';

import Header from './components/Header/Header';
import Body from './components/Body/Body';
import List from './components/Video/List/List';
import Video from './components/Video/Video';


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
        <Body>
          <Video video={this.state.videos[2]} />
          <List videos={this.state.videos} />
        </Body>
      </div>
    );
  }
}

export default App;
