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
import {useAppDispatch, useAppSelector} from "./app/hooks";
import {
    decrementByAmount,
    selectAboveHappyValue,
    selectHappyLimit,
    selectLatestBalance,
    selectOverdraftLimit,
    selectStartingBalance
} from "./features/ledger/ledgerSlice";
import {useSelector} from "react-redux";
import {RootState} from "./app/store";
import TransactionsGridRow from "./components/transactions-grid-row";

function App() {

    const dispatch = useAppDispatch();

    const startingBalance = useAppSelector(selectStartingBalance);
    const currentBalance = useAppSelector(selectLatestBalance);
    const overdraftLimit = useAppSelector(selectOverdraftLimit);
    const happyLimit = useAppSelector(selectHappyLimit);
    const aboveHappyLimit = useAppSelector(selectAboveHappyValue);

    const [transactionAmount, setTransactionAmount] = useState('22');
    const [dateOfTransaction, setDateOfTransaction] = useState('01/02/2022');

    const transactionValue = Number(transactionAmount) || 0;

    const transactions = useSelector((state: RootState) => state.ledger.transactions);

    return (
        <div className="App">

            <NavBar/>

            <header className="Body-centered">

                <Header title="LedgeARoo!"
                        subtitle={"ᵒᴼ▫ₒ▫ᴼᵒ▫∙ BaLAncINg YoUR CAsh SiNce 1992 ∙▫ᵒᴼ▫ₒ▫ᴼᵒ"}
                />

                <p
                    onClick={() => dispatch(decrementByAmount({
                        value: 22,
                        date: "01/01/01"
                    }))}
                    >Click Me</p>

                <GeneralDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis diam id odio tempor, eu
                    rutrum ante volutpat. Nulla sed enim scelerisque, gravida nisl quis, imperdiet arcu. Morbi
                    ornare arcu quis sem semper congue.
                </GeneralDescription>

                <div className="grid grid-cols-2 gap-4">
                    <TransactionDateEntry/>

                    { (aboveHappyLimit) &&
                        <CardDetailed title="Current Balance"
                                      value={`£${currentBalance}`}
                                      desc="Jan 1st"
                                      image="summer-sun.jpg"
                                      imageText="You're Exceeding Your Happy Savings Goal"
                                      isIconInfo
                        />
                    }

                    { (!aboveHappyLimit) &&
                        <CardDetailed title="Current Balance"
                                      value={`£${currentBalance}`}
                                      desc="Jan 1st"
                                      image="money-shutterstock.jpg"
                                      isIconInfo
                        />
                    }

                </div>

                <TableOfTransactions transactions={transactions}/>

                <GeneralDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis diam id odio tempor, eu
                    rutrum ante volutpat. Nulla sed enim scelerisque, gravida nisl quis, imperdiet arcu. Morbi
                    ornare arcu quis sem semper congue.
                </GeneralDescription>

                <StatusStatsBar
                    overdraftValue={`£${overdraftLimit}`}
                    happyValue={`£${happyLimit}`}
                />

            </header>

            <Footer/>
        </div>
    );
}

export default App;
