import React, { Component } from 'react';
import { animateScroll as scroll } from "react-scroll";
import { Embed } from 'semantic-ui-react';
class App extends Component {
  
  componentDidMount() {
    scroll.scrollToTop();
  }

  toggleVideo = () => {
    scroll.scrollToBottom()
  }

  render () {

    return (
      <>
        <div className='home' style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div>
            <h1>To</h1>
            <h1>Mr & Mrs</h1>
            <h1>Rabiego</h1>
            <div style={{textAlign: 'center', marginTop: '2em'}}>
              <i className="far fa-play-circle" style={{fontSize: '8vw', cursor: 'pointer', color: '#4bc0c8'}} onClick={this.toggleVideo}></i>
              </div>
          </div>
        </div>
        <Embed className="video" id='JBIjStILH9E' active={true} source='youtube' />
      </>
    );
  }
}

export default App;