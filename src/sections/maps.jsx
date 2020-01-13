import React, { useState } from 'react';

import { Navbar, Nav, Card } from 'react-bootstrap';

import CustomsMap from '../maps/customs.png'
import InterchangeMap from '../maps/interchange.jpg'
import FactoryMap from '../maps/factory.png'
import WoodsMap from '../maps/woods.jpg'
import ShorelineMap from '../maps/shoreline.jpg'

const maps = {
    Customs: CustomsMap,
    Interchange: InterchangeMap,
    Factory: FactoryMap,
    Woods: WoodsMap,
    Shoreline: ShorelineMap
}


export function Maps(props){
    const [currentMap, setMap] = useState("Customs")
    var currentMapImage = maps[currentMap];

    const handleSelect = eventKey => setMap(eventKey);

    return (
        <>
            <h1>Maps</h1>
            <Navbar bg="dark" variant="dark">
                <Nav bg="dark" variant="pills" defaultActiveKey="Customs" onSelect={handleSelect} >
                    {Object.keys(maps).map(mapName => {
                        return (
                            <Nav.Item>
                                <Nav.Link eventKey={mapName}>{mapName}</Nav.Link>
                            </Nav.Item>
                        );
                    })}
                </Nav>
            </Navbar>
            <img src={currentMapImage} alt="Map"/>
        </>
    );
}