import React, {useState} from 'react';
import './App.css';
import {NavBar} from "./components/NavBar";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {TableOfTransactions} from "./components/TableOfTransactions";
import {TransactionDateEntry} from "./components/TransactionDateEntry";
import {CardDetailed} from "./components/CardDetailed";
import {StatusStatsBar} from "./components/StatusStatsBar";
import {GeneralDescription} from "./components/GeneralDescription";

function App() {

    return (
        <div className="App">

            <NavBar/>

            <header className="Body-centered">

                <Header title="LedgeARoo!"
                        subtitle={"ᵒᴼ▫ₒ▫ᴼᵒ▫∙ BaLAncINg YoUR CAsh SiNce 1992 ∙▫ᵒᴼ▫ₒ▫ᴼᵒ"}
                />
                <br/>

                <GeneralDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis diam id odio tempor, eu
                    rutrum ante volutpat. Nulla sed enim scelerisque, gravida nisl quis, imperdiet arcu. Morbi
                    ornare arcu quis sem semper congue.
                </GeneralDescription>
                <br/>

                <div className="grid grid-cols-2 gap-4">
                    <TransactionDateEntry/>
                    <CardDetailed title="Current Balance"
                                  value="£31,000"
                                  desc="Jan 1st"
                                  image="money-shutterstock.jpg"
                                  isIconInfo
                    />
                </div>
                <br/>
                <br/>

                <TableOfTransactions/>
                <br/>

                <GeneralDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis diam id odio tempor, eu
                    rutrum ante volutpat. Nulla sed enim scelerisque, gravida nisl quis, imperdiet arcu. Morbi
                    ornare arcu quis sem semper congue.
                </GeneralDescription>
                <br/>

                <StatusStatsBar
                    overdraftValue="£250"
                    happyValue={"£4000"}
                />
                <br/>
                <br/>

            </header>

            <Footer/>
        </div>
    );
}

export default App;
