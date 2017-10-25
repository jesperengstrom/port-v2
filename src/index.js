import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

window.__forceSmoothScrollPolyfill__ = true;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();