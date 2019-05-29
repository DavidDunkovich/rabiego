import React, { Component } from 'react';
import { animateScroll as scroll } from "react-scroll";
import { Player } from 'video-react';
class App extends Component {
  
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
    this.state = {
      playing: false
    }
  }
  componentDidMount() {
    scroll.scrollToTop();
  }

  toggleVideo = () => {
    this.setState(prevState => ({playing: !prevState.playing}), () => {
      this.state.playing ? this.playVideo() : this.pauseVideo()
    })
  }
  
  playVideo = () => {
    this.videoRef.current.play();
    scroll.scrollToBottom();
  }

  pauseVideo = () => {
    this.videoRef.current.pause();
    scroll.scrollToTop();
  }

  render () {
    const {playing} = this.state;

    return (
      <>
        <div className='home' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div>
            <h1>To</h1>
            <h1>Mr & Mrs</h1>
            <h1>Rabiego</h1>
            <div style={{textAlign: 'center', marginTop: '2em'}}>
              {!playing ?
                <i className="far fa-play-circle" style={{fontSize: '8vw', cursor: 'pointer', color: '#4bc0c8'}} onClick={this.toggleVideo}></i>
              :
                <i className="far fa-pause-circle" style={{fontSize: '8vw', cursor: 'pointer', color: '#4bc0c8'}} onClick={this.toggleVideo}></i>
              }
              </div>
          </div>
        </div>
        <video className="video" muted controls ref={this.videoRef} src={'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'} type="video/mp4" onClick={this.toggleVideo}>
          Your browser does not support this streaming content.
        </video> 
      </>
    );
  }
}

export default App;