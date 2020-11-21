import React, { Component } from 'react';
import SubMenu from './SubMenu';

export default class RightNav extends Component {
    render() {
        return (
            <div>
                <SubMenu title="Laptop" icon="fa fa-laptop" />
                <SubMenu title="Deskop" icon="fa fa-desktop"/>
                <SubMenu title="Memory-RAM" icon="fa fa-memory"/>
                <SubMenu title="Processors" icon="fa fa-microchip"/>
                <SubMenu title="Monitors" icon="fa fa-tv"/>
                <SubMenu title="Casings" icon="fa fa-box"/>
                <SubMenu title="Storage" icon="fa fa-hdd"/>
                <SubMenu title="Mouse" icon="fa fa-mouse"/>
                <SubMenu title="Keybords" icon="fa fa-keyboard"/>
                <SubMenu title="Chairs" icon="fa fa-chair-office"/>
            </div>
        )
    }
}