import React, { Component } from 'react';
import LowContentBox from './LowContentBox';
import image1 from './lap1.png';

export default class LowContent extends Component {
    render() {
        return (
            <div>
                <LowContentBox image={image1} brand="ASUS" ram="8" vga="2" cpu="4.4" gen="8" type="Laptop" price="180000" />
            </div>
        )
    }
}
