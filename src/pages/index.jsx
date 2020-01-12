import React from 'react';

import { Header } from '../components/header';
import { Maps } from '../sections/maps';

export default function index(props){
    return (
        <>
            <Header />
            <h1>How do you escape from tarkov?</h1>
            <h3>Don't play!</h3>
            <Maps />
        </>
    );
}