import React from 'react';
import './App.css';
import Header from './components/Header';
import TimelineEvent from './components/TimelineEvent';
import data from './data';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="curved-div upper">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L60,58.7C120,53,240,43,360,85.3C480,128,600,224,720,250.7C840,277,960,235,1080,192C1200,149,1320,107,1380,85.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
    </div>  
    <div className="curved-div">
      <Header
        // imageSource='https://cdn.dribbble.com/users/2705516/screenshots/7091320/dribble-04.jpg'
        title='Social Media in the last decade'
        headerStyles={{color: 'white'}} 
        textStyles={{color: 'white', fontSize: '4rem'}}
      />
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,64L60,58.7C120,53,240,43,360,85.3C480,128,600,224,720,250.7C840,277,960,235,1080,192C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>  
      <TimelineEvent
        data={data}
        showMemories={false} />
    </div>
  );
}

export default App;
