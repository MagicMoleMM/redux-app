import React from 'react';
import { createRoot } from 'react-dom/client';
import { configureStore, bindActionCreators } from '@reduxjs/toolkit'
import reducer from './reducer';
import * as actions from './actions';
import Counter from './counter';



const store = configureStore({reducer})
const {dispatch} = store;
const {inc, dec, reset} = bindActionCreators(actions, dispatch);

const root = createRoot(document.getElementById('root'));

const update = () => {
    root.render(
        <Counter 
            counter={store.getState()}
            inc={inc}
            dec={dec}
            reset={reset}
            />
    )
}

update();
store.subscribe(update);



