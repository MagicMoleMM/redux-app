import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/app';

const store = configureStore({reducer})

const root = createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App/></Provider>);




