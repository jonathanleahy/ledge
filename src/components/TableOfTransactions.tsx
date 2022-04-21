import * as React from 'react';
import {LedgerTransactionsState} from "../features/ledger/ledgerSlice";

type Props = {
    transactions: LedgerTransactionsState[],
};

export const TableOfTransactions = (props: Props) => {

    const sortedTransactions: LedgerTransactionsState[] = props.transactions.sort(function(a, b) {
        let c = new Date(a.date).getTime();
        let d = new Date(b.date).getTime();
        return c > d ? 1 : -1;
    });

    return (
        <>
            <div className="overflow-x-auto">
                <table className="table w-full prose-xl">
                    <thead>
                    <tr>
                        <th></th>
                        <th>Date</th>
                        <th>Transaction</th>
                        <th>Credit/Debit</th>
                        <th>Value</th>
                    </tr>
                    </thead>
                    <tbody>

                    {props.transactions.length == 0 &&
                        <tr>
                            <th></th>
                            <td></td>
                            <td>There are no transactions available.</td>
                            <td></td>
                            <td></td>
                        </tr>
                    }

                    {props.transactions.length > 0 &&
                        <>
                            {sortedTransactions.map((trans: LedgerTransactionsState, index) => (
                                <tr>
                                    <th>{++index}</th>
                                    <td>{trans.date.toLocaleDateString()}</td>
                                    <td>Comment qqpwoeiqweqwe qweqweqwe qwe.</td>
                                    <td>{trans.status === 'c' ? 'Credit' : 'Withdrawal'}</td>
                                    <td>{trans.value}</td>
                                </tr>
                            ))
                            }
                        </>
                    }

                    </tbody>
                </table>
            </div>
            <br/>
        </>
    );
};