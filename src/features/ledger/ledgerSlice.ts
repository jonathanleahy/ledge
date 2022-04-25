import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';
import {toast} from "react-toastify";

export interface LedgerTransactionsState {
    date: Date;
    value: number;
    status: 'c' | 'd';
}

export interface LedgerState {
    startingBalance: number;
    overdraftLimit: number;
    happyLimit: number;
    transactions: LedgerTransactionsState[];
}

const initialState: LedgerState = {
    startingBalance: 100,
    overdraftLimit: 250,
    happyLimit: 150,
    transactions: [],
};

export interface TransactionPayload {
    value: number;
    date: Date;
}

export const ledgerSlice = createSlice({
    name: 'ledger',
    initialState,
    reducers: {
        incrementByAmount: (state, action: PayloadAction<TransactionPayload>) => {
            let a: LedgerTransactionsState = {date: action.payload.date, value: action.payload.value, status: 'c'};
            state.transactions.push(a)
        },
        decrementByAmount: (state, action: PayloadAction<TransactionPayload>) => {
            let a: LedgerTransactionsState = {date: action.payload.date, value: action.payload.value, status: 'd'};
            let balance = state.startingBalance + sumOfTransactions(state.transactions)
            if (balance - action.payload.value > -state.overdraftLimit) {
                state.transactions.push(a)
            } else {
                toast.error(`You don't have enough in your account to make that withdrawal.`);
            }
        },
    },
});

export const {incrementByAmount, decrementByAmount} = ledgerSlice.actions;

export const selectOverdraftLimit = (state: RootState) => (state.ledger.overdraftLimit );

export const selectHappyLimit = (state: RootState) => (state.ledger.happyLimit );

export const selectStartingBalance = (state: RootState) => (state.ledger.startingBalance );

export function selectAboveHappyValue(state: RootState) {
    let currentBalance:number  = state.ledger.startingBalance + sumOfTransactions(state.ledger.transactions);
    return ((currentBalance - state.ledger.happyLimit) > 0 ? true : false);
}

export function selectLatestBalance(state: RootState) {
    let currentBalance:number = state.ledger.startingBalance + sumOfTransactions(state.ledger.transactions)
    return currentBalance
}

function sumOfTransactions(transactions: LedgerTransactionsState[]) {
    return (transactions.reduce((a, b) => a + ((b.status === 'c') ? b.value : -b.value), 0))
}

export default ledgerSlice.reducer;
