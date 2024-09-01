import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    increment,
    incrementAsync,
    selectCount,
} from './CounterSlice';

export default function Counter() {  // Removed the redundant export statement above
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    return (<></>
    );
}
