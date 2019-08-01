import React, { Component } from 'react';
import { animateScroll as scroll } from "react-scroll";
import { Embed } from 'semantic-ui-react';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playing: false
    }
  }

  componentDidMount() {
    scroll.scrollToTop();
  }

  toggleVideo = () => {
    this.setState({playing: true})
    scroll.scrollToBottom()
  }

  render () {
    return !this.state.playing ? 
      <>
        <div className='home' style={{display: 'flex', justifyContent: 'center', alignItems: 'center',  background: '#ffed94 '}}>
          <div>
            <h1>To</h1>
            <h1>Mr & Mrs</h1>
            <h1>Rabiego</h1>
            <div style={{textAlign: 'center', marginTop: '2em'}}>
              <i className="far fa-play-circle" style={{fontSize: '8vw', cursor: 'pointer', color: '#4bc0c8'}} onClick={this.toggleVideo}></i>
              </div>
          </div>
        </div>
      </> :  <Embed className="video" id='351458915' defaultActive source='vimeo' style={{padding: 0}}  />
  }
}

export default App;
