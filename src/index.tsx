import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import data from './data';

ReactDOM.render(
    (
        <div>
            <App 
                headerTitle='Social media in the last decade'
                data={data}
                showMemories={false}
                renderHeader={true}
                headerStyles={{
                    background: 'linear-gradient(to right, #E91E63 0%, #673AB7 100%)', 
                    color: 'white', 
                    minHeight: '65vh',
                    borderBottom: '2px dotted #fff'
                    }} 
                textStyles={{color: 'white', fontSize: '5rem'}}
                timelineStyles={{background: 'linear-gradient(to right, #673AB7 0%, #E91E63 100%)'}}
            />
            <div className='footer'>
                Information taken from &nbsp;
                <a 
                    href='https://www.digitalinformationworld.com/2019/10/social-media-history-infographic.html'
                    target='_blank'
                    rel="noopener noreferrer">
                        digitalinformationworld
                </a>
            </div>
        </div>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
