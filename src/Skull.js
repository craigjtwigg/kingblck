import React, { Component } from 'react'
import SkullImg from './assets/kingblck-skull.webp';

export default class Skull extends Component {
    render() {
        return (
            <div className="content">
                <img src={SkullImg} alt="King Blck logo" />
            </div>
        )
    }
}
