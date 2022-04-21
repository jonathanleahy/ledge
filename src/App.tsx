import React, {useState} from 'react';
import './App.css';
import {NavBar} from "./components/NavBar";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Table} from "./components/Table";
import {DataEntry} from "./components/DataEntry";
import {Card} from "./components/Card";
import {Stats} from "./components/Stats";
import {GeneralDescription} from "./components/GeneralDescription";

function App() {

    return (
        <div className="App">

            <NavBar/>

            <header className="App-header">

                <Header/>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <DataEntry/>
                    </div>
                    <div>
                        <Card/>
                    </div>
                </div>

                <Table/>

                <GeneralDescription/>

                <Stats/>

            </header>

            <Footer/>
        </div>
    );
}

export default App;
