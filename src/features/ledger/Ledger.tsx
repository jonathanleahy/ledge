import React, {useState} from 'react';

import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {
    incrementByAmount,
    decrementByAmount,
    LedgerTransactionsState,
    selectLatestBalance,
    selectOverdraftLimit,
    selectHappyLimit, selectAboveHappyValue, selectStartingBalance,
} from './ledgerSlice';

import styles from './Ledger.module.css';
import {useSelector} from "react-redux";
import {RootState} from "../../app/store";
import TransactionsGridRow from "../../components/transactions-grid-row";

export function Ledger() {

    const dispatch = useAppDispatch();

    const startingBalance = useAppSelector(selectStartingBalance);
    const calcBalance = useAppSelector(selectLatestBalance);
    const overdraftLimit = useAppSelector(selectOverdraftLimit);
    const happyLimit = useAppSelector(selectHappyLimit);
    const aboveHappyLimit = useAppSelector(selectAboveHappyValue);

    const [transactionAmount, setTransactionAmount] = useState('22');
    const [dateOfTransaction, setDateOfTransaction] = useState('01/02/2022');

    const transactionValue = Number(transactionAmount) || 0;

    const transactions = useSelector((state: RootState) => state.ledger.transactions);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-7 bodyentry">
                                <h3>My Actions:</h3>
                                <div className="row">
                                    <div className="col-5">
                                        Amount £
                                    </div>
                                    <div className="col-7">
                                        <input
                                            className={styles.textbox}
                                            value={transactionAmount}
                                            onChange={(e) => setTransactionAmount(e.target.value)}
                                        /><br/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-5">
                                        Date
                                    </div>
                                    <div className="col-7">
                                        <input
                                            className={styles.datebox}
                                            value={dateOfTransaction}
                                            onChange={(e) => setDateOfTransaction(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <button
                                            className={styles.button}
                                            onClick={() => dispatch(incrementByAmount({
                                                value: transactionValue,
                                                date: dateOfTransaction
                                            }))}
                                        >
                                            Make Deposit
                                        </button>
                                        <button
                                            className={styles.button}
                                            onClick={() => dispatch(decrementByAmount({
                                                value: transactionValue,
                                                date: dateOfTransaction
                                            }))}
                                        >
                                            Make Withdrawal
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5 bodyrotate">
                                <h3>My Status:</h3>
                                Current Balance: £{calcBalance}<br/><br/>
                                Overdraft Limit: £{overdraftLimit}<br/><br/>
                                Happy Limit: £{happyLimit}
                                { aboveHappyLimit &&
                                <p>I'm Happy I've got Cash in the Bank</p>}
                            </div>
                        </div>
                        <br/>

                        <div className="row">
                            <div className="col-12">
                                <h3>My Transactions:</h3>
                                <div className="table">
                                    <TransactionsGridRow isHeader date={"Date"} creditordebit={"Credit/Debit"}
                                                         amount={"Amount"}
                                                         balance={"Balance"}/>

                                    <TransactionsGridRow date={'Starting'} creditordebit={''} amount={''} balance={startingBalance}/>

                                    {transactions.map((trans: LedgerTransactionsState) => (
                                        <TransactionsGridRow date={trans.date} creditordebit={trans.status}
                                                             amount={trans.value}/>
                                    ))}

                                    <TransactionsGridRow isFooter date={'Total'} creditordebit={''} amount={''}
                                                         balance={calcBalance}/>
                                </div>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>

        </div>
    );
}
