import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import imagePreloader from './components/shared/ImageLoader/imageLoader'

imagePreloader();
ReactDOM.render(<App />, document.getElementById('root'));
