import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import data from './data';

ReactDOM.render(
    <App 
        headerTitle='Social Media in the last decade'
        data={data}
        showMemories={false}
        renderHeader={true}
        headerStyles={{backgroundColor: '#8d3b9a', color: 'white'}} 
        textStyles={{color: 'white', fontSize: '4rem'}}
        timelineStyles={{background: 'linear-gradient(to right, #673AB7 0%, #E91E63 100%)'}}

    />, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
