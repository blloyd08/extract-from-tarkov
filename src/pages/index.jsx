import React from 'react';
import { Container } from "react-bootstrap"

import { Header } from '../components/header';
import { QuickLinks } from '../sections/quicklinks';
import { Maps } from '../sections/maps';

export default function index(props){
    return (
        <>
            <Header />
            <Container>
                <div className="text-center">
                    <h1>How do you escape from tarkov?</h1>
                    <h3>Don't play!</h3>
                </div>
                <QuickLinks />
            </Container>
            <Maps />
        </>
    );
}