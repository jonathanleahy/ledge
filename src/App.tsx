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
    decrementByAmount, incrementByAmount,
    selectAboveHappyValue,
    selectHappyLimit,
    selectLatestBalance,
    selectOverdraftLimit,
    selectStartingBalance
} from "./features/ledger/ledgerSlice";
import {useSelector} from "react-redux";
import {RootState} from "./app/store";
import {Button, Modal} from 'react-daisyui';
import {hideErrorModal, selectIsVisibleError, showErrorModal} from "./features/error-modal/errorModalSlice";

function App() {

    const dispatch = useAppDispatch();

    const startingBalance = useAppSelector(selectStartingBalance);
    const currentBalance = useAppSelector(selectLatestBalance);
    const overdraftLimit = useAppSelector(selectOverdraftLimit);
    const happyLimit = useAppSelector(selectHappyLimit);
    const aboveHappyLimit = useAppSelector(selectAboveHappyValue);

    const [transactionAmount, setTransactionAmount] = useState('22');
    const [transactionDate, setTransactionDate] = useState(new Date());

    const transactionValue = Number(transactionAmount) || 0;

    const transactions = useSelector((state: RootState) => state.ledger.transactions);

    const visible = useAppSelector(selectIsVisibleError);

    const hideVisible = () => {
        // setVisible(!visible)
        dispatch(hideErrorModal({value: 22}))
    }

    return (
        <div className="App">

            <Modal open={visible}>
                <p >
                    <h3 className="font-bold text-lg">Withdrawal Cancelled</h3>
                    <p className="py-4">You have insufficient funds in your account to make this withdrawal.</p>
                    <div className="modal-action">
                        <Button onClick={() => hideVisible()}>OKAY</Button>
                    </div>
                </p>
            </Modal>

            <NavBar/>

            <header className="Body-centered">

                <Header title="LedgeARoo!"
                        subtitle={"ᵒᴼ▫ₒ▫ᴼᵒ▫∙ BaLAncINg YoUR CAsh SiNce 1992 ∙▫ᵒᴼ▫ₒ▫ᴼᵒ"}
                />

                <GeneralDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis diam id odio tempor, eu
                    rutrum ante volutpat. Nulla sed enim scelerisque, gravida nisl quis, imperdiet arcu. Morbi
                    ornare arcu quis sem semper congue.
                </GeneralDescription>

                <div className="grid grid-cols-2 gap-4">
                    <TransactionDateEntry
                        date={transactionDate}
                        value={transactionAmount}
                    />

                    { (aboveHappyLimit) &&
                        <CardDetailed title="Current Balance"
                                      value={`£${currentBalance}`}
                                      desc="Jan 1st"
                                      image="summer-sun-1.jpg"
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
