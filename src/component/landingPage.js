import React from 'react';
import Routing from '../router/router.js'
import '../App.css';
import TopMenu from '../component/header.js'

export default function LandingPage() {
    return (
        <div className="App">
            <TopMenu/>
            <Routing/>
        </div>
    )
}