import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

/*ReactDOM.render(<App />,
    document.getElementById('root'));*/
ReactDOM.unstable_createRoot(document.getElementById('root'))
    .render(<App />);