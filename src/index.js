import { configureStore } from '@reduxjs/toolkit'

const reducer = (state=0, action) => {
    switch(action.type) {
        case 'INC': 
            return state + 1;
        case 'DEC': 
            return state - 1;
        case 'RESET': 
            return 0;
        default:
            return state
    }
}

const store = configureStore({reducer})

const inc = document.getElementById('plus');
inc.addEventListener('click', () => {
    store.dispatch({type: 'INC'})
});

const dec = document.getElementById('minus');
dec.addEventListener('click', () => {
    store.dispatch({type: 'DEC'})
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
    store.dispatch({type: 'RESET'})
});

const update = () => {
    document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);