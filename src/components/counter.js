import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import plus from '../Plus.png';
import minus from '../Minus.jpg';
import res from '../Reset.png';
import '../index.css';


const Counter = ({counter, inc, dec, reset}) => {

    return (
        <div className='background'>
            <div className="counter-block">{counter}</div>
            <button className="btn-plus" onClick={inc}>
                <img src={plus} alt="plus"/>
            </button>
            <button className="btn-minus" onClick={dec}>
                <img src={minus} alt="minus"/>
            </button>
            <button className="btn-reset" onClick={reset}>
                <img src={res} alt="reset"/>
            </button>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);